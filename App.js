const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors())

app.get('/apple', (req, res)=> {
    res.send("🍎")
})

app.get('/banana', (req, res)=> {
    res.send("🍌")
})

app.get('/watermelon', (req, res)=> {
    res.send("🍉")
})

app.get('*', (req, res)=> {
    res.send("NotFound")
})

app.listen(3001, ()=> {
    console.log("connected on server port 3001!!!");    
});

module.exports = app;