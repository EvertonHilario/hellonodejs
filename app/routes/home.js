

module.exports = function(app){

	// configura a rota da home
	app.get('/', function(req, res){

		//renderiza o html (home/index.ejs)
		res.render('home/index');

	});

	// configura a rota da home
	app.get('/home', function(req, res){

		//renderiza o html (home/index.ejs)
		res.render('home/index');

	});

};
