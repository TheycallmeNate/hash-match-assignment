const bcrypt = require("bcrypt");
const express = require("express");

const app = express();
app.use(express.json());

const saltRounds = 10;
const myPlaintextPassword = "ReskillAmericans123";
let hashed = null;

bcrypt.hash(myPlaintextPassword, saltRounds, (error, hash) => {
  if (error) console.log(error);
  hashed = hash;
});

app.post("/", (req, res) => {
  if (!req.body.pass)
    return res.status(401).json({ message: "password required" });

  bcrypt.compare(req.body.pass, hashed, (error, result) => {
    if (error) return res.status(401).json({ message: "password incorrect" });

    return res.status(200).json({ validPassword: result });
  });
});

app.listen(5000, () => console.log("server up"));
