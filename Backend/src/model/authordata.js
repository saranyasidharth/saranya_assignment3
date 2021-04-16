const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster1.l7ovl.mongodb.net/libraryapp?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
    author2: String,
    genre2: String,
    works: String,
    image2: String
});

var Authordata = mongoose.model('authordata',AuthorSchema);
module.exports = Authordata;