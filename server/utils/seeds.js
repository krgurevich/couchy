const db = require('../config/connection');
const { User, Listing, Comment } = require('../models');

const userSeed = require('./userSeeds.json');
const listingSeed = require('./listingSeeds.json');
const commentSeed = require('./commentSeeds.json');



db.once('open', async () => {
    try {
        // clean database
        await User.deleteMany({});
        await Listing.deleteMany({});
        await Comment.deleteMany({});

        // bulk creation of models
        const users = await User.insertMany(userSeed);
        const listings = await Listing.insertMany(listingSeed);
        const comments = await Comment.insertMany(commentSeed);

        for (newListing of listings) {
            // randomly adding a user to each listing
            const tempUser = users[Math.floor(Math.random() * users.length)];
            tempUser.listings.push(newListing._id);
            await tempUser.save();

            // randomly adding a comment to each listing
            const tempComment = comments[Math.floor(math.random() * comments.length)];
            newListing.comment = tempComment._id;
            await newListing.save();

            // adding a user reference to each comment
            tempComment.users.push(newListing._id);
            await tempComment.save();
        }

        console.log('seeds have been planted')
        process.exit(0);
    } catch (error) {
        throw (error);
    };
});