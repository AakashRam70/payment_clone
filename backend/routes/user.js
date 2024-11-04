
const express = require("express");
const { signupSchema } = require("../db/zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../config");
const router = express.Router();

router.post("/signup", async (req, res) => {
    const body = req.body;
    const { success } = signupSchema.safeParse(req.body);
    if (!success) {
        return res.json({
            msg: "Email already taken / Incorrect Inputs"
        })
    }

    const user = User.findOne({
        username: body.username
    })
    if (user._id) {
        return res.json({
            msg: "Email already taken / Incorrect Inputs"
        })
    }

    const dbUser = await User.create(body);
    const token = jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET)
    res.json({
        msg: "User created successfully",
        token: token
    })
})

module.exports = router;