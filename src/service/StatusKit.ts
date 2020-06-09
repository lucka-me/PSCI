import * as data from "../data/status.json";

class Status {

    key: string;
    code: number;
    title: string;
    icon: string;

    constructor(key: string, code: number, title: string, icon: string) {
        this.key = key;
        this.code = code;
        this.title = title;
        this.icon = icon;
    }
}

class StatusType extends Status {

    queries: Map<string, string>;

    constructor(
        key: string, code: number, title: string, icon: string,
        queries: Map<string, string>
    ) {
        super(key, code, title, icon);
        this.queries = queries;
    }
}

class StatusReason extends Status {

    color: string;
    keywords: Map<string, Array<string>>;

    constructor(
        key: string, code: number, title: string, icon: string,
        color: string, keyword: Map<string, Array<string>>
    ) {
        super(key, code, title, icon);
        this.color = color;
        this.keywords = keyword;
    }
}

class StatusKit {

    version: string;
    
    types: Map<string, StatusType>;
    reasons: Map<string, StatusReason>;
    codes: Map<number, Status>;

    constructor() {
        this.version = data.version;

        this.codes = new Map();

        this.types = new Map();
        for (const type of data.types) {
            const status = new StatusType(
                type.key, type.code, type.title, type.icon,
                new Map(type.queries as Array<[string, string]>)
            );
            this.types.set(type.key, status);
            this.codes.set(type.code, status);
        }

        this.reasons = new Map();
        for (const reason of data.reasons) {
            const status = new StatusReason(
                reason.key, reason.code, reason.title, reason.icon, reason.color,
                new Map(reason.keywords as Array<[string, Array<string>]>)
            );
            this.reasons.set(reason.key, status);
            this.codes.set(reason.code, status);
        }
    }

    typeMatched(status: number, type: number): boolean {
        if (type < 101) {
            return status === type;
        } else {
            return status > 100;
        }
    }
    
    getTypeByCode(code: number): string {
        if (code === 0) return 'pending';
        if (code === 1) return 'accepted';
        return 'rejected';
    }

    getReasonByCode(code: number): StatusReason {
        if (code < 100) return null;
        for (const value of this.reasons.values()) {
            if (value.code === code) return value;
        }
        return null;
    }
}

export default new StatusKit();
export { Status };