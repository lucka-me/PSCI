import { textField } from "material-components-web";

import DialogPrototype, { Eli, dialog, i18next } from './DialogPrototype';

interface ImportDialogEvents {
    import: (raw: string) => void;
}

class ImportDialog extends DialogPrototype {

    textField: textField.MDCTextField = null;

    events: ImportDialogEvents = {
        import: () => { },
    };

    render() {
        const elementTextField = Eli.build('div', {
            className: [
                'mdc-text-field',
                'mdc-text-field--outlined',
                'mdc-text-field--textarea',
                'mdc-text-field--fullwidth'
            ].join(' '),
        }, [
            Eli.build('textarea', {
                className: 'mdc-text-field__input code',
                id: 'input-dialog-import-wayfarer',
                rows: 8, cols: 80
            }),
            Eli.build('div', {
                className: 'mdc-notched-outline',
            }, [
                Eli.build('div', { className: 'mdc-notched-outline__leading' }),
                Eli.build('div', {
                    className: 'mdc-notched-outline__notch',
                }, [
                    Eli.build('label', {
                        className: 'mdc-floating-label',
                        for: 'input-dialog-import-wayfarer',
                        innerHTML: 'JSON',
                    }),
                ]),
                Eli.build('div', { className: 'mdc-notched-outline__trailing' }),
            ]),
        ]);
        const contents = [
            elementTextField,
            Eli.build('div', {
                className: 'mdc-text-field-helper-line',
            }, [
                Eli.build('div', {
                    className: 'mdc-text-field-helper-text mdc-text-field-helper-text--persistent',
                }, [
                    i18next.t('From '),
                    Eli.link(
                        'https://wayfarer.nianticlabs.com/api/v1/vault/manage',
                        i18next.t('Wayfarer API'), i18next.t('Wayfarer API')
                    ),
                ]),
            ]),
        ];
        const elementDialog = Eli.dialog([
            Eli.build('h2', {
                className: 'mdc-dialog__title',
                innerHTML: i18next.t('Import')
            }),
            Eli.build('div', {
                className: 'mdc-dialog__content',
            }, contents),
            Eli.build('footer', {
                className: 'mdc-dialog__actions',
            }, [
                Eli.dialogAction('close' , i18next.t('Close' )),
                Eli.dialogAction('import', i18next.t('Import')),
            ]),
        ]);
        this.parent.appendChild(elementDialog);
        this.ctrl = new dialog.MDCDialog(elementDialog);
        this.textField = new textField.MDCTextField(elementTextField);
        this.ctrl.listen('MDCDialog:closed', (event: CustomEvent) => {
            this.closed(event);
        });
    }

    open() {
        if (!this.ctrl) this.render();
        this.ctrl.open();
    }

    closed(event: CustomEvent) {
        if (event.detail.action === 'import') {
            this.events.import(this.textField.value);
        }
    }
}

export default ImportDialog;