const bcrypt = require("bcrypt");
const express = require("express");

const app = express();
app.use(express.json());

const saltRounds = 10;
const myPlaintextPassword = "ReskillAmericans123";
const someOtherPlaintextPassword = "not_bacon";
let hashed = null;

bcrypt.hash(myPlaintextPassword, saltRounds, (error, hash) => {
  if (error) console.log(error);
  hashed = hash;
});

app.post("/", (req, res) => {
  if (!req.body.pass)
    return res.status(401).json({ message: "password required" });
});

app.listen(5000, () => console.log("server up"));
