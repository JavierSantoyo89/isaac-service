const express = require('express')
const router = express.Router();

//? ---------- Llamado al controllador ---------- //
const mainController = require('../controllers/main')


router.get('/', mainController.index) ;

module.exports = router;