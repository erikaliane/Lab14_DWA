const mongoose = require('mongoose');

const tripulacionesSchema = new mongoose.Schema({
    codigo: {
      type: Number,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    vuelo:{
        type: mongoose.Types.ObjectId,
        ref: "Vuelo"
    }
  });
module.exports = mongoose.model('Tripulaciones', tripulacionesSchema)