const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: {
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
    posts: [{
        type: Schema.Types.ObjectId,
        ref: "Post"
    }],
},

    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

module.exports = model("User", userSchema);