const mongoose = require("../db/connection")

const listSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})

const List = mongoose.model("List", listSchema)
module.exports = List