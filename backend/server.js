// npm install into package.json
// Make sure, in package.json, "type": "module",
import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import {connectDB} from './config/db.js';
import userRoutes from "./routes/userRoutes.js";
import threadRoutes from "./routes/threadRoutes.js";
//import commentRoutes from "./routes/commentRoutes.js";

dotenv.config(); // Loads .env content so that connectDB can access MONGO_URI
const app = express();
connectDB();

app.use(cors()); // In order to connect backend to frontend
app.use(express.json()); //parse incoming json POST requests
app.use(express.urlencoded({extended:true})); //recognize the incoming Request Object as strings or arrays
app.use("/api/users", userRoutes);
app.use("/api/threads", threadRoutes);
//app.use("/api/comments", commentRoutes);


app.listen(3001,() => {
    //connectDB()
    console.log("OMG slay, the app's backend is started from server.js at http://localhost:3001, hello??");
});
