const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const route = require("./router/route");

app.use("/", route);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
