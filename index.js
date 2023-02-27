const express = require("express");

const path = "/Users/MY_USER/Downloads/sample-server";

const app = express();
const port = 4500;

let counter = 1;

app.use(express.json());

app.put("/counter", (req, res) => {
  counter++;
  console.log("Count: ", counter);
  res.send({ counter });
});

app.get("/", (req, res) => {
  console.log("GET /: ", req.get('user-agent'));
  res.send("Hello World");
});

app.get("/img1", (req, res) => {
  console.log("GET /img1: ", req.get('user-agent'));
  res.sendFile(path + "/images/720_1.jpeg");
});

app.get("/img2", (req, res) => {
  console.log("GET /img2: ", req.get('user-agent'));
  res.sendFile(path + "/images/720_2.jpeg");
});

app.get("/img3", (req, res) => {
  console.log("GET /img3: ", req.get('user-agent'));
  res.sendFile(path + "/images/720_3.jpeg");
});

app.post("/log", (req, res) => {
  console.log(`[${new Date().toUTCString()}]: ${req.body.message}`);
  res.status(200).send();
});

app.listen(port, () => {});
