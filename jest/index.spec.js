const { readFile } = require('fs/promises');
const { add, makeFile } = require('../index');

describe('add', () => {
    test('throw errors if we don\'t give a number', () => {
        expect(() => add(10, Infinity)).toThrow(TypeError);
    });

    test('5 + 10', () => {
        expect(add(5, 10)).toBe(15);
    });
});

describe('makeFile', () => {
    test.skip('throws an error if you try to write to a directory', async () => {
        expect(async () => await makeFile('jest', 'this is my jest test.')).toThrow(Error);
    });

    test('file exists with correct content', async () => {
        await makeFile('jest-test', 'this is my jest test.');
        expect(await readFile('./jest-test', { encoding: 'utf8' })).toBe('Hey huddlers, this is my jest test.');
    });
});