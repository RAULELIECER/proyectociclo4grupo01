const  express = require('express');
const router = express.Router();
const controladorClientes = require('../controladores/controlador_Clientes');

router.get('/listar',controladorClientes);
module.exports = router;

