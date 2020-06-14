import { DashboardBsPrototype, BrainstormingStats, Eli } from './prototypes';

class BSSynchCard extends DashboardBsPrototype {

    textSynch: HTMLSpanElement = null;

    render() {
        this.textSynch = Eli.build('span', {
            cssTest: 'font-weight:300;font-size:6rem;line-height:6rem;',
            innerHTML: '0.0',
        })
        this.root = Eli.build('div', {
            className: [
                'mdc-card',
                'mdc-card--outlined',
                'padding--8',
                'flex--1',
                'flex-shrink--1',
                'flex-justify-content--between'
            ].join(' '),
        }, [
            Eli.build('span', {
                className: 'mdc-typography--headline6',
                innerHTML: 'Brainstorming Synch',
            }),
            Eli.build('span', { className: 'text-nowarp' }, [
                this.textSynch,
                Eli.build('span', {
                    cssTest: 'font-size:2rem;line-height:2rem;',
                    innerHTML: '%'
                }),
            ]),
            Eli.build('span', {
                className: 'mdc-typography--body1 text-nowarp',
                innerHTML: 'Reviews match the result',
            }),
        ]);
        this.setVisible(false);
        this.parent.appendChild(this.root);
    }

    updateStats(stats: BrainstormingStats) {
        const rate = stats.synch.total > 0 ? stats.synch.synched / stats.synch.total : 0.0;
        this.textSynch.innerHTML = `${(rate * 100).toFixed(1)}`;
    }
}

export default BSSynchCard;