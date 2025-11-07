import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../models/User';
import { generateToken } from '../utils/generateToken';

// Register new user
export const registerUser = async (req: Request, res: Response) => {
  try {
    console.log("Register request body:", req.body.password);
    const {name, email, password } = req.body;


    if (!name || !email || !password) {
        return res.status(400).json({message: "Need name, email, password"});
    }

    const userExists = await User.findOne({email});
    if (userExists) {
        return res.status(400).json({message: "User already exists"});
    }

    const user = await User.create({
        name, 
        email,
        password
    });

    res.status(201).json({
        _id: user._id, 
        name: user.name, 
        email: user.email, 
        token: generateToken(user._id as string)
    });
   } catch (error){
    console.error(error);
    res.status(500).json({message: "Server is down"});
   }
};

// Login existing user
export const loginUser = async (req: Request, res: Response) => {
  try{
    const {email, password} = req.body;
    
    const user = await User.findOne({email: email.trim()});
    if (!user) {
        return res.status(401).json({message: "User does not exist"});
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(401).json({message: "User and password does not match"});
    }

    res.json({
        _id: user._id, 
        name: user.name, 
        email: user.email, 
        token: generateToken(user._id as string)
    });
  } catch (error){
    console.error(error);
    res.status(500).json({message: "Server is down"});
  }
};