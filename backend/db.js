const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/PaytmDB")
    .then(() => {
        console.log("MongoDB successfully connected..")
    })
    .catch((err) => {
        console.log(err, "Connection Error..")
    })

const userSchema = new mongoose.Schema({
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

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const User = mongoose.model("User", userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {
    User,
    Account
}
