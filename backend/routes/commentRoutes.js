import express from "express";
import Thread from "../models/threadSchema.js";
import Comment from "../models/commentSchema.js";

const router = express.Router();

router.post("/:threadId/addComment", async (req, res) => {
    try {
        const { threadId } = req.params;
        const { content, userId } = req.body;

        if ( !content || content.trim() === "") {
            console.error("Missing required field: content");
            return res.status(400).json({message: "Missing required field: content"});
        }

        const thread = await Thread.findById(threadId);
        if (!thread) {
            return res.status(404).json({ message: "Thread not found." });

        }

        console.log("Creating new thread:", { content, thread })
        const comment = new Comment({
            content,
            thread: threadId,
            userId: "JaneBroken"
        })
        await comment.save();
        thread.comments.push(comment._id);
        await thread.save()
        res.status(201).json({ message: "Comment created and saved", thread});
    }   
        catch (error) {
        console.log("What's the problem now, for realllllllll comment", error);
        res.status(500).json({ message: "Failed to sync comment with MongoDB" });
    }
});

router.get("/:threadId/comments", async (req, res) => {
    try {
        const { threadId } = req.params;

        const thread = await Thread.findById(threadId);
        if (!thread) {
            return res.status(404).json({message: "Thread not found." });
        }
        const comments = await Comment.find({ thread: threadId })
            .populate("user", "username")
            .populate({
                path: "replies",
                populate: { path: "user", select: "username" },
            })
            .sort({createdAt: -1});

        res.status(200).json({message: "Comments retrieved successfully.", comments});
    }   catch (error) {
        console.error("Error retrieving comments:", error);
        res.status(500).json({ message: "Failed to retrieve comments. "});
    }
});

export default router;