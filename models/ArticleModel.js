var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ArticleSchema = new Schema({
	'title' : String,
	'link' : String,
	'note' : {
	 	type: Schema.Types.ObjectId,
	 	ref: '{ref}'
	}
});

module.exports = mongoose.model('Article', ArticleSchema);
