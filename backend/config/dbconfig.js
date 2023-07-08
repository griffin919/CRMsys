import mongoose, { connect } from "mongoose";

export const connectMongo = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_STR);
        console.log(`mongodb connected successfully ${conn.connection.host}`);
    } catch(err){
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}
