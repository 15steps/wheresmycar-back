const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Colecao que representa um cartao de estacionamento que pode estar 
 * associado ao celular de um usuario que vai receber notificacao da localizacao
 * do seu carro
 */
const Card = new Schema({
    token: { type: String, unique: true },
    text: { type: String, default: '' },
    // userDeviceId: { type: String, unique: true, default: null },
    section: { type: Schema.Types.ObjectId, ref: 'Section', default: null }
},
{
    collection: 'cards'
});

module.exports =  mongoose.model('Card', Card);