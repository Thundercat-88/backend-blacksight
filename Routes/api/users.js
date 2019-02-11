const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

//Load User model
const User = require('../../Models/User')

router.get('/test', (req, res) => res.json({msg:"Users works"
}));

//post request to register
router.post('/register', (req,res) => {
    User.findOne({ userName: req.body.userName }) 
    .then(user => {
        if(user) {
            return res.status(400).json({userName: 'Already exists!!'});
        } else {
            //Create the user
            const newUser = new User({
                userName: req.body.userName,
                email: req.body.email,
                //avatar,
                password: req.body.password
            });
            //Hash the password using bcrypt
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err)); 
                })
            })
        }
    })
});

//Post request to login
router.post('/login', (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    //find user by name
    User.findOne({userName})
        .then(user => {
            //check for user
            if(!user) {
                return res.status(404).json({userName: 'Username not found'});
            }
           // Check password
           bcrypt.compare(password, user.password)
            .then(isMatch => {
                if(isMatch) {
                    //User matched

                    //Create jwt payload
                    const payload = { id: user.id, name: user.userName, avatar: user.avatar, }
                    //Sign token
                    jwt.sign(
                        payload, 
                        keys.secretOrKey,
                        { expiresIn: 3600 },
                        (err, token) => {
                            res.json({
                                succes: true,
                                token: 'Bearer ' + token
                            })
                        });
                    //res.json({msg: 'Success'});
                } else {
                    return res.status(400).json({password: 'Password incorrect'});
                }
            }); 
        });
    });
module.exports = router;