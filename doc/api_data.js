define({ "api": [
  {
    "type": "delete",
    "url": "/:cartaoSus",
    "title": "Deletar a informacao de um paciente de acordo com o numero do cartao SUS",
    "name": "deleteEstado",
    "group": "Delete",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mensagem",
            "description": "<p>Cartao SUS de numero ########### removido com sucesso !</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{ \nHTTP/1.1 201\nmessage:  Cartao SUS de numero 22222222222 removido com sucesso !\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numero",
            "description": "<p>numero do cartao SUS</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message:",
            "description": "<p>Cartao SUS de numero 22222222222 não localizado !</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n{\n    message:  Cartao SUS de numero 22222222222 não localizado !\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estadosRoute.js",
    "groupTitle": "Delete"
  },
  {
    "type": "get",
    "url": "/:estado",
    "title": "Retorna todos os pacientes do estado solicitado",
    "name": "getDadosEstado",
    "group": "GET",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mensagem",
            "description": "<p>HTTP/1.1 200 - Lista todos os pacientes do estado solicitado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": " {\nHTTP/1.1 200, \n {\n        \"_id\": \"5df180832c1cc93b0463d91e\",\n        \"estado\": \"Parana\",\n        \"nome\": \"Camila Maria\",\n        \"cartaoSus\": 443223223,\n        \"genero\": \"feminino\",\n        \"idade\": 25,\n        \"raca\": \"parda\",\n        \"escolaridade\": \"ensino superior\",\n        \"anoDeNotificacao\": \"25/10/2018\",\n        \"classificacaoDaDengue\": \"dengue1\",\n        \"evolucao_cura\": false,\n        \"evolucao_obito\": true,\n        \"hospitalizacao\": true\n    },\n    {\n        \"_id\": \"5df1845051532c3d1cd0ce8b\",\n        \"estado\": \"Parana\",\n        \"nome\": \"Roberto Henrique\",\n        \"cartaoSus\": 553223223,\n        \"genero\": \"masculino\",\n        \"idade\": 21,\n        \"raca\": \"parda\",\n        \"escolaridade\": \"ensino superior\",\n        \"anoDeNotificacao\": \"25/10/2018\",\n        \"classificacaoDaDengue\": \"dengue1\",\n        \"evolucao_cura\": true,\n        \"evolucao_obito\": false,\n        \"hospitalizacao\": true\n    },\n    {\n        \"_id\": \"5df2d043abdb5e0068cb7dc9\",\n        \"estado\": \"Parana\",\n        \"nome\": \"Henrique\",\n        \"cartaoSus\": 773223223,\n        \"genero\": \"masculino\",\n        \"idade\": 21,\n        \"raca\": \"parda\",\n        \"escolaridade\": \"ensino superior\",\n        \"anoDeNotificacao\": \"25/01/2018\",\n        \"classificacaoDaDengue\": \"dengue1\",\n        \"evolucao_cura\": true,\n        \"evolucao_obito\": false,\n        \"hospitalizacao\": true\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message:",
            "description": "<p>HTTP/1.1 404 error - Estado não localizado!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\nHTTP/1.1 404 Not found\n    message:  Estado não localizado!\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estadosRoute.js",
    "groupTitle": "GET"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Retorna todos os estados do banco de dados",
    "name": "getEstados",
    "group": "GET",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Lista",
            "description": "<p>{ HTTP/1.1 201 Retorna a lista dos estados }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    [\n    {\n        HTTP/1.1 201 \n\n        \"_id\": \"5df1810c2c1cc93b0463d921\",\n        \"estado\": \"Sao Paulo\",\n        \"nome\": \"Elisa Maria\",\n        \"cartaoSus\": 223223223,\n        \"genero\": \"feminino\",\n        \"idade\": 40,\n        \"raca\": \"indigena\",\n        \"escolaridade\": \"ensino fundamental\",\n        \"anoDeNotificacao\": \"10/09/2015\",\n        \"classificacaoDaDengue\": \"dengue\",\n        \"evolucao_cura\": true,\n        \"evolucao_obito\": false,\n        \"hospitalizacao\": true\n    },\n    {\n        \"_id\": \"5df181382c1cc93b0463d922\",\n        \"estado\": \"Amapa\",\n        \"nome\": \"Maria Penha\",\n        \"cartaoSus\": 223223223,\n        \"genero\": \"feminino\",\n        \"idade\": 40,\n        \"raca\": \"indigena\",\n        \"escolaridade\": \"ensino fundamental\",\n        \"anoDeNotificacao\": \"01/08/2015\",\n        \"classificacaoDaDengue\": \"dengue\",\n        \"evolucao_cura\": true,\n        \"evolucao_obito\": false,\n        \"hospitalizacao\": true\n    },\n    {\n        \"_id\": \"5df1845051532c3d1cd0ce8b\",\n        \"estado\": \"Parana\",\n        \"nome\": \"Roberto Henrique\",\n        \"cartaoSus\": 553223223,\n        \"genero\": \"masculino\",\n        \"idade\": 21,\n        \"raca\": \"parda\",\n        \"escolaridade\": \"ensino superior\",\n        \"anoDeNotificacao\": \"25/10/2018\",\n        \"classificacaoDaDengue\": \"dengue1\",\n        \"evolucao_cura\": true,\n        \"evolucao_obito\": false,\n        \"hospitalizacao\": true\n    },\n    {\n        \"_id\": \"5df2d043abdb5e0068cb7dc9\",\n        \"estado\": \"Parana\",\n        \"nome\": \"Henrique\",\n        \"cartaoSus\": 773223223,\n        \"genero\": \"masculino\",\n        \"idade\": 21,\n        \"raca\": \"parda\",\n        \"escolaridade\": \"ensino superior\",\n        \"anoDeNotificacao\": \"25/01/2018\",\n        \"classificacaoDaDengue\": \"dengue1\",\n        \"evolucao_cura\": true,\n        \"evolucao_obito\": false,\n        \"hospitalizacao\": true\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>HTTP/1.1 404 Not Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estadosRoute.js",
    "groupTitle": "GET"
  },
  {
    "type": "get",
    "url": "/:genero",
    "title": "Busca as informações por gênero",
    "name": "getGenero",
    "group": "GET",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mensagem",
            "description": "<p>Retorna todos os pacientes do genero solicitado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "        { HTTP/1.1 200 \n{\n        \"_id\": \"5df180c12c1cc93b0463d91f\",\n        \"estado\": \"Rio de Janeiro\",\n        \"nome\": \"Camila Maria\",\n        \"cartaoSus\": 33333333333,\n        \"genero\": \"feminino\",\n        \"idade\": 25,\n        \"raca\": \"branca\",\n        \"escolaridade\": \"ensino superior\",\n        \"anoDeNotificacao\": \"10/10/2018\",\n        \"classificacaoDaDengue\": \"dengue1\",\n        \"evolucao_cura\": false,\n        \"evolucao_obito\": true,\n        \"hospitalizacao\": true\n    },\n    {\n        \"_id\": \"5df180e72c1cc93b0463d920\",\n        \"estado\": \"Amapa\",\n        \"nome\": \"Maria Penha\",\n        \"cartaoSus\": 66666666666,\n        \"genero\": \"feminino\",\n        \"idade\": 38,\n        \"raca\": \"indigena\",\n        \"escolaridade\": \"ensino fundamental\",\n        \"anoDeNotificacao\": \"01/08/2015\",\n        \"classificacaoDaDengue\": \"dengue\",\n        \"evolucao_cura\": true,\n        \"evolucao_obito\": false,\n        \"hospitalizacao\": true\n    }\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "genero",
            "description": "<p>Retorna todos os pacientes do genero solicitado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\nHTTP/1.1 \n404 Bad Request\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estadosRoute.js",
    "groupTitle": "GET"
  },
  {
    "type": "post",
    "url": "/",
    "title": "Acrescenta as informacoes de um novo paciente",
    "name": "post",
    "group": "POST",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mesagem",
            "description": "<p>Cadastro incluido com sucesso!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\nHTTP/1.1 201 \nCadastro incluido com sucesso!\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>HTTP/1.1 500 Not Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estadosRoute.js",
    "groupTitle": "POST"
  },
  {
    "type": "put",
    "url": "/:cartaoSus",
    "title": "Atualiza os dados do paciente de acordo com o numero do cartao SUS",
    "name": "updateCartaoSus",
    "group": "PUT",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mensagem",
            "description": "<p>Dados atualizados com sucesso!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{         \nHTTP/1.1 201\n         Dados atualizados com sucesso!\n }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Numero",
            "description": "<p>numero do cartao SUS</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message:",
            "description": "<p>HTTP/1.1 404 error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\nHTTP/1.1 404 Not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estadosRoute.js",
    "groupTitle": "PUT"
  }
] });
