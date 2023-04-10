const fs = require('fs/promises');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const path = require('path');
const { toSystemPath } = require("../../../lib/core/path");

exports.WriteFile = async function(options) {
    options = this.parse(options);
    let path = toSystemPath(options.path);
    let content = options.content;
    let encode = options.encoding;
    let customflag = options.flag;

    fs.writeFile(
        `${path}`,
        `${content}`, { encoding: encode, flag: customflag },
        function(err) {
            if (err) return console.log(err);
            console.log("The file was saved!");
        }
    );
};

exports.readfile = async function(options) {
    options = this.parse(options);
    const file = toSystemPath(options.file);

    try {
        const content = await fs.readFile(file, options.encoding || 'utf8');
        return content;
    } catch (err) {
        console.error(err);
        throw new Error('Error reading file');
    }
};