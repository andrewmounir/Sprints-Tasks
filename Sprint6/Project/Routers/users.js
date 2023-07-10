const express = require('express')
// using bcrypt to hash the password in our database for security.
const bcrypt = require('bcryptjs')
const User = require('../models/user')
// setting our express router 
const router = new express.Router()
// post verb when user register 
router.post('/register', async (req, res) => {
    let {email, password} = req.body
    let id = Date.now().toString()
    let hash = await bcrypt.hash(password, 10)
    let user = new User({id, email, password: hash})
    try { await user.save()
        res.status(201).send({userId: id})
    } catch (e) { res.status(400).json({error: 'Check your email'}) }
})

// get verb to query products by userID to see what he possess.
router.get('/:userId/products', async (req, res) => {
    let {userId} = req.params
    try { let user = await User.findOne({id:userId})
        if (!user) return res.status(404).json({error: 'User not found'})
        res.status(201).send({userPurchases: user.purchases})
    } catch (e) { res.status(400).send(e) }
})
// exporting the router
module.exports = router