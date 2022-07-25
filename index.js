const { writeFile } = require('fs/promises');

module.exports = {
    makeFile: function makeFile(name, append = 'how are you?') {
        return writeFile(`./${name}`, `Hey huddlers, ${append}`, { flag: 'w' });
    },
    add: function add(a, b) {
        if (!Number.isInteger(a) || !Number.isInteger(b)) {
            throw new TypeError('Give me numbers!');
        }

        return a + b;
    }
}