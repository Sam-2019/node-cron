const express = require("express");
const cron = require("node-cron");

app = express();

cron.schedule("* * * * *", function () {
  console.log("running a task every minute");
});

app.listen(process.env.PORT || 5000);
console.log("server up!");
