const Avion = require("../models/Avion");

exports.crearAvion = async (req, res) => {
    try {
        const avion = new Avion(req.body);

        await avion.save();
        res.send(avion);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerAviones = async (req, res) => {

    try {

        const aviones = await Avion.find();
        res.json(aviones);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarAvion = async (req, res) => {

    try {

        const {_id, codigo, tipo } = new Avion(req.body);
        let airplanes = await Avion.findById(req.params.id);

        if(!airplanes){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        codigo._id = _id;
        airplanes.codigo = codigo;
        airplanes.tipo = tipo;
        console.log(airplanes)

        airplanes = await Avion.findOneAndUpdate({ _id: req.params.id }, airplanes, { new: true } );
        res.json(airplanes);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verAvion = async (req, res) => {

    try {

        let airplanes = await Avion.findById(req.params.id);

        if(!airplanes){
            res.status(404).json({ msg: 'No existe el Avion'});
        }

        res.json(airplanes);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarAvion = async (req, res) => {

    try {

        let airplanes = await Avion.findById(req.params.id);

        if(!airplanes){
            res.status(404).json({ msg: 'No existe el Avion'});
        }

        airplanes = await Avion.findOneAndRemove(req.params.id);

        res.json({ msg: 'El Avion: ' + airplanes.codigo + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

