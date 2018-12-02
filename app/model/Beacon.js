const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beacon = new Schema({
    minor: {type: String, required: true},
    rssi: {type: String, required: true},
    major: {type: String, required: true},
    proximity: {type: String, required: true},
    uuid: {type: String, required: true},
    position: {type: Object, required: true}
});