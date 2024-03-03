const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 8080;
const UserRoutes=require('./routes/userRoutes');
const AuthRoutes=require("./routes/authRoutes");

const RecipeRoutes =require('./routes/recipeRoutes');


const app = express();
const connectDB = require('./config/db');

connectDB();
app.use(express.json());
app.use(cors());



app.use('/user',UserRoutes);
app.use('/recipe',RecipeRoutes);
app.use('/auth',AuthRoutes);





app.listen(port, console.log(`App listening on port ${port}`)); 