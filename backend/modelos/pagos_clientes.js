const mongoose = require('mongoose');
//Crear la estrutura dela base de datos
const esquema = mongoose.Schema;

const esquemaClientes = new esquema({
    id: String,
    nombre: String,
    valor: Number
})
 //exportar el Modelo --Llamar la coleccion Cliente
const modeloCliente = mongoose.model('clientes' ,esquemaClientes);
module.exports =modeloCliente