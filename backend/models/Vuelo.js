const mongoose = require('mongoose');

const vueloSchema = new mongoose.Schema({
    nvuelo: {
      type: Number,
      required: true
    },
    origen: {
      type: String,
      required: true
    },
    destino: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    avion: {
        type: mongoose.Types.ObjectId,
        ref: "Aviones"
    },
    piloto: {
        type: mongoose.Types.ObjectId,
        ref: "Piloto"
    }
  });
module.exports = mongoose.model('Vuelo', vueloSchema)