import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema(
    {
        tmdb_id: {
            type: Number, 
            required: true, 
            unique: true            
        },
        title: {
            type: String, 
            required: true, 
            trim: true            
        },
        releaseDate: {
            type: Date            
        },
        posterPath: {
            type: String            
        },
        rating: {
            type: Number, 
            min: 0, 
            max: 5            
        }

    },
    {timestamps: true}
);

export default mongoose.model('Movie', movieSchema);