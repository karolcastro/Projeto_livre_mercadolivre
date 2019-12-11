// caracteristicas do cliente que estrutura o banco de dados

const mongoose = require('mongoose');// aplicacao que importa a conexao com o banco de dados

//estrutura com as propriedades que estarao no banco de dados, sao os requisitos do projeto
const estadosSchema = new mongoose.Schema({
    estado: { type: String},
    genero: [{
        feminino: { type: Number },
        masculino: { type: Number }
    }], //require: true, é um campo obrigatorio sem ele da erro
    idade: [{ 
        idade_menor_1ano: { type: Number },
        idade1_4: { type: Number },
        idade5_9: { type: Number } ,
        idade10_14: { type: Number },
        idade15_19: { type: Number },
        idade20_39: { type: Number },
        idade40_59: { type: Number },
        idade60_64: { type: Number },
        idade65_69: { type: Number },
        idade70_79: { type: Number },
        idade80_e_mais: { type: Number }
        }],
    raca: [{ 
        raca_branca: { type: Number },
        raca_preta: { type: Number },
        raca_amarela: { type: Number },
        raca_parda: { type: Number },
        raca_indigena: { type: Number }
       }],
    escolaridade: [{ 
        analfabeto: { type: Number },
        1a4_serie_incompleta_do_EF: { type: Number },
        4_serie_completa_do_EF: { type: Number },
        5ª_a_8ª_série_incompleta_do_EF: { type: Number },
        Ensino_fundamental_completo: { type: Number },
        Ensino_médio_incompleto: { type: Number },
        Ensino_médio_completo: 1609,
        Educação_superior_incompleta: 324,
        Educação_superior_completa: 593
        type: String }],
    anoDeNotificacao: { type: Number },
    classificacaoDaDengue: { type: String },
    evolucao: {type: String},
    sorotipo: {type: String},
    hospitalizacao: {type: Boolean}
},
    {
        versionKey: false// nao salva a versao no banco de dados
    })

//const Estados = mongoose.model('Estados', estadosSchema);//informa onde podera ser consumido os dados


module.exports = mongoose.model("Estados", estadosSchema);//informa para quem quiser consumir onde esta os dados, neste caso no model
