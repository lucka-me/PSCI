import * as fs from 'fs';

namespace locale {
    type Key = string;
    type Translation = string;
    type Item = [Key, Translation];
    type Namespace = string;

    class LocaleData {

        code: string;
        data: Map<Namespace, Array<Item>> = new Map();

        constructor(code: string) {
            this.code = code;
        }

        build(root: string) {
            const dir = `${root}/${this.code}`;
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(`dir`);
            }
            for (const [ns, items] of this.data) {
                const value: any = {};
                for (const [key, translation] of items) {
                    value[key] = translation;
                }
                fs.writeFileSync(`${dir}/${ns}.json`, JSON.stringify(value, null, 4));
            }
        }

        moduleName(ns: string) {
            return `${ns}_${this.code.replace('-', '_')}`
        }

        get importCode(): string {
            const code = [];
            for (const ns of this.data.keys()) {
                code.push(`import ${this.moduleName(ns)} from './${this.code}/${ns}.json';`);
            }
            return code.join('\n');
        }

        get exportCode() {
            const code = [];
            for (const ns of this.data.keys()) {
                code.push(`${ns}: ${this.moduleName(ns)},`);
            }
            return '\n\n'
            + `    '${this.code}': {\n        `
            + code.join('\n        ')
            + '\n'
            + '    },'
        }
    }

    const data = new Map<string, LocaleData>();

    /**
     * Search for target file recursively
     * @param dir Search directory
     * @param target Target filename
     * @param callback Triggered when found
     */
    function search(dir: string, target: string, callback: (path: string) => void) {
        const items = fs.readdirSync(dir);
        for (const item of items) {
            const path = `${dir}/${item}`;
            if (item === target) {
                callback(path);
                continue;
            }
            if (fs.statSync(path).isDirectory()) {
                search(path, target, callback);
            }
        }
    }

    /**
     * Parse data from `locales.json`
     * @param path Path of the `locales.json`
     */
    function parse(path: string) {
        console.log(`Load locales from ${path}`);
            const json = JSON.parse(fs.readFileSync(path, 'utf-8'));
            const perfix = path
                .replace('./src/', '')
                .replace('/locales.json', '')
                .replace(/\//g, '.');
            for (const [ns, items] of Object.entries(json)) {
                // Namespace
                for (const [key, translations] of Object.entries(items)) {
                    // Keys
                    for (const [lang, translation] of Object.entries(translations)) {
                        // Languages
                        if (!data.has(lang)) {
                            data.set(lang, new LocaleData(lang));
                        }
                        const localeData = data.get(lang);
                        if (!localeData.data.has(ns)) {
                            localeData.data.set(ns, []);
                        }
                        localeData.data.get(ns).push([
                            `${perfix}.${key}`, translation as string
                        ]);
                    }
                }
            }
    }

    /**
     * Build the `index.ts`
     * @param root Root directory
     */
    function buildIndex(root: string) {
        const codesImport = [];
        const codesExport = [];
        for (const localeData of data.values()) {
            codesImport.push(localeData.importCode);
            codesExport.push(localeData.exportCode);
        }
        const code = '// This file is generated by scripts/build-locals.js\n'
            + codesImport.join('\n')
            + '\n\n'
            + 'export default {'
            + codesExport.join('')
            + '\n\n'
            + '};';
        
        fs.writeFileSync(`${root}/index.ts`, code);
    }

    /**
     * Build locales files
     * @see Inspired by [Turnip-Calculator](https://github.com/elxris/Turnip-Calculator/blob/master/scripts/i18n.js)
     */
    export function build() {
        search('./src', 'locales.json', (path) => parse(path));
        // Build to temp folder temporarily
        const targetRoot = './src/locales-new';
        if (!fs.existsSync(targetRoot)) {
            fs.mkdirSync(targetRoot);
        }
        for (const localeData of data.values()) {
            localeData.build(targetRoot);
        }
        buildIndex(targetRoot);
    }
}

locale.build();