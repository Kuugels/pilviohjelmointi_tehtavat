const express = require('express');
const db = require('./dummydb.js');

const app = express();

app.get('/', (req, res) => {
    res.send("Jee hurraa toimii vuhuu on tosi kivaa juu");
});

app.get('/messages', (req, res) => {
    res.send(db.getAllMessages());
});

app.post('/message', (req, res) => {
    var message = {
        title: req.body.title,
        message: req.body.title,
        likes: 0
    };
   db.postMessage(message); 
});

app.get('/news', (req, res) => {
    res.send(db.getAllNews());
});

app.post('/post/:id', (req, res) => {
    res.send('Yes');
});

const PORT = process.env.PORT || 5000;
console.log('Started server on port ' + PORT);
app.listen(PORT);