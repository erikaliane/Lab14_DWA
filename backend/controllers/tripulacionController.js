const Tripulacion = require("../models/Tripulaciones");

exports.crearTripulacion = async (req, res) => {
    try {
      const tripulacion = new Tripulacion(req.body);
  
      await tripulacion.save();
      res.send(tripulacion);
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error al crear el tripulacion");
    }
  };

  exports.obtenerTripulaciones = async (req, res) => {
    try {
      const tripulaciones = await Tripulacion.find();
      res.json(tripulaciones);
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error al obtener los tripulaciones");
    }
  };
  

exports.actualizarTripulacion = async (req, res) => {

    try {

        const {_id, codigo, nombre, vuelo } = new Tripulacion(req.body);
        let tripulaciones = await Tripulacion.findById(req.params.id);

        if(!tripulaciones){
            res.status(404).json({ msg: 'No existe el tripulante'});
        }

        codigo._id = _id;
        tripulaciones.codigo = codigo;
        tripulaciones.nombre = nombre;
        tripulaciones.vuelo = vuelo;

        console.log(tripulaciones)

        tripulaciones = await Tripulacion.findOneAndUpdate({ _id: req.params.id }, tripulaciones, { new: true } );
        res.json(tripulaciones);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verTripulacion = async (req, res) => {

    try {

        let tripulaciones = await Tripulacion.findById(req.params.id);

        if(!tripulaciones){
            res.status(404).json({ msg: 'No existe el Tripulacion'});
        }

        res.json(tripulaciones);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarTripulacion = async (req, res) => {

    try {

        let tripulaciones = await Tripulacion.findById(req.params.id);

        if(!tripulaciones){
            res.status(404).json({ msg: 'No existe el Tripulacion'});
        }

        tripulaciones = await Tripulacion.findOneAndRemove(req.params.id);

        res.json({ msg: 'El Tripulacion: ' + tripulaciones.nombre + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al eliminar el tripulante");
    }

}
