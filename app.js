// require da bibliotéca express
// return function
var express = require('express');

// executa a função contida na variável express
var app = express();

// configura a rota da home
app.get('/', function(req, res){

	// resposta em html
	// Obs. ver que diferente do node puro usa send invés de end
	res.send('<html><body>Home page</body></html>');
});

// configura a rota seção /tecnologia
app.get('/tecnologia', function(req, res){

	// resposta em html
	// Obs. ver que diferente do node puro usa send invés de end
	res.send('<html><body>Tecnologia page</body></html>');
});

// soobe e configura o servidor
// var porta int
// var callback function
app.listen(3000, function(){

	console.log("Server rodando com express");

});