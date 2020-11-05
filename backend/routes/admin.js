const express = require("express");
const router = express.Router();
const AdminSchema = require("../modals/AdminSchema")

//to add data to the admin database
router.post("/addtohungrylist", (req, res) => {
    const { noOfPeople, children, seniorcitizens } = req.body;
    const newHungerproblem = {
        noOfPeople,
        children,
        seniorcitizens,
    }
    AdminSchema.findOne({ email: "admin@hungerconnects.com" })
        .then(r => {
            let p = {
                password: r.password,
                email: r.email,
                detectedhungry:r.detectedhungry.push(newHungerproblem)
            }
            AdminSchema.updateOne({ email: "admin@hungerconnects.com" }, p)
                .then(s => {
                    console.log("Added successfully")
                    res.send("Success!")
                }).catch(err => {
                    console.log("Error here in adding data to admin")
                    console.log(err)
                });
        }).catch(err => {
            console.log(err)
            res.status(400).send({err})
    })
})
module.exports = router;