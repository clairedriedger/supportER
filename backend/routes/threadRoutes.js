import express from "express";
import Thread from "../models/threadSchema.js";
import Patient from "../models/patientSchema.js";

const router = express.Router();

router.post("/firstThread", async (req, res) => {
    try {
        const { title, content} = req.body;
        if ( !title || !content ) {
            console.error("Missing required fields: title, content");
            return res.status(400).json({message: "Missing required fields: title, content"});
        }

        console.log("Creating new thread:", { title, content })
        const thread = new Thread({ title, content })
        await thread.save();
        res.status(200).json({ message: "Thread synced", thread });
    }   catch (error) {
        console.log("What's the problem now? ", error);
        res.status(500).json({ message: "Failed to sync thread with MongoDB" });
    }
});

export default router;