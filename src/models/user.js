const mongoose = require('../database')
const bcrypt = require('bcrypt')

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

UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash

  next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User
