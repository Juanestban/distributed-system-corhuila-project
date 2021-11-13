const { Router } = require('express')
const { upload } = require('../lib/storage')
const { ImgProfile } = require('../models/ImgProfile')
const router = Router()

// create image profile
router.post('/', upload.single('image'), async (req, res, next) => {
  try {
    const { file, ruteImage } = req

    if (file) {
      const { id, username } = req.decodedToken
      const imgProfile = ImgProfile({ idUser: id })
      imgProfile.setImgUrl(ruteImage)
      const result = await imgProfile.save()
      return res
        .status(200)
        .json({
          id: result.id,
          user: username,
          message: 'process finished',
          imgUrl: result.imgUrl,
        })
        .end()
    }

    return res
      .status(400)
      .json({ message: 'missing send file img', statusCode: 400 })
      .end()
  } catch (err) {
    next(err)
  }
})

// update image profile
router.put('/:id', (_, res) =>
  res.status(200).send('<h1>getting img, missing method</h1>').end()
)

// delete image profile
router.delete('/:id', (_, res) =>
  res.status(200).send('<h1>getting img, missing method</h1>').end()
)

const routerImages = router
module.exports = { routerImages }
