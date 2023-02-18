const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 8080

const Data = fs.readFileSync('./Home/db.js', 'utf-8', (err, data) => {
    if(err) throw err
    return data
})

app.get('/', function(req, res){
    console.log('GET');
    res.send(Data)
})
app.post('/', function(req, res){
    console.log('POST');
    const postData = Data.push(req.body)
    fs.writeFileSync('./db.js', `${postData}`, (err, data) => {
        if(err) throw err
        return data
    })
    res.end(Data)
})
// app.delete('/', function(req, res){
//     console.log('DELET');
//     const id = req.params.id
//     delete Data[id]
//     fs.writeFileSync('./db.js', `${postData}`, (err, data) => {
//         if(err) throw err
//     })
//     res.end(Data)
// })


app.listen(PORT)