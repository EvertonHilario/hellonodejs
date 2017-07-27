// require da bibliotéca express
// return function
var express = require('express');

// executa a função contida na variável express
var app = express();

//apoonta o modulo ejs para a enginer de app/views
app.set('view engine', 'ejs');

//busca as views no diretório view
app.set('views', './app/views');

module.exports = app;