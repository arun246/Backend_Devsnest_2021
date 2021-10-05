const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fname: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        enum: ["user", "admin", "super-admin"],
        default: "user",
    },
    username: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: false,
    }

	
},
{timestamps : true}
);

module.exports =  mongoose.model('users', UserSchema);
