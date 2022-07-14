process.title = "node-server";
var args = process.argv,
  port = args[2] || 5000,
  weberServer = require("./server");

weberServer.listen(port, (err) => {
  if (!err) console.log(`Server Running on Port ${port}`);
  else throw err;
});
