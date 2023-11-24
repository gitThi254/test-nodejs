const express = require("express");
require("dotenv").config();
const home = require("../routes/home");
const port = process.env.PORT || 9001;

const app = express();
app.use(express.json());
app.use("/home", home);

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
