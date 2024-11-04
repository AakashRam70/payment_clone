const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/PaytmDB")
    .then(() => {
        console.log("MongoDB connected..")
    })
    .catch((err) => {
        console.log(err, "Connection Error..")
    })

const userSchema = mongoose.Schema({
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

const User = mongoose.model("User", userSchema);

const accountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);

module.exports = {
    User,
    Account
}
