const mongoose = require("mongoose");
const FoodBankSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    upiid: {
        type: String,
        default: "",
    },
    location: {
        type: String,
        default: "",
    },
    address: {
        type: String,
        default: "",
    },
    website: {
        type: String,
        default: "",
    },
    moto: {
        type: String,
        required: true,
    },
    phoneno: {
        type: String,
        required: true,
    }
});
const FoodBank = mongoose.model("FoodBank", FoodBankSchema);
module.exports = FoodBank;