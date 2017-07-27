module.exports = function(app){

	// configura a rota seção /noticias
	app.get('/noticias', function(req, res){

		//renderiza o html (noticias/noticias.ejs)
		res.render('noticias/noticias');

	});

};
