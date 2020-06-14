import DialogPrototype, { Eli, dialog } from './DialogPrototype';

class AlertDialog extends DialogPrototype {

    textMessage: HTMLDivElement = null;

    render() {
        this.textMessage = Eli.build('div', {
            className: 'mdc-dialog__content',
        });
        const element = Eli.dialog([
            this.textMessage,
            Eli.build('footer', { className: 'mdc-dialog__actions' }, [
                Eli.dialogAction('close', 'Close')
            ]),
        ]);
        this.parent.appendChild(element);
        this.ctrl = new dialog.MDCDialog(element);
    }

    open(message: string) {
        if (!this.parent) this.render();
        this.ctrl.open();
        this.textMessage.innerHTML = message;
    }
}

export default new AlertDialog();