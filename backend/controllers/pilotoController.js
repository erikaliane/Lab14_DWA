const Piloto = require("../models/Piloto");

exports.crearPiloto = async (req, res) => {
    try {
        const piloto = new Piloto(req.body);

        await piloto.save();
        res.send(piloto);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPilotos = async (req, res) => {

    try {

        const pilotos = await Piloto.find();
        res.json(pilotos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarPiloto = async (req, res) => {

    try {

        const {_id, codigo, nombre, hvuelo } = new Piloto(req.body);
        let pilots = await Piloto.findById(req.params.id);

        if(!pilots){
            res.status(404).json({ msg: 'No existe el Piloto'});
        }

        codigo._id = _id;
        pilots.codigo = codigo;
        pilots.nombre = nombre;
        pilots.hvuelo = hvuelo;

        console.log(pilots)

        pilots = await Piloto.findOneAndUpdate({ _id: req.params.id }, pilots, { new: true } );
        res.json(pilots);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verPiloto = async (req, res) => {

    try {

        let pilots = await Piloto.findById(req.params.id);

        if(!pilots){
            res.status(404).json({ msg: 'No existe el Piloto'});
        }

        res.json(pilots);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarPiloto = async (req, res) => {

    try {

        let pilots = await Piloto.findById(req.params.id);

        if(!pilots){
            res.status(404).json({ msg: 'No existe el Piloto'});
        }

        pilots = await Piloto.findOneAndRemove(req.params.id);

        res.json({ msg: 'El Piloto: ' + pilots.nombre + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

