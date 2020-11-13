import { eli } from 'eli/eli';

export function eliIconButton(icon: string, title?: string) {
    return eli('button', {
        className: 'fa mdc-icon-button',
        title: title || '',
        innerHTML: icon,
    });
}