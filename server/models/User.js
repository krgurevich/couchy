const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+..+/],
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
    reservations: [{
        type: Schema.Types.ObjectId,
        ref: "Reservation"
    }],
    listings: [{
        type: Schema.Types.ObjectId,
        ref: "Listing"
    }],
    photo: String
},

    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

module.exports = model("User", userSchema);