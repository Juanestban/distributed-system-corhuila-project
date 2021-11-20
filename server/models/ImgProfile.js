const { Schema, model } = require('mongoose')
const { baseUrl } = require('../config/baseUrl')

const ImgProfileSchema = Schema(
  {
    userId: Schema.Types.ObjectId,
    imgUrl: String,
    date: {
      type: String,
      default: Date.now,
    },
  },
  { timestamps: true }
)

ImgProfileSchema.methods.setImgUrl = function setImgUrl(rute) {
  this.imgUrl = `${baseUrl}/${rute}`
}

ImgProfileSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject.__v
  },
})

const ImgProfile = model('ImgProfile', ImgProfileSchema)

module.exports = { ImgProfile }
