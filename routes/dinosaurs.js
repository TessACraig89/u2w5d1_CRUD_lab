//set up express
//set up router
//require dinosaurs array
//require bodyParser
const express        = require('express');
const app            = express();
const router         = express.Router();
const dinosaursArray = require('../models/dinosaurs_data.js');
const bodyParser     = require('body-parser')


const urlencodedParser = bodyParser.urlencoded({ extended: false });

//when routed to /dinosaurs look in dinosaurs/index.ejs to get and render dinosaursArray
router.get('/dinosaurs', function(req, res){
    res.render('dinosaurs/index', {dinosaursArray: dinosaursArray });
});

//when  routed to /dinosaurs
router.post('/dinosaurs', urlencodedParser, function(req, res) {
    dinosaursArray.push(req.body);
	  res.redirect('/dinosaurs');
})

//when routed to /dinosaurs/id
    //console.log get by id
    //for loop through dinosaursArray
        // if the dinosaursArray index's id is === the id in /dinosaurs/id
            // loop in dinosaurs/show.ejs and render dinosaursArray index
router.get('/dinosaurs/:id', function(req, res){
    console.log('getting by id')
    for (let i = 0; i < dinosaursArray.length; i++) {
		      if (dinosaursArray[i].id == req.params.id) {
	           res.render('dinosaurs/show', {dinosaur: dinosaursArray[i]});
		      }
	    }
});

//when routed to /dinosaurs/id
    // for loop through dinosaurs array
        // if dinosaurs array index's id === /dinosaurs/id
            //in the dinosaurs array start at the index and remove 1 element
    // redirect to /dinosaurs
router.delete('/dinosaurs/:id', function(req, res) {
    for (let i = 0; i < dinosaursArray.length; i++) {
		    if (dinosaursArray[i].id == req.params.id) {
			       dinosaursArray.splice(i, 1);
		    }
	  }
    res.redirect('/dinosaurs');
})

//export router
module.exports = router;
