var connection = require('./connection.js')


var orm  = { 
    selectAll: function(tableName, cb) {
        var query = 'SELECT * FROM ??;';
        connection.query(query, [tableName], (err, data) => {
            if (err) throw err;
            cb(data)
        });
    },
    insertOne: function(tableName, burgerName, cb) {
        query = 'INSERT INTO ?? (burger_name, devoured) VALUES (?, false);'
        connection.query(query, [tableName, burgerName], (err, data) => {
            if (err) throw err;
            cb(data)
        })
    },
    updateOne: function(tableName, burgerName, cb) {
        query = 'UPDATE ?? SET devoured = true WHERE burger_name = ?;'
        connection.query(query, [tableName, burgerName], (err, data) => {
            if (err) throw err;
            cb(data)
        })
    }
}

module.exports = orm;
