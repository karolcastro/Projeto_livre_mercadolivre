// importar o express
const express = require('express')
const router = express.Router()
// const alunas = require('../model/alunas.json')
const controller = require('../controllers/estadosController')// esta importando do controler
//const authMiddleware = require("../middlewares/auth")

router.get('/', controller.getEstados)
router.post('/',controller.post)// criar a rota post para inserir um novo cadastro a partir do postman
//router.use(authMiddleware);// a partir do cadastro tera o token



module.exports = router