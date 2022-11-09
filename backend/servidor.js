const express = require ('express');
const app = express();

//Importar la conexion a la base de datos
const miconexion = require('./conexion');

// Crear la  opcion para saber si  els ervidor esta corriendo
app.listen(5000, function()
{
    console.log('Conectado. http://127.0.0.1:5000');
});
//Crear peticion de prueba  el metodo get
app.get('/',(req, res)=>{
    res.send('Servidor de prueba funcioanndo.')

});
//Definir las Rutas
const rutas = require('./rutas/router');
app.use('/api',rutas);
