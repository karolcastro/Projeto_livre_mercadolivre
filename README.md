## API Projeto Final Backend Mercadolivre

### Introdução

O Brasil está a frente de 30 países com mais casos de dengue reportados 1,5 milhão de casos. Globalmente é estimado que o custo com a Dengue é de US$ 8 Bilhões*

### O Projeto

Consiste na contrução de uma API que auxilia o acesso as informações a saúde,  resolve a deficiencia do sistema DATASUS por meio de uma plataforma onde as unidades Basicas de Saúde conseguem realizar o cadastro dos pacientes com dengue para ajudar a fomentar a pesquisa com mais dados, auxiliando a analise dessas informações no combate e possiveis solucoes de intervenção pública e privada na dengue.
 </br>
 
### Rotas 

GET /estados - Retorna todos os estados do banco de dados </br>
GET /:genero - Busca as informações por gênero </br>
GET /:estado - Retorna todos os pacientes do estado solicitado </br>
DELETE /:cartaoSus - Deletar a informacao de um paciente de acordo com o numero do cartao SUS </br>
POST /  - Acrescenta as informacoes de um novo paciente </br>
PUT /:cartaoSus - Atualiza os dados do paciente de acordo com o numero do cartao SUS </br>


### Conceitos Aplicados
*JavaScript
*NodeJS
*API REST
*MongoDB - Atlas
*Heroku
*Apidoc
