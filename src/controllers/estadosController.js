const Estados = require('../model/estados')
//const fs = require('fs'); // arquivo file system para gravar as informações
//const bcrypt = require("bcrypt");// requisicao do bcrypt
//const bcryptSalt = 8;// qnt que vai embaralhar

exports.getEstados = (req, res,next) => {
    //const nomeEstados = req.params.estados
   Estados.find(function(err, estados){
       if(err) res.status(500).send(err)
       console.log(estados)
       res.status(200).send(estados)
   })
}

exports.post = (req, res,next) =>{
    const cadastro = new Estados(req.body)
    cadastro.save(function(error){
        if (error) res.status(500).send(error);
        res.status(201).send("Estado incluido com sucesso")
     })
    }

