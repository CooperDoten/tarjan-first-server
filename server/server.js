//Import the express library
//from node_modules/express
const express = require('express');

//express exports function that makes a new app
const app = express();

// start up the server

app.listen(3000, function() {
    console.log(`I'm listening on 30000`);
});