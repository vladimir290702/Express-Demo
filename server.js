const express = require('express');
const app = express();

const catMiddleware = require('./middlewares/middleware');
const logger = require('./middlewares/logger');

app.use(logger);

const cats = [];

app.get('/', (req, res) => {
    res.send('Hello Express');
    res.sendFile('./views/home.html', {root: __dirname});
});

app.get('/download', (req, res) => {
    res.download('./views/home.html');
})

app.get('/cats/:catId?', catMiddleware, (req, res) => {
    /* if (!/\d+/.test(req.params.catId)) {
         return res.status(404).send(`You need to specify catId number`);
     } */

    res.send(`You created ${req.params.catId}`);
});

app.listen(5000, () => { console.log(`This server is running on port 5000`) });