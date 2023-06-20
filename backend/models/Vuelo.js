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
        type: String,
        ref: "Aviones",
        required: true
    },
    piloto: {
        type: String,
        ref: "Piloto",
        require: true
      }
  });

module.exports = mongoose.model('Vuelo', vueloSchema)