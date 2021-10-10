const { Router } = require('express')
const { userController } = require('../controllers/UsersController')
const { handlePassCrypt } = require('../lib/handlePlassCrypt')

const router = Router()

// get alls users
router.get('/', userController.findAll)

// get one user by id
router.get('/:id', userController.findById)

// create a new user
router.post('/', handlePassCrypt, userController.create)

// update some user
router.put('/:id', handlePassCrypt, userController.update)

// delete some user
router.delete('/:id', userController.delete)

const userRouter = router

module.exports = { userRouter }
