const mongoose = require('mongoose');


const BookingSchema = new mongoose.Schema({
    data: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId, //Aqui se pega a referencia do usuario
        ref: 'User'
    },

    spot: {
        type: mongoose.Schema.Types.ObjectId, //Aqui se pega a referencia do usuario
        ref: 'Spot'
    }

});

module.exports = mongoose.model('Booking', BookingSchema);