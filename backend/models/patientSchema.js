import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({

    //uid: {type: String, required: true, unique: true},
    username: {type:String, required: true }, // make email unique: true later
    bodyPart: {type: String,
        default: 'partless',  // Default value set to 'user'
        enum: ['partless', 'head', 'torso']
    }
    //name: {type: String,required: true },
    //meetings: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Meeting" }], default: [] },
});

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;
