const catsData = require('./cats.json');
const cats = catsData;
const fs = require('fs')

function add(name) {
    cats.push(name);
    fs.writeFile('./cats.json', JSON.stringify(cats), (err, data) => {
        if (err) {
            return err;
        }

        console.log('success');
    })
}

function getAll() {
    return cats.slice();
}

module.exports = {
    add, getAll
}