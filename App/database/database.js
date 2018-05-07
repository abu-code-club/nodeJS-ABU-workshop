
const mysql = require('mysql');
const connection = mysql.createPool({
    connectionLimit: 10,
    host: "us-cdbr-iron-east-05.cleardb.net",
    user: "b6d8bb19e89c34",
    password: 'df72d6bd',
    database: 'heroku_f3cfc495c35af64',

})
class SQLCommands {
    
    constructor(){}

    addTodo() { return "INSERT INTO todo (username, todo) VALUES (?, ?)"; }

    renderTODO() { return "SELECT * FROM todo T where username = ?"; }

    deleteTODO() { return "DELETE FROM todo where id=?"; }
}

module.exports.connection = connection;
module.exports.SQLCommands = SQLCommands;