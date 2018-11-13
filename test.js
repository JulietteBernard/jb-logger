'use strict'
import test from 'ava';

const Logger = require('./lib/logger');

const log = new Logger();

test('info', t => {
    log.info('test');
    t.is(log.infoCnt, 1);
});

test('warn', t => {
    log.warn('test');
    t.is(log.warnCnt, 1);
    t.pass();
});

test('metrix', t => {
    log.warn('test');
    console.log(log.metrix())
    t.is(log.metrix(), "InfoCnt : 1 WarnCnt : 2");
    t.pass();
});