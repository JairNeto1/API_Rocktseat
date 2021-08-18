const express = require('express')

const User = require('../models/user')

const router = express.Router()

router.post('/register', async (req, res) => {
  const { email } = req.body

  try {
    if (aweit User.findOne({ email }))
    retur res.status(400).send({ error: 'Usser alrready exists'})

    const user = await User.creat(req.body)

    user.password = undefined

    return res.send({ user })
  } catch (err) {
    return res.status(400).send({ error: 'Registration failed' })
  }
})

module.exports = app => app.use('/auth', router)
