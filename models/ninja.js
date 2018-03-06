const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ninjaSchema = new Schema({
    name: String
});

const Ninja = mongoose.model('ninja', ninjaSchema);

module.exports = Ninja;     