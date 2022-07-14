const PORT = 5000;

const express = require("express");

const app = express();

const viewsRouter = require("./routes/views");
const apiRouter = require("./routes/api");

app.use("/api", apiRouter);
app.use("/", viewsRouter);

app.listen(PORT, (err) => {
  if (!err) console.log(`Server Running on Port: ${PORT}`);
  else throw err;
});
