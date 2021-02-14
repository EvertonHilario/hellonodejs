module.exports = function(app){
	// configura a rota seção /formulario_inclusao_noticia
	app.get('/formulario_inclusao_noticia', function(req, res){

		//renderiza o html (admin/form_add_noticia.ejs)
		res.render('admin/form_add_noticia');

	});

	app.post('/noticias/salvar', function(req, res){
		//obtem os dados do corpo da requisição post (necesário body-parser)
		var noticias = req.body;

		res.send(noticias);
	});
};
