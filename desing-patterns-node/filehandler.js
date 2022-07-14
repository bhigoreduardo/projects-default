var fs = require("fs");

module.exports = function (filename, successFn, errorFn) {
  fs.readFile(filename, (err, data) => {
    if (!err) successFn(data);
    else errorFn(err);
  });
};
