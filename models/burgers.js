var orm = require('../config/orm')

// selectAll()
// insertOne()
// updateOne()

var burger = {
    selectStar: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },    
    // The variables cols and vals are arrays.
    insert: function(burgerName, cb) {
      orm.insertOne("burgers", burgerName, function(res) {
        cb(res);
      });
    },
    update: function(burgerID, cb) {
      orm.updateOne("burgers", burgerID, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (burgersController.js).
  module.exports = burger;