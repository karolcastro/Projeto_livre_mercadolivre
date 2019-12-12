//dependencias do projeto
const path = require("path")
const express = require("express");// constroi o servidor
const mongoose = require("mongoose");//faz a conxao para o mongo
const bodyParser = require("body-parser"); //converte o body em json
const app = express();

//para chamar a conexao com o banco de dados
//mongoose.connect('mongodb://localhost:27017/Estados', {useNewUrlParser: true, useUnifiedTopology:true});

mongoose.connect('mongodb+srv://adimin:admin123@cluster0-qfwf2.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
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
app.get("/ping", (req,res) => {
  res.send("pong")
})

app.use(express.static('doc'))
app.get('/api-doc', (req,res)=>{
  res.sendFile(path.join(__dirname + '/../doc/index.html'))
})

module.exports = app