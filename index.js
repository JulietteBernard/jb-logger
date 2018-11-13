'use strict'
const Logger = require('./lib/logger');

const log = new Logger();
log.info("test");
log.info("okai");
console.log(log.metrix());
console.log(log.infoCnt);