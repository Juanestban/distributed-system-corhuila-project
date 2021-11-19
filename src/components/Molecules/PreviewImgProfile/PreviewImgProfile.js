import { useState, useEffect, useContext } from 'react'
import { FiCamera } from 'react-icons/fi'
import { AuthContext } from '../../../contexts/AuthContext'
import { mockFun } from '../../../config/mockFun'
import { WrapperCamera, InputCamera } from './styles'

export const PreviewImgProfile = ({
  imgProfile = null,
  inputImgRef = null,
  handleChangeImg = mockFun,
}) => {
  const [image, setImage] = useState(null)
  const [isExistImg, setIsExistImg] = useState(false)
  const {
    userStorage: { imgsProfile = [] },
  } = useContext(AuthContext)

  const PreviewCamera = () => <FiCamera size={40} />

  useEffect(() => {
    imgsProfile?.length > 0 && setIsExistImg(true)

    if (imgProfile) {
      setIsExistImg(true)
      setImage(imgProfile)
    }
  }, [imgProfile, imgsProfile?.length])

  return (
    <WrapperCamera>
      <InputCamera ref={inputImgRef} type="file" onChange={handleChangeImg} />
      {isExistImg ? (
        <img src={image || imgsProfile[imgsProfile.length - 1].imgUrl} />
      ) : (
        <PreviewCamera />
      )}
    </WrapperCamera>
  )
}
