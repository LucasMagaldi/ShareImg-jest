import mongoose from "mongoose";
import validator from "validator";


const UserSchema = new mongoose.Schema({
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



export default mongoose.model('Users', UserSchema);