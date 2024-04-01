import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
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

        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}