const fs = require("fs");
const { toSystemPath } = require("../../../lib/core/path");

exports.WriteFile = async function (options) {
  options = this.parse(options);
  let path = options.path;
  let content = options.content;
  let encode = options.encoding;
  let customflag = options.flag;

  fs.writeFile(
    `${path}`,
    `${content}`,
    { encoding: encode, flag: customflag },
    function (err) {
      if (err) return console.log(err);
      console.log("The file was saved!");
    }
  );
};
