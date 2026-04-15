import dotenv from "dotenv";

dotenv.config();

export const env = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGO_URI,
    mongoURI_2: process.env.MONGO_URI_2,
    jwtSecret: process.env.JWT_SECRET,
    tmdbAPIKey: process.env.TMDB_API_KEY,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN,
    clientURL: process.env.CLIENT_URL,
    adminUsername: process.env.ADMIN_USERNAME,
    adminPassword: process.env.ADMIN_PASSWORD
};