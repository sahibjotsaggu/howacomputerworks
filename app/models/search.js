var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SearchSchema = new Schema({
	topic_name: {type: String, required: true, index: {unique: true}},
	link: {type: String, required: true},
});

module.exports = mongoose.model('Search', SearchSchema);