import React from 'react'
import getRandomElemArray from '../utils/getRandomElemArray'

const BtnQuote = ({setQuote, phrases, setNumberBg }) => {

  const handleRandomPhrase = () => {
    setQuote(getRandomElemArray(phrases))
    setNumberBg(getRandomElemArray([1, 2, 3,]))
  }

  return (
    <button className='container__btn' onClick={handleRandomPhrase}>Cambia tu fortuna</button>
  )
}

export default BtnQuote