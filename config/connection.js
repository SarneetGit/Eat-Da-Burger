var sql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = sql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = sql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "burger_db"
    })
}

connection.connect(function(err) {
    if(err) {
        console.log(`Error connecting: ${err.stack}`)
        return;
    }
    console.log(`Connected as id: ${connection.threadId}`)
});

module.exports = connection;