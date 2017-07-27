//incorpora o módulo de configuração do servidor
var app = require('./config/server');


// SETA O MODULO RESPONSÁVEL POR RENDERIZAR home
var rotaHome = require('./app/routes/home')(app);

// SETA O MODULO RESPONSÁVEL POR RENDERIZAR noticias
var rotaNoticias = require('./app/routes/noticias')(app);

// SETA O MODULO RESPONSÁVEL POR RENDERIZAR formulario_inclusao_noticia
var rotaFormInclusaoNoticias = require('./app/routes/formulario_inclusao_noticia')(app);


// soobe e configura o servidor
// argumento porta int
// argumento callback function
app.listen(3003, function(){

	console.log("Server funcionando");

});