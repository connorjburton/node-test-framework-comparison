const { strict: assert } = require('node:assert');
const { describe, it } = require('node:test');

const { readFile } = require('fs/promises');
const { add, makeFile } = require('../index');

describe('add', () => {
    it('throw errors if we don\'t give a number', () => {
        try {
            add(10, Infinity)
        } catch (e) {
            assert(e instanceof TypeError);
        }
    });

    it('5 + 10', () => {
        assert.deepEqual(add(5, 10), 15);
    });
});

describe('makeFile', () => {
    it('throws an error if you try to write to a directory', { skip: 'not finished this' }, async () => {
        try {
            await makeFile('node', 'this is my node test.');
        } catch (e) {
            assert(e instanceof TypeError);
        }
    });

    it('file exists with correct content', async () => {
        await makeFile('node-test', 'this is my node test.');
        assert.deepEqual(await readFile('./node-test', { encoding: 'utf8' }), 'Hey huddlers, this is my node test.');
    });
});