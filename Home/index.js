const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 8080

const Data = fs.readFileSync('/db.js', 'utf-8', (err, data) => {
    if(err) throw err
    return data
})

app.get('/', function(req, res){
    console.log('GET');
    res.send(Data)
})
app.post('/', function(req, res){
    console.log('POST');
    Data.push(req.body)
})
// app.put('/', function(req, res){
//     console.log('GET');
//     res.send(Data)
// })
// app.get('/', function(req, res){
//     console.log('GET');
//     res.send(Data)
// })

app.listen(PORT)