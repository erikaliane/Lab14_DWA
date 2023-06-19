
const express = require('express');
const router = express.Router();
const avionController = require('../controllers/avionController');

router.post('/', avionController.crearAvion);
router.get('/', avionController.obtenerAviones);
router.put('/:id', avionController.actualizarAvion);
router.get('/:id', avionController.verAvion);
router.delete('/:id', avionController.eliminarAvion);

module.exports = router;