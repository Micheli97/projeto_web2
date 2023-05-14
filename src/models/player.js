const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },

    photo: {
        type: String,
        require: true,
    },

    height: {
        type: Number,
        require: true,
    },

    weight: {
        type: Number,
        require: true,
    },

    age: {
        type: Number,
        require: true,
    },

    position: {
        type: String,
        require: true,
    },

    number: {
        type: Number,
        require: true,
    },

    teamId: {
        type: String,
    }

},
    {
        timestamps: true,
    },

);

const player = mongoose.model("players", playerSchema);

module.exports = player;