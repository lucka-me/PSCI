import { Eli } from "./eli.js";

import { DarkKit        } from "./darkKit.js";
import { AppBar         } from './appBar.js';
import { Progress       } from './progress.js';
import { DashboardKit   } from './dashboardKit.js';
import { ListView       } from './list.js';
import { DialogKit      } from './dialogKit.js';

class UIKit {
    constructor() {
        this.dark       = new DarkKit();
        this.appBar     = new AppBar();
        this.progress   = new Progress();
        this.dashboard  = new DashboardKit();
        this.list       = new ListView();
        this.dialog     = new DialogKit();
    }

    init() {
        mapboxgl.accessToken = value.string.mapbox.accessToken;

        this.dark.init();

        const body = document.body;
        body.className = 'mdc-typography fullheight flex-box-col';
        this.appBar.init(body);
        this.progress.init(body);

        const mainBox = Eli.build('div', {
            className: [
                'flex--1',
                'flex-box-row--wrap',
                'main-box'
            ].join(' '),
            styleText: [
                'min-height: 0%',
            ].join(';'),
        });

        body.appendChild(mainBox);
        this.dashboard.init(mainBox);
        this.list.init(mainBox);
        this.dialog.init(body);
    }

    switchView() {
        const switchToList = this.appBar.button.view.root_.innerHTML === 'view_list';
        this.appBar.button.view.root_.innerHTML = switchToList ? 'dashboard' : 'view_list';
        this.appBar.button.view.root_.title = switchToList ? 'Dashboard' : 'List';
        document.querySelector('#dashboard').classList.toggle('view-hide');
        this.dashboard.root.classList.toggle('view-hide');
        this.list.root.classList.toggle('view-hide');
    }

    clear() {
        this.appBar.menu.item.openFile.hidden = false;
        this.appBar.menu.item.saveFile.hidden = true;

        this.dashboard.setVisible(false);
        this.list.clear();
        if (this.dashboard.map.loaded()) this.dashboard.map.update();
        this.progress.ctrl.root_.hidden = true;
        this.progress.ctrl.buffer = 0;
        this.progress.ctrl.progress = 0;
    }

    show() {
        const boundsNE = { lng: -181.0, lat: -91.0 };
        const boundsSW = { lng:  181.0, lat:  91.0 };
        for (const portal of process.portals) {
            if (!portal.lngLat) continue;
            if (portal.lngLat.lng > boundsNE.lng) boundsNE.lng = portal.lngLat.lng;
            else if (portal.lngLat.lng < boundsSW.lng) boundsSW.lng = portal.lngLat.lng;
            if (portal.lngLat.lat > boundsNE.lat) boundsNE.lat = portal.lngLat.lat;
            else if (portal.lngLat.lat < boundsSW.lat) boundsSW.lat = portal.lngLat.lat;
        }
        this.list.show();
        this.dashboard.refresh();
        this.dashboard.setVisible(true);
        if (boundsSW.lng > -181) {
            this.dashboard.map.ctrl.fitBounds([boundsSW, boundsNE], { linear: true });
        }
        this.appBar.menu.item.saveFile.hidden = false;
        this.appBar.menu.item.uploadFile.hidden = !gapi.auth2.getAuthInstance().isSignedIn.get();
        this.appBar.menu.item.import.hidden = false;
        this.progress.ctrl.root_.hidden = true;
    }
}

window.ui = new UIKit();
window.ui.init();