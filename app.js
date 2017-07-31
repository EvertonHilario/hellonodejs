//incorpora o módulo de configuração do servidor
var app = require('./config/server');

// soobe e configura o servidor
// argumento porta int
// argumento callback function
app.listen(3001, function(){

	console.log("Server funcionando");

});