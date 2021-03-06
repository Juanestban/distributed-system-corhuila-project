const jwt = require('jsonwebtoken')
const PrimaryController = require('./PrimaryController')
const { User } = require('../models/User')
const { ImgProfile } = require('../models/ImgProfile')

class UsersController extends PrimaryController {
  constructor() {
    super(User)
  }

  create = async (req, res, next) => {
    try {
      const { body, passwordHash } = req
      const { username, fullname, rol } = body
      const { JWT_PASSWORD } = process.env

      const user = new User({
        username,
        fullname,
        rol,
        passwordHash,
      })

      const savedUser = await user.save()
      const userForToken = {
        id: savedUser._id,
        username: savedUser.username,
      }
      const token = jwt.sign(userForToken, JWT_PASSWORD)
      return res
        .status(201)
        .json({ ...userForToken, token })
        .end()
    } catch (e) {
      next(e)
    }
  }

  update = async (req, res, next) => {
    try {
      const { body, passwordHash, params } = req
      const { id } = params
      const { username, fullname, rol } = body
      const user = {
        username,
        passwordHash,
        fullname,
        rol,
      }

      const updatedUser = await User.findByIdAndUpdate(id, user, {
        new: true,
      })
      const userForSend = {
        id: updatedUser._id,
        fullname: updatedUser.fullname,
        username: updatedUser.username,
        rol: updatedUser.rol,
      }

      if (updatedUser._id)
        return res
          .status(200)
          .json({ ...userForSend })
          .end()

      return res.status(404).json({ message: "this id hasn't exist" }).end()
    } catch (e) {
      next(e)
    }
  }

  getProfile = async (req, res, next) => {
    try {
      const { decodedToken } = req
      const { id: userId } = decodedToken
      const userProfile = await User.findById(userId)

      if (userProfile) {
        const queryImg = await ImgProfile.find({ userId })
        const user = {
          id: userProfile._id,
          username: userProfile.username,
          fullname: userProfile.fullname,
          rol: userProfile.rol,
        }
        return res
          .status(200)
          .json({ ...user, imgsProfile: queryImg })
          .end()
      }

      return res.status(404).json({ message: "this id hasn't exist" }).end()
    } catch (e) {
      next(e)
    }
  }
}

const userController = new UsersController()

module.exports = { userController }
