//Import the express library
//from node_modules/express
const express = require('express');

//express exports function that makes a new app
const app = express();
//for serving static files
app.use(express.static('server/public'));
//when I get a request at '/hello'
//send back a response of 'Hello world!'
app.get('/hello', function(req, res) {
    res.send(`<h1>Hello World!</h1>`);
});

// start up the server

app.listen(3000, function() {
    console.log(`I'm listening on 30000`);
});