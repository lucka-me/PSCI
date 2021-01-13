import { eli } from '@lucka-labs/eli';
import i18next from 'i18next';

import { service } from 'service';
import { umi } from 'service/umi';
import Nomination from 'service/nomination';

import AppBar, { AppBarMenuItems, AppBarActions } from './app-bar';
import Dark         from './dark';
import Dialog       from './dialog';
import Progress     from './progress';
import Snackbar     from './snackbar';

import type Dashboard       from './dashboard';
import type NominationList  from './nomination-list';

import './style.scss';

export namespace ui {

    const appBar     = new AppBar();
    const dark       = new Dark();
    const dialog     = new Dialog();
    const progress   = new Progress();
    const snackbar   = new Snackbar();

    let mainBox  : HTMLDivElement   = null;
    let dashboard: Dashboard        = null;
    let list     : NominationList   = null;

    export function init() {
        document.documentElement.lang = i18next.language;

        const body = document.body;

        // AppBar
        appBar.events.action.set(AppBarActions.view.key    , () => switchView());
        appBar.events.action.set(AppBarActions.signin.key  , () => service.auth.signIn());
        appBar.events.action.set(AppBarActions.open.key    , () => service.open());
        appBar.events.action.set(AppBarActions.about.key   , () => dialog.about.open());
        appBar.events.backToTop = () => {
            if (!list) return;
            list.backToTop();
        };
        
        appBar.init(body);

        // Progress
        progress.init(body);

        // MainBox
        mainBox = eli('div', { className: 'main-box' });
        body.append(mainBox);

        // Snackbar
        snackbar.init(body);

        // Dialog
        dialog.init(body);
        dialog.about.events.info = (message) => {
            snackbar.show(message);
        };

        // Dark
        dark.init(body);

        linkService();
    }

    function linkService() {
        // Service
        service.events.authStatusChanged = (signedIn) => authStatChanged(signedIn);
        if (!navigator.onLine) authStatChanged(false);
        service.events.progressUpdate = (percent) => progress.progress = percent;
        service.events.bufferUpdate = (percent) => progress.buffer = percent;
        service.events.start = () => {
            appBar.actions.get(AppBarActions.open.key).hidden = true;
            preloadModules();
            progress.open();
        };
        service.events.idle = () => {
            show();
        };
        service.events.clear = () => {
            clear();
        };
        service.events.match = (target, candidate, callback) => {
            prepare().then(() => {
                dialog.match.events.close = callback;
                dialog.match.nominations = [target, candidate];
                dialog.match.open();
            });
        }
        service.events.alert = (message) => {
            dialog.alert.message = message;
            dialog.alert.open();
        }
        service.events.info = (message) => {
            snackbar.show(message);
        }
        // FileKit
        service.file.local.events.openUI = (opened) => {
            openFileUI(opened);
        }
        service.file.local.events.saveUI = (filename, href) => {
            saveFileUI(filename, href);
        }
    }

    /**
     * Handle the Google Auth stat change event
     * Will hide sign in action if offline
     * @param signedIn Is signed in or not
     */
    function authStatChanged(signedIn: boolean) {
        if (signedIn) {
            appBar.actions.get(AppBarActions.signin.key).hidden = true;
            if (appBar.menu) {
                appBar.menu.items.get(AppBarMenuItems.signout.key).hidden = false;
            }
        } else {
            clear();
            appBar.actions.get(AppBarActions.signin.key).hidden = !navigator.onLine;
            if (appBar.menu) {
                appBar.menu.items.get(AppBarMenuItems.signout.key).hidden = true;
                appBar.menu.items.get(AppBarMenuItems.upload.key).hidden = true;
                appBar.menu.items.get(AppBarMenuItems.import.key).hidden = true;
            }
        }
    }

    function switchView() {
        if (!dashboard) return;
        appBar.switchView();
        dashboard.switchView();
        list.switchView();
    }

    function clear() {
        if (appBar.menu) {
            appBar.menu.items.get(AppBarMenuItems.open.key).hidden = false;
            appBar.menu.items.get(AppBarMenuItems.save.key).hidden = true;
            appBar.actions.get(AppBarActions.menu.key).hidden = true;
        }
        appBar.actions.get(AppBarActions.open.key).hidden = false;
        appBar.actions.get(AppBarActions.about.key).hidden = false;
        progress.close();
        progress.buffer = 0;
        progress.progress = 0;
        
        if(!dashboard) return;
        dashboard.setVisible(false);
        list.clear();
        dashboard.map.update(service.nominations);
    }

    function show() {
        prepare().then(() => {
            dashboard.setVisible(true);
            dashboard.map.fit(service.nominations);
            dashboard.refresh(service.nominations);
            list.show(service.nominations);

            appBar.actions.get(AppBarActions.view.key).hidden = false;
            appBar.menu.items.get(AppBarMenuItems.open.key).hidden = true;
            appBar.menu.items.get(AppBarMenuItems.save.key).hidden = false;
            appBar.menu.items.get(AppBarMenuItems.upload.key).hidden = !service.auth.signedIn;
            appBar.menu.items.get(AppBarMenuItems.import.key).hidden = false;
            progress.close();
        });
    }

    /**
     * Start to preload modules
     */
    function preloadModules() {
        import(/* webpackChunkName: 'ui-async' */ './dashboard');
        import(/* webpackChunkName: 'ui-async' */  './nomination-list');
    }

    /**
     * Prepare the Dashboard and ListView
     * - First time: Load modules, build views and register events
     * - After: Return directly
     */
    async function prepare() {

        if (dashboard) return;

        // Prepare app bar menu
        await appBar.prepare();
        appBar.menu.items.get(AppBarMenuItems.signout.key).hidden = !service.auth.signedIn;
        appBar.menu.events.set(
            AppBarMenuItems.open.key, () => service.open()
        );
        appBar.menu.events.set(
            AppBarMenuItems.save.key, () => service.save()
        );
        appBar.menu.events.set(
            AppBarMenuItems.upload.key, () => service.upload()
        );
        appBar.menu.events.set(
            AppBarMenuItems.about.key, () => dialog.about.open()
        );
        appBar.menu.events.set(
            AppBarMenuItems.signout.key, () => service.auth.signOut()
        );

        // Lazyload Dashboard
        const Dashboard = await import(
            /* webpackChunkName: 'ui-async' */
            './dashboard'
        );
        dashboard = new Dashboard.default();
        dashboard.init(mainBox);
        service.events.bsUpdate = () => {
            dashboard.bs.update(service.nominations);
        }
        dashboard.map.events.styleLoaded = () => {
            return service.nominations;
        }
        dashboard.filter.events.switched = (statusMap, reasonMap, reasonChanged) => {
            for (const nomination of service.nominations) {
                if (nomination.status !== umi.StatusCode.Rejected) {
                    document.getElementById(`card-${nomination.id}`).hidden = !statusMap.get(nomination.status);
                } else if (nomination.reasons.length > 0) {
                    let visible = false;
                    for (const code of nomination.reasons) {
                        if (!reasonMap.get(code)) continue;
                        visible = true;
                        break;
                    }
                    document.getElementById(`card-${nomination.id}`).hidden = !visible;
                } else {
                    document.getElementById(`card-${nomination.id}`).hidden = !reasonMap.get(umi.StatusReason.undeclared);
                }
            }
            dashboard.map.filter(statusMap, reasonMap);
            if (reasonChanged) dashboard.map.updateRejected(service.nominations);
        };
        dashboard.bs.events.analyse = (nominations) => {
            return service.bs.analyse(nominations);
        }
        dashboard.bs.basic.events = {
            refresh: () => {
                service.updateBsData();
            },
            clear: () => {
                service.clearBsData();
                dashboard.bs.update([]);
            }
        }
        dark.change = () => {
            if (dashboard) dashboard.updateStyle();
            dialog.details.updateStyle();
        };

        // Lazyload ListView
        const ListView = await import(
            /* webpackChunkName: 'ui-async' */
            './nomination-list'
        );
        list = new ListView.default();
        list.init(mainBox);

        list.events.alert = (message) => {
            dialog.alert.message = message;
            dialog.alert.open();
        };
        list.events.focus = (nomination) => {
            dashboard.map.easeTo(nomination.lngLat);
        };
        dashboard.map.events.focus = (id) => {
            list.focus(id);
        };

        // Prepare async dialogs
        await dialog.prepare();
        // Details dialog
        dialog.details.events.alert = (message) => {
            dialog.alert.message = message;
            dialog.alert.open();
        };
        dialog.details.events.query = (nomination, succeed, failed) => {
            service.bs.query(nomination, succeed, failed);
        };
        dialog.details.events.update = (nomination) => {
            update(nomination);
        };

        list.events.openDetails = (nomination) => {
            dialog.details.nomination = nomination;
            dialog.details.open();
        };

        // Import dialog
        dialog.import.import = (raw) => {
            service.importJSON(raw);
        };

        appBar.menu.events.set(
            AppBarMenuItems.import.key, () => dialog.import.open()
        );
    }

    function update(nomination: Nomination) {
        if (!dashboard) return;
        dashboard.update(service.nominations);
        let visibility = false;
        if (nomination.status === umi.StatusCode.Rejected) {
            if (nomination.reasons.length > 0) {
                visibility = false;
                for (const [code, ctrl] of dashboard.filter.reason) {
                    if (!ctrl.checked || !nomination.reasons.includes(code)) continue;
                    visibility = true;
                    break;
                }
            } else {
                visibility = dashboard.filter.reason.get(umi.StatusReason.undeclared).checked;
            }
        } else {
            visibility = dashboard.filter.status.get(nomination.status).checked;
        }
        list.update(nomination, visibility);
    }

    function openFileUI(opened: (file: File) => void) {
        const element = eli('input', {
            type: 'file', accept: 'json', hidden: true,
        });
        element.addEventListener('change', (event) => {
            opened((event.target as HTMLInputElement).files[0]);
        }, false);
        document.body.append(element);
        element.click();
        setTimeout(() => {
            element.remove();
        }, 1000);
    }

    function saveFileUI(filename: string, href: string) {
        const element = eli('a', {
            href: href,
            download: filename,
            hidden: true,
        });
        document.body.append(element);
        element.click();
        element.remove();
    }
}