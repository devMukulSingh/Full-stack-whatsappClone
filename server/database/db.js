import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config();

const url = process.env.DATABASE;

const db = async() => {
    try {
        await mongoose.connect(url ,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log('Connection Successful');
    } catch (error) {
        console.log(error);
    }
}
export default db;