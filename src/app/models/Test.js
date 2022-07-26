import mongoose from "mongoose";
import validator from "validator";


const TestSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 40,
        trim: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    }
});


export default mongoose.model('test', TestSchema);