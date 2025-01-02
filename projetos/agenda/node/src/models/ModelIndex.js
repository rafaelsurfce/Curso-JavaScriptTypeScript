const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    description: String
});

const modelIndex = mongoose.model('index', ModelSchema);


class Model {

}

module.exports = Model;