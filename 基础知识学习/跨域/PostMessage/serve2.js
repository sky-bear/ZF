const express = require("express");
const app = express();

app.listen(3002, (_) => {
  console.log("ok");
});
app.use(express.static(__dirname));
