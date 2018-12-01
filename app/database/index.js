const mongoose = require('mongoose');

const mongoHost = process.env.MONGO_HOST || 'localhost';

mongoose.connect(`mongodb://${mongoHost}/wheresmycar`, {useNewUrlParser: true})
    .then(() => console.log('Connection with mongo was successful'))
    .catch(error => console.log('Connection with mongo failed ', error));