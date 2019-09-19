var express = require('express');
var burger = require('../models/burgers.js')
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectStar(function(data) {
    console.log(data)
    var Obj = {
      burgers: data
    };
    console.log(`Line 11 controller` + Obj);
    res.render("index", Obj);
  });
});

router.post("/api/burgers", function(req, res) {
  burgerName = req.body.burgerName
  burger.insert(burgerName, function(result) {
    // Send back the ID of the new quote
    console.log(result)
    // res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
  var burgerName = ''
//   console.log("condition", condition);

  burger.update(burgerName, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
