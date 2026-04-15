import mongoose from 'mongoose';

const watchlistSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        movie: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie',
            required: true
        },
        status: {
            type: String,
            enum: ['watching', 'completed', 'plan to watch'],
            default: 'plan to watch'
        }
    },
    {timestamps: true}
);

export default mongoose.model('Watchlist', watchlistSchema);