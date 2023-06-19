const mongoose = require('mongoose');

const pilotoSchema = new mongoose.Schema({
    codigo: {
      type: Integer,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    hvuelo: {
        type: Number,
        require: true
    }
  });
module.exports = mongoose.model('Piloto', pilotoSchema)