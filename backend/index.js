const express = require("express");
const mainRouter = require("./routes/index")
const cors = require('cors');
const json = require("jsonwebtoken");
const app = express();

app.use(mainRouter);
app.use(express.json());
app.use(cors());

app.listen(3001, () => {
    console.log("Serber is Running..")
})
