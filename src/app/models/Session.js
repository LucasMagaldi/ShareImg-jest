import mongoose from "mongoose";
import validator from "validator";


const SchemaSession = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 40,
        trim: true
    },
    email: {
        type: String,
    }
});



export default mongoose.model('Sessions', SchemaSession);