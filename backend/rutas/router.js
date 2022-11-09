const express = require('express');
const router = express.Router();

const rutaClientes = require('./ruta_clientes');
router.use('/clientes', rutaClientes);

module.exports = router;
