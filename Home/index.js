const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 8080

function writer(data) {
    const d = JSON.stringify(data)
    fs.writeFileSync('./db.json', d,(err) => {
        if(err) throw err
        return d
    })
}

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
    res.status(201).json({
        status: "success",
        message: "Posted User",
        error: null,
        data:[
            user
        ]
    })
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