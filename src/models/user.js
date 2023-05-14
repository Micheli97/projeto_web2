const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String, require: true,
    },
    email: {
        type: String,
        unique: true,
        match: /.+\a.+\..+/,
    },
    password: {
        type: String,
        require: true,
    },

},
    {
        timestamps: true,
    },

);

const user = mongoose.model("users", userSchema);

module.exports = user;
