// require da bibliotéca express
// return function
var express = require('express');

// executa a função contida na variável express
var app = express();

//apoonta o modulo ejs para a enginer de view
app.set('view engine', 'ejs');

// configura a rota da home
app.get('/', function(req, res){

	//renderiza o html (home/index.ejs)
	res.render('home/index');

});

// configura a rota seção /tecnologia
app.get('/formulario_inclusao_noticia', function(req, res){

	//renderiza o html (secao/tecnologia.ejs)
	res.render('admin/form_add_noticia');

});

// configura a rota seção /tecnologia
app.get('/noticias', function(req, res){

	//renderiza o html (secao/tecnologia.ejs)
	res.render('noticias/noticias');

});

// soobe e configura o servidor
// argumento porta int
// argumento callback function
app.listen(3000, function(){

	console.log("Server rodando com express");

});