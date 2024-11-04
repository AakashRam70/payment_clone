const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/PaytmDB")
    .then(() => {
        console.log("MongoDB connected..")
    })
    .catch((err) => {
        console.log(err, "Connection Error..")
    })

const schema = mongoose.schema;

const userSchema = schema({
    username: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const modelSchema = mongoose.model("User", userSchema);

module.exports = {
    modelSchema
}
