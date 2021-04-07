function middleware(req, res, next) {
    console.log('Hi from MiddleWare');

    if (req.params.catId) {
        next();

    }

    res.status(403).send('You need to specify your cat id');
}

module.exports = middleware;