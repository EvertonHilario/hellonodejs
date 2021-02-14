//incorpora o modulo mysql
var mysql = require('mysql');
/*
Nota 1: não podemos fazer o exports da conexão, temos que atribui-la a uma
variável, para quando for usar tenha que executar a função. 
Isso é camado de wrapper
*/
var connMySql = function(){
	console.log("conexção estabelecida.");
	return mysql.createConnection({
		host 		: 'localhost',
		user 		: 'root',
		password 	: 'gremio',
		database 	: 'portal_noticias'
	});

}
//exporta a vri´svel com a função que conecta a base
module.exports = function () {

	//retorna conexão
	return connMySql;

}