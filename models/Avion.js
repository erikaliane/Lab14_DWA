const mongoose = require('mongoose');
    
const avionSchema = new mongoose.Schema({
    codigo: {
      type: Integer,
      required: true
    },
    tipo: {
      type: String,
      required: true
    }
  });
module.exports = mongoose.model('Avion', avionSchema)