const Vuelo = require("../models/Vuelo");

exports.crearVuelo = async (req, res) => {
    try {
      const vuelo = new Vuelo(req.body);
  
      await vuelo.save();
      res.send(vuelo);
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error al crear el vuelo");
    }
  };

  exports.obtenerVuelos = async (req, res) => {
    try {
      const vuelos = await Vuelo.find();
      res.json(vuelos);
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error al obtener los vuelos");
    }
  };
  

exports.actualizarVuelo= async (req, res) => {

    try {

        const {_id, nvuelo, origen, destino, fecha, avion, piloto } = new Vuelo(req.body);
        let vuelos = await Vuelo.findById(req.params.id);

        if(!vuelos){
            res.status(404).json({ msg: 'No existe el vuelo'});
        }

        nvuelo._id = _id;
        vuelos.nvuelo = nvuelo;
        vuelos.origen = origen;
        vuelos.destino = destino;
        vuelos.fecha = fecha;
        vuelos.avion = avion;
        vuelos.piloto = piloto;

        console.log(vuelos)

        vuelos = await Vuelo.findOneAndUpdate({ _id: req.params.id }, vuelos, { new: true } );
        res.json(vuelos);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verVuelo = async (req, res) => {

    try {

        let vuelos = await Vuelo.findById(req.params.id);

        if(!vuelos){
            res.status(404).json({ msg: 'No existe el Vuelo'});
        }

        res.json(vuelos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarVuelo = async (req, res) => {

    try {

        let vuelos = await Vuelo.findById(req.params.id);

        if(!vuelos){
            res.status(404).json({ msg: 'No existe el Vuelo'});
        }

        vuelos = await Vuelo.findOneAndRemove(req.params.id);

        res.json({ msg: 'El Vuelo: ' + vuelos.nvuelo + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al eliminar el vuelo");
    }

}

