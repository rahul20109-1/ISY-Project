import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from  'jsonwebtoken';

export const userRegister = async(req, res) => {
    try {
        const {username, email, password} = req.body;
        if(!email || !username || !password){
            return res.status(400).json({message:'All fields are mandatory'});
        }
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(409).json({message:'User already exist'});
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = new User({
            username,
            email,
            password:hashedPassword
        });

        await newUser.save();

        return res.status(201).json({message:'Successfully registered'});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}

export const userLogin = async(req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(400).json({message:'All fields are mandatory'});
        }
        const existingUser = await User.findOne({email});
        if(!existingUser){
            return res.status(404).json({message: 'No user found'});
        }

        const isMatched = bcrypt.compareSync(password, existingUser.password);
        if(!isMatched){
            return res.status(401).json({message:'Incorrect password'});
        }

        const isAlreadyLoggedIn = req.cookies.admin_token;
        if(isAlreadyLoggedIn) {
            return res.status(400).json({message:'User already logged in'})
        }

        const token = jwt.sign({_id:existingUser._id, isAdmin:existingUser.isAdmin},process.env.JWT_TOKEN_KEY,{expiresIn:'1h'});
        res.cookie('admin_token',token)
        return res.status(200).json({message:'Logged in successfully'});
        
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}

export const userLogout = async(req, res) => {
    try {
        const token = req.cookies.admin_token;
        if(!token){
            return res.status(403).json({message: 'First you have to log in'});
        }

        res.clearCookie('admin_token');
        return res.status(200).json({message: 'Logout successfull'});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}