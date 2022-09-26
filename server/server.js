const express = require('express')
const app = express()
const dotenv = require("dotenv");
const router = express.Router();
const PORT = process.env.PORT || 5000;

dotenv.config({
    path: "../.env"
})

console.log(process.env.DB_HOST)
console.log(process.env.DB_USER)
const user = require("../server/models/User");
/*
  __  ___  ___
 / _|| __||_ _|
( |_n| _|  | |
 \__/|___| |_|
 Here we define all getters
*/

// GET USER BY NAME
router.get("/name", async (req, res) => {
        res.json = await user.getAllNames()
        });


app.get("/api", (req, res) =>{
    res.json({"users": ["UserOne", "UserTwo", "UserThree", "UserFour"]})
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});