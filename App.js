const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.port || 3001;
const pg = require('pg');

const client = new pg.Pool({
    user: "postgres",
    host: "localhost",
    password: "blackmist10",
    port: "5432",
    database: "postgres",
});

app.use(cors())

app.get('/fruit/:kind', async(req, res)=> {
    const ddd = req.params.kind;
    
    await client.connect();
    const result = await client.query(
        "select * from public.fruit_world where fruit_id = $1", 
        [ddd]
    );
    res.send(result.rows[0].fruit_img);
});

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
    console.log("connected on server port" + port);    
});

module.exports = app;