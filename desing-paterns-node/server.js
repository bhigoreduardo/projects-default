var http = require("http"),
  parse = require("url").parse;

var config = require("./config"),
  filehandler = require("./filehandler"),
  types = config.types,
  rootFolder = config.rootFolder,
  defaultIndex = config.defaultIndex,
  contactIndex = config.contactIndex,
  server;

module.exports = server = http.createServer();

server.on("request", onRequest);

function onRequest(req, res) {
  var filename = parse(req.url).pathname,
    fullPath,
    extension;

  if (filename === "/") filename = defaultIndex;
  else if (filename === "/contato") filename = contactIndex;

  fullPath = rootFolder + filename;

  extension = filename.substring(filename.lastIndexOf(".") + 1);

  filehandler(
    fullPath,
    function (data) {
      res.writeHead(200, {
        "Content-Type": types[extension] || "text/plain",
        "Content-Length": data.length,
      });

      res.end(data);
    },
    function (err) {
      res.writeHead(404);
      res.end();
    }
  );
}
