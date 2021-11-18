const { request } = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const { MONTH_TRANSFORM } = require('../config/months')

const fileTypes = /jpe?g|png|gif/
const filenameType = /\.(jpe?g|png|gif|svg|webm|ico)/

const handleExtensionsFiles = ({ req, file }) => {
  const regexDate = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/g
  const [, extension] = file.mimetype.split('/')
  const [date, time] = new Date().toISOString().split('T')
  const [originalname] = file.originalname.split(filenameType)
  const { username } = req.decodedToken

  fs.mkdir(
    path.join(__dirname, `../storage/images/${username}`),
    { recursive: true },
    (err) => {
      if (err) return console.error(err)
    }
  )

  return { regexDate, originalname, username, extension, date, time }
}

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const { username } = handleExtensionsFiles({ req, file })
    const rutePath = `server/storage/images/${username}`

    cb(null, `./${rutePath}`)
  },
  filename: (req, file, cb) => {
    const { date, time, ...anothers } = handleExtensionsFiles({ req, file })
    const { username, regexDate, originalname, extension } = anothers
    const [, year, month, day] = regexDate.exec(date)
    const monthTransformed = MONTH_TRANSFORM[month]
    const dateToString = `${day}-${monthTransformed}-${year}`
    const filename = `${originalname}__${dateToString}__${time}.${extension}`

    request.ruteImage = `storage/images/${username}/${filename}`

    cb(null, filename)
  },
})

const fileFilter = (_, file, cb) => {
  const mimetype = fileTypes.test(file.mimetype)
  const extension = fileTypes.test(path.extname(file.originalname))

  if (mimetype && extension) return cb(null, true)

  cb(
    'Error: this file should be a image valid, types images accepted => [jpeg - jpg - png - gif]'
  )
}

const upload = multer({ storage, limits: { fieldSize: 10000000 }, fileFilter })

module.exports = { upload }
