const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 1111

app.get('/', function(req, res){
    console.log('GET');
    fs.readFileSync('')
})

app.listen(PORT)