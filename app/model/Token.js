const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Colecao que representa um cartao de estacionamento que pode estar 
 * associado ao celular de um usuario que vai receber notificacao da localizacao
 * do seu carro
 */
const Card = new Schema({
    token: { type: String, unique: true },
    qrcode: { type: String },
    userDeviceId: { type: String, unique: true },
    section: { type: Schema.Types.ObjectId, ref: 'Section' }
},
{
    collection: 'cards'
});

module.exports =  mongoose.model('Card', Section);