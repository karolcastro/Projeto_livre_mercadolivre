//dependencias do projeto
const express = require("express");// constroi o servidor
const mongoose = require("mongoose");//faz a conxao para o mongo
const bodyParser = require("body-parser"); //converte o body em json
const app = express();

//para chamar a conexao com o banco de dados
mongoose.connect('mongodb://localhost:27017/reprograma', {useNewUrlParser: true, useUnifiedTopology:true});

// chamr o mongo
let db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error:'));
db.once('open', function (){
    console.log('Conexão feita com sucesso com o Mongo.')
})

//criando o acesso as rotas
const estados = require("./routes/estadosRoute");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")//controlar os acessos de origens(nesse caso qualquer um)
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"//o que é permitido de retorno
    )
    next()
  })

app.use(bodyParser.json());// indicar que vai ser utilizado para coverter o body no json

app.use("/estados", estados)//áqui é definido o que sera chamado na rota do postman, todos comecaram com clientes/ alguma coisa


module.exports = app