const express = require("express");
const app = express();

app.listen(3001, (_) => {
  console.log("ok");
});

app.use(express.static(__dirname));
