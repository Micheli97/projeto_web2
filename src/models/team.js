const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },

    badge_photo: {
        type: String,
        require: true,
    },

    city:{
        type:String,
        require: true,
    },

    coach:{
        type:String,
        require: true,
    },

    website:{
        type:String,
        require: true,
    }

},
    {
        timestamps: true,
    },

);

const team = mongoose.model("teams", teamSchema);

module.exports = team;