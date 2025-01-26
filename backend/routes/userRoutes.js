import express from "express";
import User from "../models/userSchema.js";
import Patient from "../models/patientSchema.js";
//testing firebase
//import admin from "../config/firebaseAdmin.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { email, name } = req.body;

        if (!email || !name) {
            console.error("Missing required fields: uid, email, or name");
            return res.status(400).json({ message: "Missing required fields: uid, email, or name" });
        }
        
        /*
        let user = await User.findOne({ uid });
        if (!user) {
            console.log("Creating new user:", { uid, email, name });
            user = new User({ uid, email, name });
            await user.save();
        } else {

            return res.status(409).json({ message: "User already exists" });
        }
        */
        //testing db
        console.log("Creating new user:", { email, name });
        const user = new User({ email, name });
        await user.save();
        res.status(200).json({ message: "User synced", user });
    } catch (error) {
        console.log("I'm desperate to know the error: ", error);
        res.status(500).json({ message: "Failed to sync user with MongoDB" });
    }

    //testing firebase
    /*try {
        const message = `Firebase Admin SDK initialized: ${admin.app().name}`;
        console.log(message);
        res.status(200).json({ message });
    } catch (error) {
        console.error("Admin test failed:", error);
        res.status(500).json({ error: "Admin SDK test failed" });
    }*/
});


router.post("/getUsername", async (req, res) => {
    try {
        const { username } = req.body;

        if (!username) {
            console.error("Missing required fields: username");
            return res.status(400).json({ message: "Missing required fields: username" });
        }
        
        /*
        let user = await User.findOne({ uid });
        if (!user) {
            console.log("Creating new user:", { uid, email, name });
            user = new User({ uid, email, name });
            await user.save();
        } else {

            return res.status(409).json({ message: "User already exists" });
        }
        */
        //testing db
        console.log("Creating new user:", { username });
        const patient = new Patient({ username });
        await patient.save();
        res.status(200).json({ message: "Patient synced", patient });
    } catch (error) {
        console.log("I'm desperate to know the error: ", error);
        res.status(500).json({ message: "Failed to sync user with MongoDB" });
    }
});


export default router;