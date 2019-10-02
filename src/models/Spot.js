const mongoose = require('mongoose');


const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId, //Aqui se pega a referencia do usuario
        ref: 'User'
    }

});

module.exports = mongoose.model('Spot', SpotSchema);