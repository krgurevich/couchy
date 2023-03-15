const db = require('../config/connection');
const { User } = require('../models');
const userSeed = require('./userSeeds.json');



db.once('open', async () => {
    try {
        await User.deleteMany({});
        await User.create(userSeed);

        console.log('seeds have been planted')
        process.exit(0);
    } catch (error) {
        throw (error);
    };
});