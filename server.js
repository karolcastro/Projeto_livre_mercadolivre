//inicia o srvidor
const app = require("./src/app");
const port = process.env.PORT || 3001;

app.listen(port, function(){
    console.log(`app esta rodando na porta ${port}`)
})