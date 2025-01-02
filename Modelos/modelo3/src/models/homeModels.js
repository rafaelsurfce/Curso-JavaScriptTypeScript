const mongoose = require ('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: {type: String, required: true},  //como se fosse coluna em MSQL
}); //como se fosse a tabela em SQL

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;