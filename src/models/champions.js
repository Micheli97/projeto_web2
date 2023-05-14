const mongoose = require("mongoose");

const championsSchema = mongoose.Schema({
    timeA: {
        type: String,
        require: true,
    },
    timeB: {
        type: String,
        require: true,
    },

},
    {
        timestamps: true,
    },

);

const champions = mongoose.model("champions", championsSchema);

module.exports = champions;