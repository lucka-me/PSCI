import i18next from 'i18next';

import { eli } from "./eli";
import { service } from 'service';
import Nomination from 'service/nomination';
import { StatusReason, StatusType } from 'service/status';

import AppBar, { AppBarMenuItems, AppBarActions } from './app-bar';
import Dark         from "./dark";
import Dialog       from './dialog';
import Progress     from './progress';
import Snackbar     from './snackbar';

import type Dashboard   from './dashboard';
import type ListView    from './list-view';

import './style.scss'

export namespace ui {

    const appBar     = new AppBar();
    const dark       = new Dark();
    const dialog     = new Dialog();
    const progress   = new Progress();
    const snackbar   = new Snackbar();

    let mainBox  : HTMLDivElement    = null;
    let dashboard: Dashboard         = null;
    let list     : ListView          = null;

    export function init() {
        document.documentElement.lang = i18next.language;

        const body = document.body;
        body.className = 'mdc-typography flex-box-col';

        // AppBar
        appBar.events.set(AppBarActions.view.key   , () => switchView());
        appBar.events.set(AppBarActions.signin.key , () => service.auth.signIn());
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
            AppBarMenuItems.import.key, () => dialog.import.open()
        );
        appBar.menu.events.set(
            AppBarMenuItems.about.key, () => dialog.about.open()
        );
        appBar.menu.events.set(
            AppBarMenuItems.signout.key, () => service.auth.signOut()
        );
        appBar.init(body);

        // Progress
        progress.init(body);

        // MainBox
        mainBox = eli.build('div', {
            className: [
                'flex--1',
                'flex-box-row--wrap',
                'main-box'
            ].join(' '),
            cssText: [
                'min-height: 0%',
            ].join(';'),
        });
        body.append(mainBox);

        // Snackbar
        snackbar.init(body);

        // Dialog
        dialog.details.events.update = (nomination) => {
            update(nomination);
        };
        dialog.details.events.query = (bsId, succeed, failed) => {
            service.bs.query(bsId, succeed, failed);
        };
        dialog.details.map.events.queryLngLat = (bsId, succeed, failed) => {
            service.bs.queryLocation(bsId, succeed, failed);
        };
        dialog.import.import = (raw) => {
            service.importJSON(raw);
        };
        dialog.init(body);

        // Dark
        dark.init(body);

        linkService();
    }

    function linkService() {
        // Service
        service.events.authStatusChanged = (signedIn) => authStatChanged(signedIn);
        if (!navigator.onLine) authStatChanged(false);
        service.events.progressUpdate = (percent) => {
            progress.progress = percent;
        }
        service.events.start = () => {
            preloadModules();
            progress.open();
        };
        service.events.idle = () => {
            show();
        };
        service.events.clear = () => {
            clear();
        };
        service.events.alert = (message) => {
            dialog.alert.open(message);
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

        // Mari
        service.mari.events.buffer = (percent) => {
            progress.buffer = percent;
        };
        service.mari.events.progress = (percent) => {
            progress.progress = percent * 0.9;
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
            appBar.menu.items.get(AppBarMenuItems.signout.key).hidden = false;
        } else {
            clear();
            appBar.actions.get(AppBarActions.signin.key).hidden = !navigator.onLine;
            appBar.menu.items.get(AppBarMenuItems.signout.key).hidden = true;
            appBar.menu.items.get(AppBarMenuItems.upload.key).hidden = true;
            appBar.menu.items.get(AppBarMenuItems.import.key).hidden = true;
        }
    }

    function switchView() {
        if (!dashboard) return;
        appBar.switchView();
        dashboard.root.classList.toggle('view-hide');
        list.root.classList.toggle('view-hide');
    }

    function clear() {
        appBar.menu.items.get(AppBarMenuItems.open.key).hidden = false;
        appBar.menu.items.get(AppBarMenuItems.save.key).hidden = true;
        progress.close();
        progress.buffer = 0;
        progress.progress = 0;
        
        if(!dashboard) return;
        dashboard.setVisible(false);
        list.clear();
        dashboard.map.update(service.nominations);
    }

    function show() {
        prepareViews().then(() => {
            dashboard.setVisible(true);
            dashboard.map.fit(service.nominations);
            dashboard.refresh(service.nominations);
            list.show(service.nominations);

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
        import(/* webpackChunkName: 'dashboard' */ './dashboard');
        import(/* webpackChunkName: 'listview' */  './list-view');
    }

    /**
     * Prepare the Dashboard and ListView
     * - First time: Load modules, build views and register events
     * - After: Return directly
     */
    async function prepareViews() {

        if (dashboard) return;

        // Lazyload Dashboard
        const Dashboard = await import(
            /* webpackChunkName: 'dashboard' */
            './dashboard'
        );
        dashboard = new Dashboard.default();
        dashboard.init(mainBox);
        service.events.updateBs = () => {
            dashboard.bs.update(service.nominations);
        }
        dashboard.map.events.styleLoaded = () => {
            return service.nominations;
        }
        dashboard.filter.events.switchType = (type, visible) => {
            if (type.key !== 'rejected' || !visible) {
                for (const nomination of service.nominations) {
                    if (service.status.typeMatched(nomination.status.code, type.code)) {
                        document.getElementById(`card-${nomination.id}`).hidden = !visible;
                    }
                }
            }
            if (type.key === 'rejected') {
                dashboard.map.reasonFilter = dashboard.filter.reasonFilter;
                dashboard.map.updateRejected(service.nominations);
            }
            dashboard.map.setTypeVisible(type.key, visible);
        };
        dashboard.filter.events.switchReason = (reason, visible) => {
            for (const nomination of service.nominations) {
                if (nomination.status.code !== reason.code) continue;
                document.getElementById(`card-${nomination.id}`).hidden = !visible;
            }
            dashboard.map.reasonFilter = dashboard.filter.reasonFilter;
            dashboard.map.updateRejected(service.nominations);
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
            /* webpackChunkName: 'listview' */
            './list-view'
        );
        list = new ListView.default();
        list.init(mainBox);

        list.events.focus = (nomination) => {
            dashboard.map.easeTo(nomination.lngLat);
        }
        list.events.openDetails = (nomination) => {
            dialog.details.open(nomination);
        }
        dashboard.map.events.focus = (id) => {
            const top = list.root.offsetTop + 8;
            list.root.scrollTo(
                0, document.getElementById(`card-${id}`).offsetTop - top
            );
        }
    }

    function update(nomination: Nomination) {
        if (!dashboard) return;
        dashboard.update(service.nominations);
        let visibility = false;
        if (nomination.status instanceof StatusReason) {
            visibility = dashboard.filter.reasons.get(nomination.status).checked;
        } else if (nomination.status instanceof StatusType) {
            visibility = dashboard.filter.types.get(nomination.status).checked;
        }
        list.update(nomination, visibility);
    }

    function openFileUI(opened: (file: File) => void) {
        const element = eli.build('input', {
            cssText: 'display:none;',
            type: 'file', accept: 'json'
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
        const element = eli.build('a', {
            cssText: 'display:none',
            href: href,
            download: filename,
        });
        document.body.append(element);
        element.click();
        element.remove();
    }
}