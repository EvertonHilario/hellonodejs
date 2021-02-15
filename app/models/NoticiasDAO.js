
/**
 * 
 * @param {Object} connection 
 * 
 * classe responsável pela entidade noticias
 */

function NoticiasDAO(connection){
	this._connection = connection;
}

/**
 * 
 * @param {Function} callback 
 * 
 * lista as notícias
 */

NoticiasDAO.prototype.getNoticias = function(callback){
	this._connection.query('select * from noticias', callback);
}

/**
 * 
 * @param {Number} id 
 * @param {Function} callback 
 * 
 * obtem dados de uma notícia a partr do id
 */
NoticiasDAO.prototype.getNoticia = function(id, callback){
	this._connection.query('select * from noticias WHERE id_noticia = ? ', id, callback);
}

/**
 * 
 * @param {JSON} noticia 
 * @param {Function} callback 
 * 
 * insere uma notícia
 */
NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
	this._connection.query('INSERT INTO noticias set ? ', noticia, callback);
}

module.exports = function () {
	return NoticiasDAO;
}