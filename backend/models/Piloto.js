const mongoose = require('mongoose');

const pilotoSchema = new mongoose.Schema({
    codigo: {
      type: Number,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    hvuelo: {
        type: String,
        require: true
    }
  });
module.exports = mongoose.model('Piloto', pilotoSchema)