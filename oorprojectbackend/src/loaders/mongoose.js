const mongoose = require('mongoose');
const config = require('../../src/config/app');

module.exports = async function () {
    const connection = await mongoose.connect(config.mongodbConnection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
    return connection.connection.db;
};
