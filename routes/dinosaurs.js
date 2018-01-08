//require express
const express = require('express');
//creates a router function that uses express to route between files
const router  = express.Router();

const lessonsArray = require('../models/lessons');


router.get('/', function(req, res){
  res.send(lessonsArray);
});

router.get('/:id', function(req, res){
	for (let i = 0; i < lessonsArray.length; i++) {
		if (lessonsArray[i].id == req.params.id) {
	      res.send(lessonsArray[i]);
		}
	}
});

module.exports = router;
