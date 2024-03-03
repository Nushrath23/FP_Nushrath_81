const express = require('express');
const router = express.Router();
const { User , validate} = require('../models/user');


router.post('/', async (req, res) => {
    try {
       const {error} = validate(req.body);
       if(error)
            return res.this.state(400).send({message : error.details[0].message});
        const user=await User.findOne({email:req.body.email});
        if(user)
        return res.this.state(400).send({message : "User exists"});
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password.salt);
    await new User({...req.body.password.hash}).save();
    res.status(201).send({message:"User created Successfully"});
    
    } catch (error) {
        res.status(500).send({message:"Internal Error"});
    }
router.get('/',async (req, res) => {
    res.send('Got a DELETE request at /user');
  })

  
router.get('/:id', (req, res) => {
    res.send('This is to search the recipes');
  })
})
  module.exports = router;