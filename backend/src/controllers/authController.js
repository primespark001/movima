import bcrypt from 'bcrypt';
import {generateToken} from '../config/jwt.js';
import User from '../models/User.js';
import {v4 as uuidv4} from 'uuid';

// REGISTER
export const register = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: 'User already exists'});
        }
        const _id = uuidv4().replace(/-/g, '');
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            _id,
            name,
            email,
            password: hashedPassword
        });
        await user.save();
        const token = generateToken(user._id);
        res.status(201).json({token, user});
    } catch (error) {
        res.status(500).json({message: 'Error registering user'});

    }
}

// LOGIN
export const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const findUser = await User.findOne({email});
        if(!findUser){
            return res.status(404).json({message: 'User does not exists'});
        }
        const isValidPassword = await bcrypt.compare(password, findUser.password);
        if(!isValidPassword){
            return res.status(400).json({message: 'Invalid credentials'});
        }
        const token = generateToken(findUser._id);
        res.status(200).json({token, user: findUser});
    } catch (error) {
        res.status(500).json({message: 'Error logging in'});
    }
}