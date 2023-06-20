
const express = require('express');
const router = express.Router();
const pilotoController = require('../controllers/pilotoController');

router.post('/', pilotoController.crearPiloto);
router.get('/', pilotoController.obtenerPilotos);
router.put('/:id', pilotoController.actualizarPiloto);
router.get('/:id', pilotoController.verPiloto);
router.delete('/:id', pilotoController.eliminarPiloto);

module.exports = router;