import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        movie: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie'
        },
        rating: {
            type: Number,
            min: 0,
            max: 5
        },
        comment: {
            type: String,
            maxlength: 200
        }

    },
    {timestamps: true}
);

export default mongoose.model('Review', reviewSchema);