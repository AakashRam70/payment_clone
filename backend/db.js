const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/PaytmDB")
    .then(() => {
        console.log("MongoDB connected..")
    })
    .catch((err) => {
        console.log(err, "Connection Error..")
    })

const userSchema = new mongoose.schema({
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

const accountSchema = new mongoose.Schema({
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
    modelSchema,
    Account
}
