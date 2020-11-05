const express = require("express");
const router = express.Router();
const FoodBankSchema = require("../modals/FoodBankSchema");

//to get all the foodbanks
router.get('/', (req, res) => {
    FoodBankSchema.find()
        .then(r => {
            console.log(r)
            res.send(r)
        }).catch(err => {
            console.log(err)
            res.status(403).send(err)
        });
})

//to get all the foodbanks in a particular location
router.get("/localisedfoodbanks/:location", (req, res) => {
    console.log(req.params.location)
    FoodBankSchema.find({ location: req.params.location })
        .then(data => {
            console.log(data)
            res.send(data)
        })
        .catch(err => res.status(404).send({ message: err.message }));
});

//to add data to the foodbank database
router.get("/addfoodbank", (req, res) => {
    const newFoodBank = new FoodBankSchema({
        name: "	AGNEL CHARITIES (AGNEL SEVA SANGH)",
        email: "agnelcharities@gmail.com",
        upiid: "12234sdcswaw",
        location: "Margao",
        address: "Agnel Charities, Agnel Technical Education Complex, Verna, Goa",
        website: "www.agnelcharities.com",
        moto: "Trying to eradicate hunger",
        phoneno: "1234567890",
        image: "",
        registerationid:"	GA/2017/0151354"
    })
    newFoodBank.save()
        .then(r => {
            console.log(r)
            res.send("Success")
        }).catch(err => {
            console.log(err)
            res.send(err)
        });
})
module.exports = router;