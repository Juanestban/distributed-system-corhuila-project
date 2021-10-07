const { Router } = require('express')
const { userController } = require('../controllers/UsersController')

const router = Router()

// get profile
router.get('/profile', (_, res) => {
  res
    .status(200)
    .json({
      status: 200,
      message: 'finished',
      username: 'juanestban',
      password: 'asdafgoh',
      rol: 'USER',
    })
    .end()
})

// get alls users
router.get('/', userController.findAll)

// get one user by id
router.get('/:id', userController.findById)

// create a new user
router.post('/', userController.create)

// update some user
router.put('/:id', userController.update)

// delete some user
router.delete('/:id', userController.delete)

const userRouter = router

module.exports = { userRouter }
