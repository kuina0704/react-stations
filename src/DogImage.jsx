import './App.css'

export const DogImage = (props) => {
  const { imageUrl } = props;
  return (
    <img src={imageUrl} alt="犬の画像" className='dog-image'/>
  )
}

export default DogImage