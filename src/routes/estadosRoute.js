// importar o express
const express = require('express')
const router = express.Router()
// const alunas = require('../model/alunas.json')
const controller = require('../controllers/estadosController')// esta importando do controler
//const authMiddleware = require("../middlewares/auth")



router.get('/', controller.getEstados)
/**
 * @api {get} "/" Retorna todos os estados
 * @apiName GetEstados
 * @apiGroup User
 *
 * @apiParam {String} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.post('/',controller.post)// criar a rota post para inserir um novo cadastro a partir do postman
//router.use(authMiddleware);// a partir do cadastro tera o token
router.get('/genero/:genero',controller.getGenero)
//router.get('/estados/:estado', controller.getCartaoSus)
router.put("/:cartaoSus", controller.updateEstado)
router.delete("/:cartaoSus", controller.deleteEstado)



module.exports = router