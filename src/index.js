const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 9001;

const app = express();
app.use(express.json());

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
