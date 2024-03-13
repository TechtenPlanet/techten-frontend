import React from 'react'
import style from './PrimaryButton.module.css'
import { useNavigate } from 'react-router-dom'

const PrimaryButton = ({txt}) => {

  return (
    <>
    <button className={style.primaryBtn}> {txt} </button>
    </>
  )
}

export default PrimaryButton