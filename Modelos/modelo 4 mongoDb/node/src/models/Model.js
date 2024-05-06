const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    description: String
});

const modelHome = mongoose.model('Home', ModelSchema);


class Model {

}

module.exports = Model;