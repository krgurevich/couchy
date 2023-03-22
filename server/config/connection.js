const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/couchy', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

module.exports = mongoose.connection;