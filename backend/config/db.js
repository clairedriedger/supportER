// npm install into outermost package.json
import mongoose from "mongoose"; 

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // MONGO_URI found in .env
    console.log(`MongoDB Connected: ${conn.connection.host}`); 
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); 
  }
};