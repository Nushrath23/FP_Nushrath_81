const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema(
    {
        firstName : {
            type : String,
            required : true
        },
        lastName : {
            type : String,
            required : true
        },
        email: {
            type : String,
            required : true
        },
        user_id: {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true
        }
    }
);
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign(
        {_id:this._id},
        process.env.JWT_PRIVATEKEY,
        {expiresIn:"7d",});
        return token;

};
const User= mongoose.model("user",userSchema);
const validate = (data) =>{
    const Schema = Joi.object({
        firstName:Joi.string().required().label("First Name"),
        lastName:Joi.string().required().label("Last Name"),
        email:Joi.string().required().label("Email Name"),
        user_id:Joi.string().required().label("User Name"),
        password:passwordComplexity.string().required().label("password")
    });
    return Schema.validate(data);
}

module.exports = {User,validate};