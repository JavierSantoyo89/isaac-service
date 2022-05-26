const express = require('express')
const router = express.Router();

//? ---------- Llamado al controllador ---------- //
const adminController = require('../controllers/admin');


router.get('/', adminController.index);

module.exports = router;


