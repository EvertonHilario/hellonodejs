module.exports = function(application){

	// configura a rota seção /noticias
	application.get('/noticias', function(req, res){
		var connection = application.config.dbConnection();
		var noticiasDAO = new application.app.models.NoticiasDAO(connection);

		noticiasDAO.getNoticias(function(error, result){
			res.render('noticias/noticias', {noticias : result});
		})
	});

};
