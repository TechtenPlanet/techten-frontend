import React from 'react'
import style from './SecondaryButton.module.css'

const SecondaryButton = ({txt}) => {
  return (
    <>
    <button className={style.secondaryBtn}> {txt} </button>
    </>
  )
}

export default SecondaryButton