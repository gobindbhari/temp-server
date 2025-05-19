// import mongoose from "mongoose"

const { default: mongoose } = require("mongoose")

const UserSchema = new mongoose .Schema({
    email: String,
    password: String,
})

const User = mongoose.model('User', UserSchema)
module.exports = User