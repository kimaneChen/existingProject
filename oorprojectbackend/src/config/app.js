const dotenv = require('dotenv');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const envFound = dotenv.config();

module.exports = {
    port: process.env.PORT || 8000,
    api: {
        prefix: process.env.API_PREFIX || '/api/v1',
    },
    mongodbConnection: 'mongodb+srv://test:12345678910@cluster0.igaon.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
};
