const express = require('express');

const app = express();

app.get('/', (req, res) => {
			res.send('sup')
			// res.render("hi");
})

// in order to serve static files from our server
app.use(express.static('public'));

app.listen( 3000, () => {
    console.log('listening')
})
