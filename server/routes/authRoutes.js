const express = require('express');
const router = require("express").Router();
const { User } = require('../models/user');
const Joi = require("joi");
const bcryprt =require('bcrypt');

router.post('/', async (req, res) => {
    try {
       const {error} = validate(req.body);
       if(error)
            return res.this.state(400).send({message : error.details[0].message});
        const user=await User.findOne({email:req.body.email});
        if(!user)
        return res.this.state(401).send({message : "Account doesn't exist"});

    const validPassword = await bcrypt.compare(
        req.body.password,user.password);
        if(!validPassword)
        return res.status(401).send({message:"Invalid Email or Password"});

    const token = user.generateAuthToken();
    res.status(200).send({data:token, message : "Logged in Successfully"})

    
    } catch (error) {
        res.status(500).send({message:"Internal Error"});
    }


    const validate =(data)=>{
        const Schema= Joi.object({
            email:Joi.string().email().required().label("email"),
            email:Joi.string().required().label("Password")
        });
        return Schema.validate(data);
    }

})