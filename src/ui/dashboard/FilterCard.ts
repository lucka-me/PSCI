import { MDCSwitch } from "@material/switch";

import { DashboardPrototype, Eli, i18next } from './prototypes';
import StatusKit, { Status, StatusType, StatusReason } from '../../service/status';

interface FilterCardBlock {
    root: HTMLDivElement;
}

interface FilterCardEvents {
    switchType:     (type   : Status, visible: boolean) => void,
    switchReason:   (reason : Status, visible: boolean) => void,
}

class FilterCard extends DashboardPrototype {

    block = {
        type    : { root: null } as FilterCardBlock,
        reason  : { root: null } as FilterCardBlock,
    }

    types: Map<StatusType, MDCSwitch> = new Map();
    reasons: Map<StatusReason, MDCSwitch> = new Map();

    events: FilterCardEvents = {
        switchType:     () => { },
        switchReason:   () => { },
    }

    render() {
        this.block.type.root = Eli.build('div', { className: 'flex-box-row--nowrap' });
        this.block.reason.root = Eli.build('div', { className: 'flex-box-row--wrap' });
        this.root = Eli.build('div', {
            className: [
                'mdc-card',
                'mdc-card--outlined',
                'padding--8',
                'flex--1',
                'flex-shrink--0'
            ].join(' '),
        }, [
            Eli.build('span', {
                className: 'mdc-typography--headline6',
                innerHTML: i18next.t('Filter')
            }),
            Eli.build('span', {
                className: 'mdc-typography--subtitle1',
                innerHTML: i18next.t('Type')
            }),
            this.block.type.root,
            Eli.build('span', {
                className: 'mdc-typography--subtitle1',
                innerHTML: i18next.t('Rejected')
            }),
            this.block.reason.root,
        ]);
        this.setVisible(false);
        this.parent.append(this.root);
        
        for (const reason of StatusKit.reasons.values()) {
            const switchCtrl = FilterCard.buildSwitch(this.block.reason, reason, 'rejected');
            switchCtrl.listen('change', () => {
                this.switchReason(reason, switchCtrl.checked);
            });
            this.reasons.set(reason, switchCtrl);
        }
        for (const type of StatusKit.types.values()) {
            const switchCtrl = FilterCard.buildSwitch(this.block.type, type, type.key);
            switchCtrl.listen('change', () => this.switchType(type, switchCtrl.checked));
            this.types.set(type, switchCtrl);
        }
    }

    switchType(type: Status, checked: boolean) {
        if (type.code > 100) {
            for (const ctrl of this.reasons.values()) {
                ctrl.checked = checked;
            }
        }
        this.events.switchType(type, checked);
    }

    switchReason(reason: Status, checked: boolean) {
        this.events.switchReason(reason, checked);
        const statusRejected = StatusKit.types.get('rejected');
        if (checked && !this.types.get(statusRejected).checked) {
            this.types.get(statusRejected).checked = true;
            this.events.switchType(statusRejected, true);
        }
    }

    static buildSwitch(block: FilterCardBlock, status: Status, type: string) {
        const id = `switch-filter-${status.key}`;
        const element = Eli.build('div', { className: 'mdc-switch' }, [
            Eli.build('div', { className: 'mdc-switch__track' }),
            Eli.build('div', {
                className: 'mdc-switch__thumb-underlay',
                id: id,
            }, [
                Eli.build('div', { className: 'mdc-switch__thumb' }, [
                    Eli.build('input', {
                        type: 'checkbox',
                        className: 'mdc-switch__native-control',
                        role: 'switch',
                    }),
                ]),
            ]),
        ]);
        const container = Eli.build('div', {
            className: 'mdc-switch-box margin-h--4',
        }, [
            element,
            Eli.build('label', {
                className: `fa fa-fw status-${type}`,
                for: id,
                title: i18next.t(status.title),
                innerHTML: status.icon,
            })
        ]);
        block.root.append(container);
        const ctrl = new MDCSwitch(element);
        ctrl.checked = true;
        return ctrl;
    }
}

export default new FilterCard();