const express = require('express');
const conectarDB = require('./config/db')
const config = require('./config/global');
const cors = require('cors');

const app = express();

//Conectar BD
conectarDB();

app.use(cors())

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

app.use('/api/vuelo', require('./routes/vuelo'));
app.use('/api/avion', require('./routes/avion'));
app.use('/api/piloto', require('./routes/piloto'));
app.use('/api/tripulacion', require('./routes/tripulacion'));


app.use('/api/login', require('./routes/usuario'));
app.use('/api/create-user', require('./routes/usuario'));



app.listen(config.port, () => {
    console.log('El servidor por el puerto 4000')
})