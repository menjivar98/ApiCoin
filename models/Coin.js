const mongoose = require('mongoose'),
      Schema =  mongoose.Schema;

// Definicion de Coin
let Coin = new Schema( {
    image: String,
    name: String,
    country: String,
    year: Number,
    avaliable: Boolean
});

module.exports = mongoose.model('coin',Coin)
