const express = require("express");
const router = express.Router();
const FoodBankSchema = require("../modals/FoodBankSchema");

//to get all the foodbanks
router.get('/', (req, res) => {
    FoodBankSchema.find()
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        });
    res.send("res")
})

//to get all the foodbanks in a particular location
router.get("/localisedfoodbanks/:location", (req, res) => {
    FoodBankSchema.find({ location: "Vasco" })
        .then(data => {
            res.send(data)
        })
        .catch(err => res.status(404).send({ message: err.message }));
});

//to add data to the foodbank database
router.get("/addfoodbank", (req, res) => {
    const newFoodBank = new FoodBankSchema({
        name: "hello",
        email: "hello@gmail.com",
        upiid: "12234423242",
        location: "Vasco",
        address: "sdcdec edclmdich aeldcojdihc sidhcudsgc isdhcuhdhcuds siod",
        website: "www.helloworld.com",
        moto: "Solving hunger",
        phoneno:"1234567890"
    })
    newFoodBank.save()
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        });
})
module.exports = router;