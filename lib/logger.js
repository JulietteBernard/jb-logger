'use strict'

module.exports = class Logger {

    constructor() {
        this.infoCnt = 0;
        this.warnCnt = 0;

    }

    info(msg) {
        console.log(`INFO : ${msg}`);
        this.infoCnt++;
    }

    warn(msg) {
        console.log(`WARN : ${msg}`);
        this.warnCnt++;
    }

    metrix() {
        return `InfoCnt : ${this.infoCnt} WarnCnt : ${this.warnCnt}`;
    }

}
