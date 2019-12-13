define({ "api": [
  {
    "type": "delete",
    "url": "-",
    "title": "Deleta os dados do paciente de acordo com o numero do cartao SUS",
    "group": "DELETE",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message:",
            "description": "<p>Cartao SUS de numero ########### removido com sucesso !</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response ",
          "content": "         HTTP/1.1 201\nmessage:  Cartao SUS de numero ${estados.cartaoSus}  removido com sucesso !",
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
            "description": "<p>Cartao SUS de numero ${estados.cartaoSus} não localizado !</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404\n    message:  Cartao SUS de numero ${estados.cartaoSus} não localizado !",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estadosRoute.js",
    "groupTitle": "DELETE",
    "name": "Delete"
  },
  {
    "type": "get",
    "url": "GET",
    "title": "- Busca os dados por genero",
    "group": "GET",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "retorno",
            "description": "<p>Retorna todos os pacientes do genero solicitado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "         HTTP/1.1 200 \n{\n        \"_id\": \"5df180c12c1cc93b0463d91f\",\n        \"estado\": \"Rio de Janeiro\",\n        \"nome\": \"Camila Maria\",\n        \"cartaoSus\": 333223223,\n        \"genero\": \"feminino\",\n        \"idade\": 25,\n        \"raca\": \"branca\",\n        \"escolaridade\": \"ensino superior\",\n        \"anoDeNotificacao\": \"10/10/2018\",\n        \"classificacaoDaDengue\": \"dengue1\",\n        \"evolucao_cura\": false,\n        \"evolucao_obito\": true,\n        \"hospitalizacao\": true\n    },\n    {\n        \"_id\": \"5df180e72c1cc93b0463d920\",\n        \"estado\": \"Amapa\",\n        \"nome\": \"Maria Penha\",\n        \"cartaoSus\": 663223223,\n        \"genero\": \"feminino\",\n        \"idade\": 38,\n        \"raca\": \"indigena\",\n        \"escolaridade\": \"ensino fundamental\",\n        \"anoDeNotificacao\": \"01/08/2015\",\n        \"classificacaoDaDengue\": \"dengue\",\n        \"evolucao_cura\": true,\n        \"evolucao_obito\": false,\n        \"hospitalizacao\": true\n    }",
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
            "field": "HTTP/1.1",
            "description": "<p>500 error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "500 error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estadosRoute.js",
    "groupTitle": "GET",
    "name": "GetGet"
  },
  {
    "type": "get",
    "url": "GET",
    "title": "- Retorna todos os pacientes do estado solicitado",
    "group": "GET",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "HTTP/1.1",
            "description": "<p>200 -</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response ",
          "content": "        HTTP/1.1 200, \n{\n       \"_id\": \"5df180832c1cc93b0463d91e\",\n       \"estado\": \"Parana\",\n       \"nome\": \"Camila Maria\",\n       \"cartaoSus\": 443223223,\n       \"genero\": \"feminino\",\n       \"idade\": 25,\n       \"raca\": \"parda\",\n       \"escolaridade\": \"ensino superior\",\n       \"anoDeNotificacao\": \"25/10/2018\",\n       \"classificacaoDaDengue\": \"dengue1\",\n       \"evolucao_cura\": false,\n       \"evolucao_obito\": true,\n       \"hospitalizacao\": true\n   },\n   {\n       \"_id\": \"5df1845051532c3d1cd0ce8b\",\n       \"estado\": \"Parana\",\n       \"nome\": \"Roberto Henrique\",\n       \"cartaoSus\": 553223223,\n       \"genero\": \"masculino\",\n       \"idade\": 21,\n       \"raca\": \"parda\",\n       \"escolaridade\": \"ensino superior\",\n       \"anoDeNotificacao\": \"25/10/2018\",\n       \"classificacaoDaDengue\": \"dengue1\",\n       \"evolucao_cura\": true,\n       \"evolucao_obito\": false,\n       \"hospitalizacao\": true\n   },\n   {\n       \"_id\": \"5df2d043abdb5e0068cb7dc9\",\n       \"estado\": \"Parana\",\n       \"nome\": \"Henrique\",\n       \"cartaoSus\": 773223223,\n       \"genero\": \"masculino\",\n       \"idade\": 21,\n       \"raca\": \"parda\",\n       \"escolaridade\": \"ensino superior\",\n       \"anoDeNotificacao\": \"25/01/2018\",\n       \"classificacaoDaDengue\": \"dengue1\",\n       \"evolucao_cura\": true,\n       \"evolucao_obito\": false,\n       \"hospitalizacao\": true\n   }",
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
            "field": "HTTP/1.1",
            "description": "<p>500 error - Estado não localizado</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/estadosRoute.js",
    "groupTitle": "GET",
    "name": "GetGet"
  },
  {
    "type": "get",
    "url": "Retorna",
    "title": "todos os estados",
    "group": "GET",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "HTTP/1.1",
            "description": "<p>201</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    [\n    {\n        \"_id\": \"5df1810c2c1cc93b0463d921\",\n        \"estado\": \"Sao Paulo\",\n        \"nome\": \"Elisa Maria\",\n        \"cartaoSus\": 223223223,\n        \"genero\": \"feminino\",\n        \"idade\": 40,\n        \"raca\": \"indigena\",\n        \"escolaridade\": \"ensino fundamental\",\n        \"anoDeNotificacao\": \"10/09/2015\",\n        \"classificacaoDaDengue\": \"dengue\",\n        \"evolucao_cura\": true,\n        \"evolucao_obito\": false,\n        \"hospitalizacao\": true\n    },\n    {\n        \"_id\": \"5df181382c1cc93b0463d922\",\n        \"estado\": \"Amapa\",\n        \"nome\": \"Maria Penha\",\n        \"cartaoSus\": 223223223,\n        \"genero\": \"feminino\",\n        \"idade\": 40,\n        \"raca\": \"indigena\",\n        \"escolaridade\": \"ensino fundamental\",\n        \"anoDeNotificacao\": \"01/08/2015\",\n        \"classificacaoDaDengue\": \"dengue\",\n        \"evolucao_cura\": true,\n        \"evolucao_obito\": false,\n        \"hospitalizacao\": true\n    },\n    {\n        \"_id\": \"5df1845051532c3d1cd0ce8b\",\n        \"estado\": \"Parana\",\n        \"nome\": \"Roberto Henrique\",\n        \"cartaoSus\": 553223223,\n        \"genero\": \"masculino\",\n        \"idade\": 21,\n        \"raca\": \"parda\",\n        \"escolaridade\": \"ensino superior\",\n        \"anoDeNotificacao\": \"25/10/2018\",\n        \"classificacaoDaDengue\": \"dengue1\",\n        \"evolucao_cura\": true,\n        \"evolucao_obito\": false,\n        \"hospitalizacao\": true\n    },\n    {\n        \"_id\": \"5df2d043abdb5e0068cb7dc9\",\n        \"estado\": \"Parana\",\n        \"nome\": \"Henrique\",\n        \"cartaoSus\": 773223223,\n        \"genero\": \"masculino\",\n        \"idade\": 21,\n        \"raca\": \"parda\",\n        \"escolaridade\": \"ensino superior\",\n        \"anoDeNotificacao\": \"25/01/2018\",\n        \"classificacaoDaDengue\": \"dengue1\",\n        \"evolucao_cura\": true,\n        \"evolucao_obito\": false,\n        \"hospitalizacao\": true\n    }\n]",
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
            "field": "HTTP/1.1",
            "description": "<p>500</p>"
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
    "groupTitle": "GET",
    "name": "GetRetorna"
  },
  {
    "type": "post",
    "url": "\"/\"",
    "title": "Acrescenta as informacoes de um novo paciente",
    "group": "POST",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Cadastro",
            "description": "<p>incluido com sucesso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "HTTP/1.1 201 Cadastro incluido com sucesso",
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
            "field": "HTTP/1.1",
            "description": "<p>500 error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estadosRoute.js",
    "groupTitle": "POST",
    "name": "Post"
  },
  {
    "type": "put",
    "url": "Atualiza",
    "title": "os dados do paciente de acordo com o numero do cartao SUS",
    "group": "PUT",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dados",
            "description": "<p>Dados atualizados com sucesso!.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP/1.1 201\nDados atualizados com sucesso!",
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
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/estadosRoute.js",
    "groupTitle": "PUT",
    "name": "PutAtualiza"
  }
] });
