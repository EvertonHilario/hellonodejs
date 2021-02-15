module.exports = function(application){
	// configura a rota seção /formulario_inclusao_noticia
	application.get('/formulario_inclusao_noticia', function(req, res){
		res.render('admin/form_add_noticia');
	});

	// configura a rota seção /noticias/salvar
	application.post('/noticias/salvar', function(req, res){
		//obtem os dados do corpo da requisição post (necesário body-parser)
		var noticia = req.body;

		var connection = application.config.dbConnection();
		var noticiasDAO = new application.app.models.NoticiasDAO(connection);

		noticiasDAO.salvarNoticia(noticia, function(erro, result){
			res.redirect('/noticias');
		});
	});
};
