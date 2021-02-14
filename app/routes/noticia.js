module.exports = function(application){

	// configura a rota seção /noticias
	application.get('/noticia', function(req, res){

		// executa o método que conecta ao banco
		var connection = application.config.dbConnection();
		
		// instancia noticiasModel
		var noticiasModel = application.app.models.noticiasModel;

		// executa a função getNoticias que está na model noticiaModel
		// var connection = conexão com o banco
		// var callback = função que será executada apoós a consulta
		// obs ref callback: A função de callbbak neste caso espera dois parâmetros o erro e o resultado.
		noticiasModel.getNoticia(connection, function(error, result){

			//renderiza o html (noticias/noticias.ejs)
			// passa como parametro json o resultado da consulta
			// noticias = result
			res.render('noticias/noticia', {noticia : result});

		})

	});

};
