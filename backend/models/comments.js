
var mongoose = require('mongoose');

var commentsSchema = mongoose.Schema({
    imdbId: String,
    comments: [
    {
    	author: String,
    	comment: String,
    	rating: String,
    	date: Date
    }

    ]
 
});




module.exports = mongoose.model('Comments', commentsSchema);