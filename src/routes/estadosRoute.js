// importar o express
const express = require('express')
const router = express.Router()
// const alunas = require('../model/alunas.json')
const controller = require('../controllers/estadosController')// esta importando do controler
//const authMiddleware = require("../middlewares/auth")


router.get('/', controller.getEstados)
/**
 * @api {get}  Retorna todos os estados
 * 
 * @apiGroup GET
 *
 *
 *
 * 
 * @apiSuccess {String} HTTP/1.1 201 
 *
 * @apiSuccessExample Success-Response:
 *     [
    {
        "_id": "5df1810c2c1cc93b0463d921",
        "estado": "Sao Paulo",
        "nome": "Elisa Maria",
        "cartaoSus": 223223223,
        "genero": "feminino",
        "idade": 40,
        "raca": "indigena",
        "escolaridade": "ensino fundamental",
        "anoDeNotificacao": "10/09/2015",
        "classificacaoDaDengue": "dengue",
        "evolucao_cura": true,
        "evolucao_obito": false,
        "hospitalizacao": true
    },
    {
        "_id": "5df181382c1cc93b0463d922",
        "estado": "Amapa",
        "nome": "Maria Penha",
        "cartaoSus": 223223223,
        "genero": "feminino",
        "idade": 40,
        "raca": "indigena",
        "escolaridade": "ensino fundamental",
        "anoDeNotificacao": "01/08/2015",
        "classificacaoDaDengue": "dengue",
        "evolucao_cura": true,
        "evolucao_obito": false,
        "hospitalizacao": true
    },
    {
        "_id": "5df1845051532c3d1cd0ce8b",
        "estado": "Parana",
        "nome": "Roberto Henrique",
        "cartaoSus": 553223223,
        "genero": "masculino",
        "idade": 21,
        "raca": "parda",
        "escolaridade": "ensino superior",
        "anoDeNotificacao": "25/10/2018",
        "classificacaoDaDengue": "dengue1",
        "evolucao_cura": true,
        "evolucao_obito": false,
        "hospitalizacao": true
    },
    {
        "_id": "5df2d043abdb5e0068cb7dc9",
        "estado": "Parana",
        "nome": "Henrique",
        "cartaoSus": 773223223,
        "genero": "masculino",
        "idade": 21,
        "raca": "parda",
        "escolaridade": "ensino superior",
        "anoDeNotificacao": "25/01/2018",
        "classificacaoDaDengue": "dengue1",
        "evolucao_cura": true,
        "evolucao_obito": false,
        "hospitalizacao": true
    }
]
 *     
 *
 * @apiError HTTP/1.1 500
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     
 */
router.post('/',controller.post)// criar a rota post para inserir um novo cadastro a partir do postman
//router.use(authMiddleware);// a partir do cadastro tera o token

/**
 * @api {post} "/" Acrescenta as informacoes de um novo paciente
 * 
 * @apiGroup POST
 *
 * 
 *
 * @apiSuccess {String}   Cadastro incluido com sucesso.
 * 
 *
 * @apiSuccessExample  Success-Response: 
 *          HTTP/1.1 201 Cadastro incluido com sucesso
 *   
 *
 * @apiError HTTP/1.1 500 error
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 error
 *      
 */


router.get('/genero/:genero',controller.getGenero)
/**
 * @api {get}  GET - Busca os dados por genero 
 * @apiGroup GET
 * @apiSuccess {String} retorno  Retorna todos os pacientes do genero solicitado
 * @apiSuccessExample  Success-Response: 
 *          HTTP/1.1 200 
 * {
        "_id": "5df180c12c1cc93b0463d91f",
        "estado": "Rio de Janeiro",
        "nome": "Camila Maria",
        "cartaoSus": 333223223,
        "genero": "feminino",
        "idade": 25,
        "raca": "branca",
        "escolaridade": "ensino superior",
        "anoDeNotificacao": "10/10/2018",
        "classificacaoDaDengue": "dengue1",
        "evolucao_cura": false,
        "evolucao_obito": true,
        "hospitalizacao": true
    },
    {
        "_id": "5df180e72c1cc93b0463d920",
        "estado": "Amapa",
        "nome": "Maria Penha",
        "cartaoSus": 663223223,
        "genero": "feminino",
        "idade": 38,
        "raca": "indigena",
        "escolaridade": "ensino fundamental",
        "anoDeNotificacao": "01/08/2015",
        "classificacaoDaDengue": "dengue",
        "evolucao_cura": true,
        "evolucao_obito": false,
        "hospitalizacao": true
    }
 *   
 *
 * @apiError HTTP/1.1 500 error
 *@apiErrorExample Error-Response:
 * 500 error
 *     
 *      
 */
router.get('/:estado', controller.getDadosEstado)
/**
 * @api {get}  GET - Retorna todos os pacientes do estado solicitado
 * 
 * @apiGroup GET
 *
 * 
 *
 * @apiSuccess {String}  HTTP/1.1 200 - 
 * 
 *
 * @apiSuccessExample  Success-Response 
 *          HTTP/1.1 200, 
 *  {
        "_id": "5df180832c1cc93b0463d91e",
        "estado": "Parana",
        "nome": "Camila Maria",
        "cartaoSus": 443223223,
        "genero": "feminino",
        "idade": 25,
        "raca": "parda",
        "escolaridade": "ensino superior",
        "anoDeNotificacao": "25/10/2018",
        "classificacaoDaDengue": "dengue1",
        "evolucao_cura": false,
        "evolucao_obito": true,
        "hospitalizacao": true
    },
    {
        "_id": "5df1845051532c3d1cd0ce8b",
        "estado": "Parana",
        "nome": "Roberto Henrique",
        "cartaoSus": 553223223,
        "genero": "masculino",
        "idade": 21,
        "raca": "parda",
        "escolaridade": "ensino superior",
        "anoDeNotificacao": "25/10/2018",
        "classificacaoDaDengue": "dengue1",
        "evolucao_cura": true,
        "evolucao_obito": false,
        "hospitalizacao": true
    },
    {
        "_id": "5df2d043abdb5e0068cb7dc9",
        "estado": "Parana",
        "nome": "Henrique",
        "cartaoSus": 773223223,
        "genero": "masculino",
        "idade": 21,
        "raca": "parda",
        "escolaridade": "ensino superior",
        "anoDeNotificacao": "25/01/2018",
        "classificacaoDaDengue": "dengue1",
        "evolucao_cura": true,
        "evolucao_obito": false,
        "hospitalizacao": true
    }
 *   
 *
 * @apiError HTTP/1.1 500 error - Estado não localizado
 *
 * 
 *     
 *      
 */

router.put("/:cartaoSus", controller.updateCartaoSus)
/**
 * @api {put}  Atualiza os dados do paciente de acordo com o numero do cartao SUS
 * 
 * @apiGroup PUT
 *
 * 
 *
 * @apiSuccess {String} dados Dados atualizados com sucesso!.
 * 
 *
 * @apiSuccessExample  Success-Response 
 *          HTTP/1.1 201
 *          Dados atualizados com sucesso!
 *   
 *
 * @apiError error
 * 
 * @apiErrorExample Error-Response:
 * HTTP/1.1 500 error
 *
 * 
 *     
 *      
 */

router.delete("/:cartaoSus", controller.deleteEstado)
/**
 * @api {delete} -  Deleta os dados do paciente de acordo com o numero do cartao SUS
 * 
 * @apiGroup DELETE
 *
 * 
 *
 * @apiSuccess {String} message:  Cartao SUS de numero ########### removido com sucesso !
 * 
 *
 * @apiSuccessExample  Success-Response 
 *          HTTP/1.1 201
 * message:  Cartao SUS de numero ${estados.cartaoSus}  removido com sucesso !
 *   
 *
 * @apiError 
 * message:  Cartao SUS de numero ${estados.cartaoSus} não localizado !
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 404
 *     message:  Cartao SUS de numero ${estados.cartaoSus} não localizado !
 *      
 */




module.exports = router