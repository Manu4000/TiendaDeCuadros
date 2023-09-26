const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta protegida que requiere autenticación
router.get('/profile', userController.profile);

module.exports = router;
