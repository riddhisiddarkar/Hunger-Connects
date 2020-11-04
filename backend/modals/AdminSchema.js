const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    detectedhungry: {
        type: Array,
        default: [],
    }
});
const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;