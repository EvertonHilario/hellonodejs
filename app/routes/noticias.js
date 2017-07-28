//recupera o método que conecta ao banco
var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

	// configura a rota seção /noticias
	app.get('/noticias', function(req, res){

		// executa o método que conecta ao banco
		var connection = dbConnection();

		//metodo para executar query
		/* 
			o método query recebe duas coisas, a instrução sql e a função de callbak. 
			A função de callbbak neste caso espera dois parâmetros o erro e o resultado.
		*/
		connection.query('select * from noticias', function(error, result){

			//renderiza o html (noticias/noticias.ejs)
			// passa como parametro json o resultado da consulta
			// noticias = result
			res.render('noticias/noticias', {noticias : result});

		});

	});

};
