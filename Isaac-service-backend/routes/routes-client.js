const express = require('express')
const router = express.Router();

//? ---------- Llamado al controllador ---------- //
const clientController = require('../controllers/client');


router.get('/', clientController.index);

module.exports = router;
