const mongoose = require('mongoose');

const tripulacionSchema = new mongoose.Schema({
    codigo: {
      type: Integer,
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
module.exports = mongoose.model('Tripulacion', tripulacionSchema)