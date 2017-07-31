module.exports = function(app){

	// configura a rota seção /noticias
	app.get('/noticia', function(req, res){

		/*
		Nota 1: como o autoload está atribuida a app podemos fazer como se fosse um namespace
		o consign que possibilita isso
		*/
		// executa o método que conecta ao banco
		var connection = app.config.dbConnection();
		
		/*
		Nota 2: models está no autoload do consign
		*/
		// instancia noticiasModel
		var noticiasModel = app.app.models.noticiasModel;

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
