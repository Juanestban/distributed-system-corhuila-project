const { request } = require('express')
const bcrypt = require('bcrypt')
const { User } = require('../models/User')

const handlePassCrypt = async (req, res, next) => {
  try {
    const { body, method } = req
    const { username, password } = body

    if (!password) return next()

    if (method === 'POST') {
      const userValidateUsername = await User.findOne({ username })
      const message = `this username already exist`

      if (userValidateUsername)
        return res.status(409).json({ error: 409, message }).end()
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    request.passwordHash = passwordHash

    return next()
  } catch (e) {
    return res
      .status(400)
      .json({ message: 'the user is invalid format', track: e })
      .end()
  }
}

module.exports = { handlePassCrypt }
