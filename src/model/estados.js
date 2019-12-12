// caracteristicas do cliente que estrutura o banco de dados

const mongoose = require('mongoose');// aplicacao que importa a conexao com o banco de dados

//estrutura com as propriedades que estarao no banco de dados, sao os requisitos do projeto
const estadosSchema = new mongoose.Schema({
    estado: { type: String},
    nome:{type: String},
    cartaoSus:{type: Number},
    genero: { type: String },
    idade: { type: Number },
    raca: { type: String },
    escolaridade: { type: String },
    anoDeNotificacao: { type: String },
    classificacaoDaDengue: { type: String },
    evolucao_cura: {type: Boolean},
    evolucao_obito:{type: Boolean},
    hospitalizacao: {type: Boolean}
},
    {
        versionKey: false// nao salva a versao no banco de dados
    })

//const Estados = mongoose.model('Estados', estadosSchema);//informa onde podera ser consumido os dados


module.exports = mongoose.model("Estados", estadosSchema);//informa para quem quiser consumir onde esta os dados, neste caso no model
