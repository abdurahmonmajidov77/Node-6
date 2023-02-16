const express = require('express')
const app = express();
const PORT = 4545

app.get('/', function(req, res){
    console.log(`This server started on Port ${PORT}`);
    res.send('Hello World!')
});
app.post('/', function(req, res){
    console.log(req);
    res.send('POST')
});

app.listen(PORT)