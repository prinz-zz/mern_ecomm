import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connection established on :', connect.connection.name);
        
    } catch (error) {
        throw new Error(error);
    }
};
