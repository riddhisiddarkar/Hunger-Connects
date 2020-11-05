const express = require("express");
const router = express.Router();
const UserSchema = require("../modals/UserSchema");
const bcrypt = require("bcrypt");
const passport = require('passport');

//login
router.post('/login', (req, res, next) => {
    console.log("login called");
    // passport.authenticate('local', function(req, res) {
    //     console.log(req);
    //     console.log(res);
    //     //if authentication suceesful the add here
    //     res.send("Authenticated");
    //     console.log("Authentication successfull");
    // })
    // res.send("error")
    UserSchema.findOne({ email: req.body.email })
        .then(r => {
            console.log(r)
            bcrypt.compare(req.body.password, r.password, function(err, result) {
                if (result == true) {
                    console.log("matched")
                    console.log(r._id)
                    res.send(r._id)
                }
                if (result == false) {
                    console.log(" not matched")
                    res.status(403).send("No authenticated")
                }
            });
        }).catch(err => {
            console.log(err)
            res.status(403).send("No authenticated");
        });
});

 //register post handle
router.post('/register', (req, res) => {
    console.log("called")
    console.log(req)
    const { name, email, password, cpassword } = req.body;

    let errors = [];
    console.log(' Name ' + name + ' email :' + email + ' pass:' + password);
    if (!name || !email || !password || !cpassword) {
        errors.push({ msg: "Please fill in all fields" })
    }
    //check if match
    if (password !== cpassword) {
        errors.push({ msg: "passwords dont match" });
    }
    
    //check if password is more than 6 characters
    if (password.length < 6) {
        errors.push({ msg: 'password atleast 6 characters' })
    }
    if (errors.length > 0) {
        //error here
        res.status(402).send("Something went wrong");
        console.log("Error in the registeration here. Either one field is empty or passwords not matching")
        console.log(errors);
    } else {
        //validation passed
        UserSchema.findOne({ email: email }).exec((err, user) => {
            console.log(user);
            if (user) {
                errors.push({ msg: 'email already registered' });
                // res.render('register', { errors, name, email, password, cpassword })
                res.status(401).send("Email already exists")
            } else {
                const newUser = new UserSchema({
                    name: name,
                    email: email,
                    password: password
                });
    
                //hash password
                bcrypt.genSalt(10, (err, salt) =>
                    bcrypt.hash(newUser.password, salt,
                        (err, hash) => {
                            if (err) {
                                console.log(err)
                                throw err;
                            }
                            //save pass to hash
                            newUser.password = hash;
                            //save user
                            newUser.save()
                                .then((value) => {
                                    console.log(value)
                                    // req.flash('success_msg', 'You have now registered!');
                                    // res.redirect('/users/login');
                                    res.send("Successfully added user");
                                    console.log("Successfully added user");
                                })
                                .catch(value => {
                                    console.log(value);
                                })
                        }));
            }
        })
    }
});

//logout
router.get('/logout',(req,res)=>{
req.logout();
})

//for authentication
router.post('/idverify', (req, res) => {
    console.log(req.body.id)
    UserSchema.findById(req.params.id)
        .then(r => {
            console.log(r)
            res.send("Authenticated")
        }).catch(err => {
            console.log(err)
            res.send(err)
        });
})
module.exports = router;