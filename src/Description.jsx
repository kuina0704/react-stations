import './App.css'
import { useState } from 'react'
import DogImage from './DogImage';

export const Description = () => {

  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/terrier-dandie/n02096437_643.jpg');
  
  const changeDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random', {method: 'GET'})
    .then(res => res.json())
    .then(data => {setDogUrl(data.message)})
    .catch(() => alert("error"));
  }

  return (
    <main className='container'>
      <p>犬の画像を表示するサイトです</p>
      <div className='dog-image-box'>
        <DogImage imageUrl = {dogUrl} />
        <button onClick={changeDog} className='button'>更新</button>
      </div>
    </main>
  )
}

export default Description

