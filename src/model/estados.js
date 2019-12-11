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
        primeira_a_quarta_serie_incompleta_do_EF: { type: Number },
        quarta_serie_completa_do_EF: { type: Number },
        quinta_a_oitava_série_incompleta_do_EF: { type: Number },
        Ensino_fundamental_completo: { type: Number },
        Ensino_médio_incompleto: { type: Number },
        Ensino_médio_completo:{ type: Number } ,
        Educação_superior_incompleta:{ type: Number },
        Educação_superior_completa: { type: Number }
        }],
    anoDeNotificacao: [{ 
        Ano_Notificação_2013: 22,
        Ano_Notificação_2014: 1996,
        Ano_Notificação_2015: 2245,
        Ano_Notificação_2016: 7925,
        Mês_Notificação_Jan: 2586,
        Mês_Notificação_Fev: 3204,
        Mês_Notificação_Marc: 2665,
        Mês_Notificação_Abr: 1463,
                "Mês_Notificação Mai": 759,
                "Mês_Notificação Jun": 440,
                "Mês_Notificação Jul": 322,
                "Mês_Notificação Ago": 199,
                "Mês_Notificação Set": 205,
                "Mês_Notificação Out": 343,
                "Mês_Notificação Nov": 730,
                "Mês_Notificação Dez": 1384
        type: Number }],
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
