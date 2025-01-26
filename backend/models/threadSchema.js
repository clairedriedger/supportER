import mongoose from "mongoose";

const threadSchema = new mongoose.Schema(
    {
    title: { type: String, required: true},
    content: { type: String, required: true},
    patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: false },
    comments: { type: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}], default: [], required: false },
    },
    { timestamps: true }  
);

const Thread = mongoose.model("Thread", threadSchema);
export default Thread;

