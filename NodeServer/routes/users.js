const express = require('express');
const router= express.Router();
const user = require('../models/UserModel')
const crypto = require('crypto');
const jwt = require('jsonwebtoken')
/* Post Route for the ser signup */
router.post('/userSignup', (req, res) => {
    console.log(req)    
    const secret = 'somesh123';
    const hash = crypto.createHmac('sha256', secret)
                   .update(req.body.pwd)
                   .digest('hex');
    const userData = {
        name: req.body.name,
        email: req.body.email,
        hash: hash,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    user.create(userData, (err, data) => {
        if(!err) {
            res.json({message:'success',data:'SuccessFull'});
        }            
    })
    

})

/* Post Route for the user login */
router.post('/login', (req, res) => {
    const secret = 'somesh123';
    const hash = crypto.createHmac('sha256', secret)
    .update(req.body.pwd)
    .digest('hex');
    const userData = {
        email: req.body.email,
        hash: hash
    }
    user.find(userData, (err, data) => {
        if(!err) {
            res.json({message:'success',data:data});
        }            
    })
})

module.exports = router;