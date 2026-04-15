import mongoose from 'mongoose';
import {env} from './env.js';

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(env.mongoURI_2);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error){
        console.error(`❌ Database Connection failed: ${error.message}`);
        process.exit(1);
    }
}