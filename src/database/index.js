const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/noderest', { useMongoose: true })
mongoose.Promise = global.Promise

module.exports = mongoose
