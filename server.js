const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

const cats = require('./cats');

const catMiddleware = require('./middlewares/middleware');

app.use(bodyParser.urlencoded({ extended: false }));

app.engine('hbs', handlebars({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    let name = 'Ivan';
    res.render('home', { name });
});

app.get('/cats', (req, res) => {

    res.render('cat', {cats: cats.getAll()});
})

app.post('/cats', (req, res) => {
    let name = req.body.cat;
    cats.add(name);
    res.redirect('/cats');
})

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