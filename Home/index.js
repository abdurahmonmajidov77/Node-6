const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 8080

function reader() {
    const data = fs.writeFileSync('./db.json', 'utf-8',(err, data) => {
        if(err) throw err
        return d
    })
    return JSON.parse(data)
}

function writer(data) {
    const d = JSON.stringify(data)
    fs.writeFileSync('./db.json', d,(err) => {
        if(err) throw err
        return d
    })
}

// const Data = fs.readFileSync('./Home/db.js', 'utf-8', (err, data) => {
//     if(err) throw err
//     return data
// })

app.get('/', function(req, res){
    console.log('GET');
    const data = reader()
    res.status(201).json({
        data
    })
})
app.post('/', function(req, res){
    console.log('POST');
    const data = reader()
    data.push()
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