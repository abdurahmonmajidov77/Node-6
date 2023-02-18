const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 8080
app.use(express.json())

function reader() {
    const data = fs.readFileSync('./Home/db.json', 'utf-8',(err, data) => {
        if(err) throw err
        return data
    })
    const d = JSON.parse(data)
    return d
}

function writer(data) {
    const d = JSON.stringify(data)
    fs.writeFileSync('./Home/db.json', d,(err) => {
        if(err) throw err
        return d
    })
}

app.get('/user', function(req, res){
    console.log('GET');
    const data = reader()
    res.status(201).json({
        data
    })
})
app.post('/user', function(req, res){
    console.log('POST');
    const data = reader()
    data.push(req.body)
    writer(data)
    res.status(201).json({
        data
    })
})
app.put('/user/:id', function(req, res){
    console.log('POST');
    const data = reader()
    data[req.params.id] = req.body
    writer(data)
    res.status(201).json({
        data
    })
})
app.delete('/user/:id', function(req, res){
    console.log('DELETE!');
    const data = reader()
    delete data[req.params.id]
    writer(data)
    res.status(201).json({
        data
    })
})

app.listen(PORT)