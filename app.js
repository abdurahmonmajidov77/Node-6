const express = require('express')
const app = express();
const PORT = 4545
const user = require('./user')
app.use(express.json())

// app.get('/', function(req, res){
//     console.log(`This server started on Port ${PORT}`);
//     res.send('Hello World!')
// });
// app.post('/', function(req, res){
//     console.log(req.body);
//     res.send('POST')
// });
app.post('/', function(req, res){
    const newUser = req.body
    user.push(newUser)
    res.status(201).json({
        status: "success",
        message: "Added New User",
        error: null,
        data:[
            user
        ]
    })
});

app.listen(PORT)