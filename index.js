const bcrypt = require("bcrypt");
const app = require("express")();

const saltRounds = 10;
const myPlaintextPassword = "ReskillAmericans123";
const someOtherPlaintextPassword = "not_bacon";
let hashed = null;

bcrypt.hash(myPlaintextPassword, saltRounds, (error, hash) => {
  if (error) console.log(error);
  hashed = hash;
});

app.listen(5000, () => console.log("server up"));
