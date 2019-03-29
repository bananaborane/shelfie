require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
// connects our server to the heroku database
// port 6666, for now
const c = require('./controller')
const PORT = 6666;

app.use(express.json());


massive(CONNECTION_STRING).then(db=>{
    app.set('db',db)
    console.log('Database was set, you may now try for requests')})
    .catch(err=>console.log(err))

app.get('/api/inventory', c.getInventory);

app.post('/api/product', c.postToInventory);

app.delete('/api/inventory/:id', c.delete);

app.put('/api/inventory/:id', c.update)








app.listen(SERVER_PORT, ()=>{console.log(`One six more than the obvious at ${SERVER_PORT}`)})


