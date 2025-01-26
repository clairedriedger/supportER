import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: { type: String, required: true},
    patient : { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: false },
    thread : { type: mongoose.Schema.Types.ObjectId, ref: 'Thread', required: true},
    replies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
},
{ timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
