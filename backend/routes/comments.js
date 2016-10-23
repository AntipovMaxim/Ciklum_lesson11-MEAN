var router = require('express').Router();
var Comments = require('../models/comments')


router.post('/:id', function (req, res, next) {
        
         Comments.findOneAndUpdate({ 'imdbId': req.params.id },
    {
      $push: {
        comments: {
          comment: req.body.comment,
          author: req.body.author,
          rating: req.body.rating,
          date: Date.now()
        }
      }
    },

    { upsert: true, 'new': true },

    function(err, comment) {

      if(err) {

        return next(err);
      }

      res.json(comment.comments);

    });

	
})


router.get('/:id', function (req, res) {
	Comments.findOne({ 'imdbId': req.params.id }, 'comments', function(err, comments) {

      if(err) {

        return next(err);
      }

      res.json(comments);

    })
})


module.exports = router;
