const { strict: assert } = require('node:assert');
const { describe, it } = require('node:test');

const { readFile } = require('fs/promises');
const { add, makeFile } = require('../index');

describe('add', () => {
    it('throw errors if we don\'t give a number', () => {
        assert(() => add(10, Infinity), TypeError);
    });

    it('5 + 10', () => {
        assert(add(5, 10), 15);
    });
});

describe('makeFile', () => {
    it('throws an error if you try to write to a directory', { skip: 'not finished this' }, async () => {
        assert(async () => await makeFile('node', 'this is my node test.')).toThrow(Error);
    });

    it('file exists with correct content', async () => {
        await makeFile('node-test', 'this is my node test.');
        assert(await readFile('./node-test', { encoding: 'utf8' }), 'Hey huddlers, this is my node test.');
    });
});