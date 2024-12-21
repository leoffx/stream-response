const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

app.get("/stream-response", async (req, res) => {
  for (let i = 0; i < 10; i++) {
    res.write(i + "\n");
    await sleep(1000);
  }

  res.end();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
