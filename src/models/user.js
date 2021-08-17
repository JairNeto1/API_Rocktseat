const mongoose = require('../database')

const UserSchema = new mongoose.Schema({
  nome: {
    type: 'string',
    requeired: true
  },
  email: {
    type: 'string',
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: 'string',
    requeired: true,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User
