const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Colecao que representa uma secao do estacionamento
 */
const Section = new Schema({
    code: { type: String, unique: true },
    parkingSpots: { type: Number, default: 0 }
},
{
    collection: 'sections'
});

module.exports =  mongoose.model('Section', Section);