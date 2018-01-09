//set up express
const express    = require('express');
const app        = express();

//require routes file
const dinosaurs  = require('./routes/dinosaurs');

//require bodyParser
const bodyParser = require('body-parser');

//re
const path       = require('path');
const morgan     = require('morgan');


app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/', dinosaurs);

//tell the app where to look for templates
app.set('views', path.join(__dirname, 'views'));

//tell the app what kind of template to expect
app.set('view engine', 'ejs');

// set up listen
app.listen(3000, () => {
	console.log("listening");
});
