import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        _id: {
            type: String, 
            required: true, 
            unique: true
        },
        name: {
            type: String, 
            required: true, 
            trim: true
        },
        email: {
            type: String, 
            required: true, 
            unique: true, 
            trim: true
        },
        password: {
            type: String, 
            required: true, 
            minlength: 8
        },
        avatar: {
            type: String, 
            default: ''
        },
        role: {
            type: String, 
            enum: ['user', 'admin'], 
            default: 'user'
        }
    },
    {timestamps: true}
);

export default mongoose.model('User', userSchema);