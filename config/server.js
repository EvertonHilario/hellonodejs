// require da bibliotéca express
// return function
var express = require('express');

// require da bibliotéca consign
// return function
var consign = require('consign');

// executa a função contida na variável express
var app = express();

//apoonta o modulo ejs para a enginer de app/views
app.set('view engine', 'ejs');

//busca as views no diretório view
app.set('views', './app/views');

//neste exemplo é feito o autoloader de modulos
// executa mtodo consign()
// realiza o include do diretório com a função include()
// into() passa parêmetros global dos módulos
// then() após o include é possivel add outros módulos a aprtir deste método
// Nota 1: não sdicionar o modulo config/server.js pois entrará em um loop de iniciação de servidor
// Nota 2: no consign é necessário colocar a extenção do arquivo, se não, o metotodo interpretará como diretório
consign()
	.include('./app/routes')
	.then('./config/dbConnection.js')
	.then('./app/models')
	.into(app);

module.exports = app;