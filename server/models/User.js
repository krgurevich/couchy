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
        match: [/.+\@.+..+/],
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    listings: [{
        type: Schema.Types.ObjectId,
        ref: "Listing"
    }],

    // FOR FUTURE DEVELOPMENT 🚀
    // comments: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Comment"
    // }],
    // reservations: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Reservation"
    // }],

    // transactions: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Transaction"
    // }],
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