const zod = require("zod");

const zodSigupValidation = zod.object({
    username: zod.string().email(),
    password: zod.string().min(4, { message: "Minimum 4 character Required" }).max(20, { message: "Maximum 20 Characters Required" }),
    firstName: zod.string(),
    llastName: zod.string()
})

const zodSiginValidation = zod.object({
    username: zod.string().email(),
    password: zod.string().min(4, { message: "Minimum 4 character Required" }).max(20, { message: "Maximum 20 Characters Required" })
})

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

module.exports = {
    zodSigupValidation,
    zodSiginValidation,
    updateBody
}