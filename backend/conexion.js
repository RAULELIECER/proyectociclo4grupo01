const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/reservas');

const miconexion= mongoose.connection;

miconexion.on('connected',()=>{
    console.log('Conexion Exitosa');
    });
    miconexion.on('error',()=>{
        console.log('No es posible establecer la conexion');
        });

        module.exports =mongoose;
