const db = require('../config/connection');
const { User, Listing } = require('../models');

const userSeed = require('./seeds/userSeeds.json');
let listingSeed = require('./seeds/listingSeeds.json');




db.once('open', async () => {
    try {
        // clean database
        await User.deleteMany({});
        await Listing.deleteMany({});
        // await Comment.deleteMany({});

        // bulk creation of models
        const users = await User.insertMany(userSeed);
        console.log(users)

        console.log(listingSeed)
        listingSeed = listingSeed.map(listing => {
            listing.host = users[Math.floor(Math.random() * users.length)]._id
            return listing
        })
        console.log(listingSeed)
        const listings = await Listing.insertMany(listingSeed);
        console.log(listings)
        // const comments = await Comment.insertMany(commentSeed);

        for (newListing of listings) {
            // randomly adding a user to each listing
            let tempUser = await User.findById(newListing.host);
            tempUser.listings.push(newListing._id);
            await tempUser.save();

            // randomly adding a comment to each listing
            // const tempComment = comments[Math.floor(math.random() * comments.length)];
            // newListing.comment = tempComment._id;
            // await newListing.save();

            // adding a user reference to each comment
            // tempComment.users.push(newListing._id);
            // await tempComment.save();
        }

        console.log('seeds have been planted 🌳')
        process.exit(0);
    } catch (error) {
        throw (error);
    };
});


// TODO: 💡Make sure to make the Host element not nullable once seeds have been planted on Heroku 🤙. 