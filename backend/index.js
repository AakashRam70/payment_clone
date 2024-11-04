const express = require("express");
const mainRouter = require("./routes/index")
const cors = require('cors');
const app = express();

app.use(mainRouter);
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log("Server is Running..")
})
