// import firebase from "firebase/app";
// import "firebase/database";
import firebase from "firebase";

import Nomination, { LngLat } from "./Nomination";
import StatusKit from "./StatusKit";
import Version from "./Version";

const RateItems = {
    quality: 'Quality',
    description: 'Description',
    cultural: 'Cultural',
    uniqueness: 'Uniqueness',
    safety: 'Safety',
    location: 'Location',
};

interface BrainstormingStats {
    review: number,
    nomination: number,
    rate: Map<string, Array<number>>,
    reviewTimes: Array<number>,
    synch: {
        total: number, synched: number
    },
}

class BrainstormingKit {

    reference: firebase.database.Reference = null;
    data: Map<string, any> = new Map();

    constructor() { }

    init() {
        const app = firebase.initializeApp({ databaseURL: 'https://oprbrainstorming.firebaseio.com' });
        this.reference = app.database().ref('c/reviews/');
    }

    query(bsId: string, succeed: (data: any) => void, failed: () => void) {
        if (this.data.has(bsId)) {
            succeed(this.data.get(bsId));
            return;
        }
        if (!Version.fullFeature) {
            failed();
            return;
        }
        this.reference.child(bsId).once(
            'value',
            (data) => {
                const val = data.val();
                if (!val) {
                    failed();
                    return;
                }
                this.data.set(bsId, val);
                succeed(val);
            },
            (_) => failed(),
        );
    }

    queryLngLat(bsId: string, succeed: (lngLat: LngLat) => void, failed: () => void) {
        this.query(bsId, (data) => {
            succeed({ lng: parseFloat(data.lng), lat: parseFloat(data.lat) });
        }, failed);
    }

    update(nominations: Array<Nomination>, finished: () => void) {
        const queryList = [];
        for (const nomination of nominations) {
            if ((nomination.status.code < 1) || !this.data.has(nomination.id)) {
                queryList.push(nomination.id);
            }
        }
        let left = queryList.length;
        const onQueried = () => {
            left--;
            if (left < 1) finished();
        }
        for (const id of queryList) {
            this.reference.child(id).once(
                'value',
                (data) => {
                    const val = data.val();
                    if (!val) {
                        onQueried();
                        return;
                    }
                    this.data.set(id, val);
                    onQueried();
                },
                (_) => onQueried(),
            );
        }
    }

    analyse(nominations: Array<Nomination>): BrainstormingStats {
        const stats: BrainstormingStats = {
            review: 0,
            nomination: 0,
            rate: new Map(),
            reviewTimes: [],
            synch: { total: 0, synched: 0 },
        };
        const rateKeys = Object.keys(RateItems);
        for (const key of rateKeys) {
            stats.rate.set(key, []);
        }
        const statsRate = (rateJson: any, key: string) => {
            if (rateJson[key]) {
                stats.rate.get(key).push(parseInt(rateJson[key]));
            }
        }
        for (const nomination of nominations) {
            if (!this.data.has(nomination.id)) continue;
            const bs = this.data.get(nomination.id);
            const generals = [];
            for (const key of Object.keys(bs)) {
                if (!key.startsWith('review')) continue;
                const review = bs[key];
                if (!review.stars) continue;
                stats.review += 1;
                generals.push(review.stars);
                const rateJson = review.JSON;
                for (const rateKey of rateKeys) {
                    statsRate(rateJson, rateKey);
                }
                stats.reviewTimes.push(review.Timestamp);
                if (nomination.status.code < 1) continue;
                // Synch
                stats.synch.total += 1;
                if (BrainstormingKit.isSynched(review.stars, nomination.status.code)) {
                    stats.synch.synched += 1;
                }
            }
            if (generals.length < 1) continue;
            stats.nomination += 1;
        }
        return stats;
    }

    static getId(imgUrl: string) {
        return imgUrl.replace(/[^a-zA-Z0-9]/g, '').slice(- 10).toLowerCase();
    }

    static isSynched(stars: string, status: number) {
        const reasons = StatusKit.reasons;
        if (stars === 'D' && status === reasons.get('duplicated').code) {
            return true;
        }
        const general = parseFloat(stars);
        if (isNaN(general)) return false;
        const types = StatusKit.types;
        if (general < 3 && status === reasons.get('undeclared').code) {
            return true;
        }
        if (general > 3 && status === types.get('accepted').code) {
            return true;
        }
        if (general > 3 && status === reasons.get('tooClose').code) {
            return true;
        }
        return false;
    }
}

export default BrainstormingKit;
export { RateItems, BrainstormingStats };