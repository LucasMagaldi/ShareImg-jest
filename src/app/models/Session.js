import mongoose from "mongoose";
import validator from "validator";


const SessionSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 40,
        trim: true
    },
    email: {
        type: String,
        unique: true
    }
});



export default mongoose.model('Session', SessionSchema);