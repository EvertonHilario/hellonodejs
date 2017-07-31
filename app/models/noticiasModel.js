module.exports = function () {

	// função que lista as notícias
	// var connection = conexão com o banco
	// var callback = função que será executada apoós a consulta
	this.getNoticias = function(connection, callback){

		// realiza a consulta na base
		connection.query('select * from noticias', callback);
	}

	// função busca a informação de uma notícia específica
	// var connection = conexão com o banco
	// var callback = função que será executada apoós a consulta
	this.getNoticia = function(connection, callback){

		// realiza a consulta na base
		connection.query('select * from noticias WHERE id_noticia = 2', callback);
	}

	// exporta o módulo
	// esta instância possibilitará que seja executada as funções dentro do módulo
	return this;
}