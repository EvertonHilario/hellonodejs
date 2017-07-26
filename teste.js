//importa a bibilioteca http
var http = require('http');

//criar o servidor
//utiliza uma função como argumento
//obj req = a requisição
//obj res = resposta da requisição
var server = http.createServer( function (req, res) {

	//category recebe o atributo url do objjeto req
	var category = req.url;

	// realiza o condicionamento de Categorias
	// para cada categoria uma resposta diferente
	if(category == '/tecnologia'){

		//resposta (um html como exemplo)
		res.end('<html><body>Categoria = tecnlogia</body></html>');

	}else if(category == '/moda'){

		//resposta (um html como exemplo)
		res.end('<html><body>Categoria = moda</body></html>');

	}else if(category == '/beleza'){

		//resposta (um html como exemplo)
		res.end('<html><body>Categoria = tecnlogia</body></html>');

	}else{

		//resposta (um html como exemplo)
		res.end('<html><body>Página Inicial</body></html>');
	}


});

//aponta a porta que o servidor ficará escutando
server.listen(3000);