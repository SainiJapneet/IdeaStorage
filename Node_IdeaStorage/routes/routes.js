const express = require('express');
const userModel = require('../models/userModel');
const ideaModel = require('../models/IdeaModel');
const route = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

route.post('/register',(req,res)=>{
    console.log(req.body)

    bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
        console.log("Password hashed");

        const user = new userModel({
            email: request.body.email,
            password: hashedPassword
        })

        user.save().then((result) => {
            res.status(200).send({
                message: "User created", result
            })
        }).catch((err) => {
            res.status(500).send({
                meassage: "Passwrd hashing failed" + err, err
            })
        })
    })


})
route.post('/login',(req,res) =>{
    userModel.findOne({email: req.body.email}).then((user) => {
        console.log(user)

        bcrypt.compare(req.body.password, user.password).then((passwordCheck) => {
            console.log(passwordCheck)
            if(!passwordCheck){
                return res.status(400).send({
                    message: "Passwords do not match"
                })
            }

            const token = jwt.sign({
                userId: user._id,
                userEmail: user.email
            },"RANDOM-TOKEN",{expiresIn: '24h'})
            res.status(200).send({
                message: "Login successful",
                email: user.email,
                token
            })
        }).catch((err)=>{
            res.status(404).send({
                message: "Passwords don't match", err
            })
        })
    }).catch((err)=>{
        res.status(404).send({
            message: "Email not found",
            err
        })
    })
})

module.exports = route;