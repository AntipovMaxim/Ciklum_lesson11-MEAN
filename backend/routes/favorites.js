var express = require('express');
var router = express.Router();
var User = require('../models/user.js');


router.get('/', function(req, res, next) {

  User.findById(req.user._id, function (err, user) {

    if (err) {

      return next(err);
    }

    res.json(user.favorites);
  });

});



router.post('/', function(req, res, next) {
    
  User.findOneAndUpdate({_id: req.user._id},
          
    {
      $push: {

        favorites: req.body.movie
      }
    },

    { upsert: true, 'new': true },

    function (err, user) {

      if (err) {

        return next(err);
      }

      res.json(user.favorites);
    }
  );
});



router.delete('/:imdbID', function(req, res, next) {

  User.findOneAndUpdate({ _id: req.user._id },

    {
      $pull: {

        favorites: {

          imdbID: req.params.imdbID
        }
      }
    },

    { 'new': true },

    function(err, user) {

      if (err) {

        return next(err);
      }

      res.json(user.favorites);
    }
  )
});


module.exports = router;