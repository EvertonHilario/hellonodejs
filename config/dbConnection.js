//incorpora o modulo mysql
var mysql = require('mysql');

//exporta a conexão com o database
module.exports = function () {

	//realiza a conexão com a base
	return mysql.createConnection({
		host 		: 'localhost',
		user 		: 'root',
		password 	: '',
		database 	: 'portal_noticias'
	});

}