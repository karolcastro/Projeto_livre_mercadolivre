// importar o express
const express = require('express')
const router = express.Router()
// const alunas = require('../model/alunas.json')
const controller = require('../controllers/estadosController')// esta importando do controler
//const authMiddleware = require("../middlewares/auth")


router.get('/', controller.getEstados)
/**
 * @api {get}  /  Retorna todos os estados do banco de dados
 * @apiName getEstados
 * @apiGroup GET
 *
 * @apiSuccess {String} Lista
 * {
 * HTTP/1.1 201 
 * Retorna a lista dos estados
 * }
 *
 * @apiSuccessExample Success-Response:
 *     [
    {
        HTTP/1.1 201 

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
 * @apiError 404  HTTP/1.1 404 Not Found
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     
 */
router.post('/',controller.post)// criar a rota post para inserir um novo cadastro a partir do postman
//router.use(authMiddleware);// a partir do cadastro tera o token

/**
 * @api {post} /  Acrescenta as informacoes de um novo paciente
 * @apiName post
 * @apiGroup POST
 *
 * @apiSuccess {String} mesagem
 * Cadastro incluido com sucesso!
 * @apiSuccessExample  Success-Response: 
 * {
 * HTTP/1.1 201 
 * Cadastro incluido com sucesso!
 * }  
 * @apiError 404  HTTP/1.1 500 Not Found
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 */


router.get('/genero/:genero',controller.getGenero)
/**
 * @api {get} /:genero  Busca as informações por gênero 
 * @apiName getGenero
 * @apiGroup GET
 * @apiSuccess {String} mensagem
 * Retorna todos os pacientes do genero solicitado
 * @apiParam {String} genero  Retorna todos os pacientes do genero solicitado
 * @apiSuccessExample  Success-Response: 
 *         { HTTP/1.1 200 
 * {
        "_id": "5df180c12c1cc93b0463d91f",
        "estado": "Rio de Janeiro",
        "nome": "Camila Maria",
        "cartaoSus": 33333333333,
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
        "cartaoSus": 66666666666,
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
}
 *   
 * @apiError 404 error
 *@apiErrorExample Error-Response:
 * {
 * HTTP/1.1 
 * 404 Bad Request
 * }
 */
router.get('/:estado', controller.getDadosEstado)
/**
 * @api {get}  /:estado  Retorna todos os pacientes do estado solicitado
 * @apiName getDadosEstado
 * @apiGroup GET
 *
 * @apiSuccess {String} mensagem
 * HTTP/1.1 200 - Lista todos os pacientes do estado solicitado
 * 
 * @apiSuccessExample  Success-Response: 
 *  {
 * HTTP/1.1 200, 
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
 *   }
 *
 * @apiError message: HTTP/1.1 404 error - Estado não localizado!
 * @apiErrorExample Error-Response:
 * {
 * HTTP/1.1 404 Not found
 *     message:  Estado não localizado!
 * }   
 */

router.put("/:cartaoSus", controller.updateCartaoSus)
/**
 * @api {put}  /:cartaoSus  Atualiza os dados do paciente de acordo com o numero do cartao SUS
 * @apiName updateCartaoSus
 * @apiGroup PUT
 * @apiSuccess {String} mensagem
 * Dados atualizados com sucesso!
 * @apiParam {Number} Numero  numero do cartao SUS
 * @apiSuccessExample  Success-Response: 
 * {         
 * HTTP/1.1 201
 *          Dados atualizados com sucesso!
 *  }
 * @apiError message: HTTP/1.1 404 error
 * 
 * @apiErrorExample Error-Response:
 * {
 * HTTP/1.1 404 Not found
 *} 
 */

router.delete("/:cartaoSus", controller.deleteEstado)
/**
 * @api {delete} /:cartaoSus  Deletar a informacao de um paciente de acordo com o numero do cartao SUS
 * @apiName deleteEstado
 * @apiGroup Delete
 *
 * @apiSuccess {String} mensagem  
 * Cartao SUS de numero ########### removido com sucesso !
 * @apiParam {Number} numero  numero do cartao SUS
 *
 * @apiSuccessExample  Success-Response: 
 * { 
 * HTTP/1.1 201
 * message:  Cartao SUS de numero 22222222222 removido com sucesso !
 * }
 *   
 * @apiError  message:  Cartao SUS de numero 22222222222 não localizado !
 * 
 * @apiErrorExample Error-Response:
 * HTTP/1.1 404 Not found
 * {
 *     message:  Cartao SUS de numero 22222222222 não localizado !
 * }
 */




module.exports = router