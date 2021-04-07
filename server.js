const express = require('express');
const app = express();

const catMiddleware = require('./middlewares/middleware');

const cats = [];

/*app.get('/', (req, res) => {
    res.send('Hello Express');
});*/


app.get('/cats/:catId?', catMiddleware, (req, res) => {
    /* if (!/\d+/.test(req.params.catId)) {
         return res.status(404).send(`You need to specify catId number`);
     } */

    res.send(`You created ${req.params.catId}`);
});

app.get('/download', (req, res) => {
    res.download('./views/home.html');
})

app.listen(5000, () => { console.log(`This server is running on port 5000`) });