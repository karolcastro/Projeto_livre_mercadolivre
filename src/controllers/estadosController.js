const Estados = require('../model/estados')
//const fs = require('fs'); // arquivo file system para gravar as informações
//const bcrypt = require("bcrypt");// requisicao do bcrypt
//const bcryptSalt = 8;// qnt que vai embaralhar

exports.getEstados = (req, res,next) => {
    //const nomeEstados = req.params.estados
   Estados.find(function(err, estados){
       if(err) res.status(404).send(err)
       console.log(estados)
       res.status(200).send(estados)
   })
}

exports.post = (req, res,next) =>{
    const cadastro = new Estados(req.body)
    cadastro.save(function(error){
        if (error) res.status(500).send(error);
        res.status(201).send("Cadastro incluido com sucesso")
     })
    }

exports.getGenero = (req, res, next) =>{
    const dadosGenero = req.params.genero
    Estados.find({genero: dadosGenero}, function(err, genero){
        if (err) return res.status(400).send(err)
        res.status(200).send(genero)
    })
}

exports.getDadosEstado = (req, res, next) =>{
    const dadosEstados = req.params.estado
    console.log('dados estados',dadosEstados)
    Estados.find({estado: dadosEstados}, function(err, estado){
        if (err) return res.status(404).send(err)
        res.status(200).send(Estados)
    })
    
}

exports.updateCartaoSus = (req,res,next) =>{
    Estados.update(
        {cartaoSus: req.params.cartaoSus},
        {$set: req.body},
        {upsert: true},
        function (err){
            if (err) return res.status(500).send (err)
            res.status(200).send({message: "Dados atualizados com sucesso! "})
        }
    )
}

exports.deleteEstado = (req, res, next) =>{
    const cartaoSus = req.params.cartaoSus
    Estados.findOne({cartaoSus}, function (err, estados){
        if (err) return res.status(500).send(err)

        if (!cartaoSus){
            return res.status(404).send({message:`Cartao SUS de numero ${estados.cartaoSus} não localizado !` })
        }
        estados.remove(function (err){
            if (!err){
                res.status(200).send({message: ` Cartao SUS de numero ${estados.cartaoSus} removido com sucesso !`})
            }
        })
    })
}

