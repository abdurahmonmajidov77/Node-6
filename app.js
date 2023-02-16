const express = require('express')
const app = express();

app.get('/', function(req, res){
    console.log(`This server started on Port ${PORT}`);
    res.send('Hello World!')
});

app.listen(4545)