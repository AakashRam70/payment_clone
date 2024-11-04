const zod = require("zod");

const signupSchema = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lasrName: zod.string(),
    password: zod.string().min(4, { message: "Minimum 4 chars required" }),
})

module.exports = {
    signupSchema
}