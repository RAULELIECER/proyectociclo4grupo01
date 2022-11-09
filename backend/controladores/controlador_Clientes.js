const express =require('express');
const router = express.Router();
const modelos_Clientes = require('../modelos/modelos_clientes');

//Crear uan ruta para mostrar los registros
router.get('/listar' ,(req, res)=>{
    modelos_Clientes.find({}, function(docs, err){
        if(!err)
        {
            res.send(docs);
        }
        else
        {
            res.send(err);
        }
        
    })
})
module.exports = router;

