const fs = require("fs");
const util = require('util');
const readFile = util.promisify(fs.readFile);
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
    const fileName = String(options.file);

    try {
        const fileData = await readFile(fileName, 'utf8');
        return fileData;
    } catch (error) {
        throw new Error(`Error reading file: ${error.message}`);
    }
};