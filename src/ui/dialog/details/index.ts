import { MDCFormField } from "@material/form-field";
import { MDCRadio } from "@material/radio";
import { MDCSelect } from "@material/select";
import { MDCTextField } from "@material/textfield";

import AlertDialog from '../alert';
import DetailsDialogMap from "./map";
import DialogPrototype, {
    i18next, MDCDialog,
    eli,
    service, Nomination
} from '../base';

interface DetailsDialogEvents {
    update: (nomination: Nomination) => void;
    query: (bsId: string, succeed: (data: any) => void, failed: () => void) => void;
}

class DetailsDialog extends DialogPrototype {

    nomination: Nomination = null;

    headingTitle: HTMLHeadingElement = null;
    image: HTMLImageElement = null;
    textConfirmedTime: HTMLSpanElement = null;

    status = new Map<string, MDCRadio>();
    selectedStatus: string = null;
    fieldResultTime: MDCTextField = null;
    selectReason: MDCSelect = null;
    elementReason: HTMLDivElement = null;

    map = new DetailsDialogMap();

    events: DetailsDialogEvents = {
        update      : () => { },
        query       : () => { },
    };

    async render() {
        this.headingTitle = eli.build('h2', {
            className: 'mdc-dialog__title',
            dataset: { mdcDialogInitialFocus: '' },
            innerHTML: '',
        });

        this.image = eli.build('img', {
            cssText: [
                'object-fit:cover', 'object-position:center',
                'width:100%', 'height:150px;'
            ].join(';')
        });

        this.textConfirmedTime = eli.build('span', {
            className: 'margin-l--4'
        });

        const statusRadios: Array<HTMLDivElement> = [];
        for (const key of service.status.types.keys()) {
            const radioId = `radio-dialog-details-status-${key}`;

            const inputRadio = eli.build('input', {
                type: 'radio',
                className: 'mdc-radio__native-control',
                name: 'radio-dialog-details-status',
                value: key,
            });
            inputRadio.addEventListener('change', (event: Event) => {
                const target = event.target as HTMLInputElement;
                this.selectedStatus = target.value;
                (this.fieldResultTime.root as HTMLElement).hidden = (target.value === 'pending');
                this.fieldResultTime.layout();
                this.elementReason.hidden = !(target.value === 'rejected');
                this.selectReason.layout();
                this.map.ctrl.resize();
            });
            const elementRadio = eli.build('div', {
                className: 'mdc-radio',
            }, [
                inputRadio,
                eli.build('div', {
                    className: 'mdc-radio__background',
                }, [
                    eli.build('div', { className: 'mdc-radio__outer-circle' }),
                    eli.build('div', { className: 'mdc-radio__inner-circle' }),
                ]),
            ]);
            const elementField = eli.build('div', {
                className: 'mdc-form-field',
            }, [
                elementRadio,
                eli.build('label', {
                    for: radioId,
                    className: `fa status-${key}`,
                    innerHTML: service.status.types.get(key).icon,
                }),
            ]);

            const radioCtrl = new MDCRadio(elementRadio);
            this.status.set(key, radioCtrl);
            const field = new MDCFormField(elementField);
            field.input = radioCtrl;
            statusRadios.push(elementField);
        }

        const elementResultTime = eli.build('div', {
            className: [
                'mdc-text-field',
                'mdc-text-field--outlined',
                'mdc-text-field--with-leading-icon',
                'margin-v--8',
                'margin-h--4',
                'flex-grow--1'
            ].join(' '),
        }, [
            eli.build('i', {
                className: [
                    'fa',
                    'mdc-text-field__icon',
                    'mdc-text-field__icon--leading'
                ].join(' '),
                innerHTML: '\uf073',
            }),
            eli.build('input', {
                type: 'datetime-local',
                className: 'mdc-text-field__input',
                id: 'input-dialog-details-result-time',
            }),
            DetailsDialog.buildNotchedOutline({
                for: 'input-dialog-details-result-time',
                innerHTML: i18next.t('Result Time'),
            }),
        ]);
        this.fieldResultTime = new MDCTextField(elementResultTime);

        const itemsSelectReason = [];
        for (const [key, value] of service.status.reasons.entries()) {
            itemsSelectReason.push(eli.build('li', {
                className: 'mdc-list-item',
                dataset: { value: key },
            }, [
                eli.build('span', { className: 'mdc-list-item__ripple' }),
                eli.build('span', {
                    className: 'mdc-list-item__text',
                    innerHTML: i18next.t(value.title),
                }),
            ]));
        }
        this.elementReason = eli.build('div', {
            className: [
                'mdc-select',
                'mdc-select--outlined',
                'margin-v--8',
                'margin-h--4'
            ].join(' '),
        }, [
            eli.build('div', {
                className: 'mdc-select__anchor',
            }, [
                DetailsDialog.buildNotchedOutline({ innerHTML: i18next.t('Reason') }),
                eli.build('span', { className: 'mdc-select__selected-text' }),
                eli.build('span', { className: 'mdc-select__dropdown-icon' }, [
                    DetailsDialog.buildSVG('svg', {
                        'class': 'mdc-select__dropdown-icon-graphic',
                        'viewBox': '7 10 10 5',
                        'focusable': false
                    }, [
                        DetailsDialog.buildSVG('polygon' , {
                            'class': 'mdc-select__dropdown-icon-inactive',
                            'stroke': 'none',
                            'fill-rule': 'evenodd',
                            'points': '7 10 12 15 17 10'
                        }),
                        DetailsDialog.buildSVG('polygon' , {
                            'class': 'mdc-select__dropdown-icon-active',
                            'stroke': 'none',
                            'fill-rule': 'evenodd',
                            'points': '7 15 12 10 17 15'
                        })
                    ])
                ]),
            ]),
            eli.build('div', {
                className: 'mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth',
            }, [
                eli.build('ul', {
                    className: 'mdc-list',
                    role: 'listbox'
                }, itemsSelectReason),
            ]),
        ]);
        this.selectReason = new MDCSelect(this.elementReason);
        this.selectReason.selectedIndex = 0;

        const elementContents = eli.build('div', {
            className: 'mdc-dialog__content',
        }, [
            eli.build('div', {
                className: [
                    'mdc-typography--body1',
                    'flex-box-row--nowrap',
                    'flex-align-items--center'
                ].join(' '),
            }, [
                eli.icon('&#xf062'), this.textConfirmedTime,
            ]),
            eli.build('div', {
                className: [
                    'fullwidth',
                    'flex-box-row--nowrap',
                    'flex-justify-content--around'
                ].join(' '),
            }, statusRadios),
            eli.build('div', {
                className: 'flex-box-row--wrap',
            }, [ elementResultTime, this.elementReason ]),
        ]);
        await this.map.init(elementContents);
        const elementDialog = DialogPrototype.buildDialog([
            this.headingTitle,
            this.image,
            elementContents,
            eli.build('footer', {
                className: 'mdc-dialog__actions',
            }, [
                DialogPrototype.buildDialogAction('close', 'Close'),
                DialogPrototype.buildDialogAction('save' , 'Save' ),
            ]),
        ]);
        this.parent.append(elementDialog);
        this.ctrl = new MDCDialog(elementDialog);
        this.ctrl.listen('MDCDialog:opened', () => this.opened());
        this.ctrl.listen('MDCDialog:closed', (event: CustomEvent) => this.closed(event));
        this.map.dialog = this.ctrl;
    }

    /**
     * Prepare the component
     * - First time: Build components
     * - After: Return directly
     */
    private async prepare() {
        if (this.ctrl) return;
        await this.render();
    }

    opened() {
        this.fieldResultTime.layout();
        this.selectReason.layout();
        this.map.ctrl.resize();
    }

    closed(event: CustomEvent) {
        if (event.detail.action !== 'save') return;
        const keys = {
            type: service.status.getTypeByCode(this.nomination.status.code),
            reason: service.status.getReasonByCode(this.nomination.status.code),
        }
        const selectedStatus = this.selectedStatus;
        let shouldUpdate = false;
        if (selectedStatus !== 'pending') {
            const time = Date.parse(this.fieldResultTime.value);
            if (!time) {
                AlertDialog.open(i18next.t('message:Invalid DateTime'));
                return;
            }
            const newTime = time + (new Date().getTimezoneOffset() * 60000);
            if (!this.nomination.resultTime || (Math.floor(this.nomination.resultTime / 60000) !== Math.floor(newTime / 60000))) {
                this.nomination.resultTime = newTime;
                shouldUpdate = true;
            }
        }
        const reason = this.selectReason.value;
        if (selectedStatus !== keys.type) {
            shouldUpdate = true;
        } else if ((keys.type === 'rejected') && (keys.reason.key !== reason)) {
            shouldUpdate = true;
        }
        if (this.map.marker) {
            const lngLat = this.map.marker.getLngLat();
            if (!this.nomination.lngLat
                || (this.nomination.lngLat.lng !== lngLat.lng || this.nomination.lngLat.lat !== lngLat.lat)
            ) {
                this.nomination.lngLat = lngLat;
                shouldUpdate = true;
            }
        } else if (this.nomination.lngLat) {
            this.nomination.lngLat = null;
            shouldUpdate = true;
        }
        if (shouldUpdate) {
            if (this.selectedStatus !== 'rejected') {
                this.nomination.status = service.status.types.get(this.selectedStatus);
            } else {
                this.nomination.status = service.status.reasons.get(this.selectReason.value);
            }
            this.events.update(this.nomination);
        }
    }

    open(nomination: Nomination) {
        this.prepare().then(() => {
            this.nomination = nomination;
            this.map.set(nomination);
            const type = service.status.getTypeByCode(nomination.status.code);

            this.headingTitle.innerHTML = nomination.title;
            this.image.src = nomination.imageUrl;
            this.textConfirmedTime.innerHTML = new Date(nomination.confirmedTime).toLocaleString();

            (this.fieldResultTime.root as HTMLElement).hidden = (type === 'pending');
            const getLocalDateTimeISOString = (time: number) => {
                const date = new Date();
                date.setTime(time - date.getTimezoneOffset() * 60000);
                return date.toISOString();
            }
            const resultTimeString = getLocalDateTimeISOString(
                nomination.resultTime ? nomination.resultTime : Date.now()
            );
            this.fieldResultTime.value = resultTimeString.slice(0, resultTimeString.lastIndexOf(':'));

            this.elementReason.hidden = !(type === 'rejected');
            if (type === 'rejected') {
                this.selectReason.selectedIndex = nomination.status.code - service.status.types.get(type).code;
            }
            if (type === 'pending') {
                this.events.query(nomination.id, (data) => {
                    const timeString = getLocalDateTimeISOString(data.lastTime);
                    this.fieldResultTime.value = timeString.slice(0, timeString.lastIndexOf(':'));
                    this.fieldResultTime.layout();
                }, () => {});
            }

            this.status.get(type).checked = true;
            this.selectedStatus = type;

            this.ctrl.open();
        });
    }

    updateStyle() {
        if (!this.map.ctrl) return;
        this.map.ctrl.setStyle(`mapbox:${getComputedStyle(document.documentElement).getPropertyValue('--map-style').trim()}?optimize=true`);
    }

    /**
     * Build a MDC notched outline
     * @param labelOptions Options for the label element
     * @returns The outline element
     */
    static buildNotchedOutline(labelOptions: any): HTMLDivElement {
        labelOptions.className = 'mdc-floating-label';
        return eli.build('div', { className: 'mdc-notched-outline' }, [
            eli.build('div', { className: 'mdc-notched-outline__leading' }),
            eli.build('div', {
                className: 'mdc-notched-outline__notch',
            }, [ eli.build('label', labelOptions), ]),
            eli.build('div', { className: 'mdc-notched-outline__trailing' }),
        ]);
    }

    /**
     * Build a svg element
     * @param tag SVG tag
     * @param options Options for the svg element
     * @param children Chrldren svg elements
     */
    private static buildSVG(
        tag: string, options: any, children?: Array<SVGElement>
    ): SVGElement {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (const [key, value] of Object.entries(options)) {
            svg.setAttributeNS(null, key, `${value}`);
        }
        if (children) svg.append(...children);
        return svg;
    }
}

export default DetailsDialog;