const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

const checkAuth = require('../helpers/auth').checkAuth

router.get('/dashboard', checkAuth, ProductController.dashboard)

module.exports = router