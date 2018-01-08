const express = require('express');
const app = express();

app.get(‘/‘, (req, res) => {
			res.send('sup')
			// res.render("hi");
})

app.listen( 3000, () => {
    console.log('listening')
})
