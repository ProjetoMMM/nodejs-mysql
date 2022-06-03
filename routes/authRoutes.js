const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')

router.get('/cadastro', AuthController.cadastro)
router.post('/cadastro', AuthController.cadastroPost)

module.exports = router