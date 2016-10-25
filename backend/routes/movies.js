var router = require('express').Router();

var fetch = require('node-fetch');


router.get('/movies', function(req, res) {
       
       var url = `http://www.omdbapi.com/?s=${req.query.title}&y=${req.query.year}&type=${req.query.type}&plot=full&r=json&page=${req.query.page}`;
       fetch(url)
      .then((r) => {
        return r.json();
       }).then((movies) => {
        res.send(movies);
       })
       .catch(e => res.status(400).json({ success: false, error: e }));

    })


router.get('/:id', function(req, res) {
       console.log(req.body);
       var url = `http://www.omdbapi.com/?i=${req.params.id}&plot=short&r=json`;
       fetch(url)
      .then((r) => {
        return r.json();
       }).then((movie) => {
        res.send(movie);
       })
       .catch(e => res.status(400).json({ success: false, error: e }));

    })


module.exports = router;