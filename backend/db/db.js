const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/PaytmDB")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err, "MongoDB Connection Error"));

const Schema = mongoose.Schema;

const UserSchema = Schema({
    firstName: {
        type: String,
        require: true,
        maxLenght: 30
    },
    lastName: {
        type: String,
        require: true,
        maxLenght: 30
    },
    userName: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
        minLenght: 4,
        maxLenght: 30
    },
    password: {
        type: String,
        require: true,
        minLenght: 6
    }
})

const ModelSchema = mongoose.model("Users", UserSchema);

module.exports = ModelSchema;

