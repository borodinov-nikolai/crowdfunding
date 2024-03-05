import React from 'react'
import styles from './Questions.module.scss'
import Image from 'next/image'
const Questions = () => {
  return (
    <div className={styles.root} >
        <Image src={'/images/FAQ_img.png'} width={67} height={67} alt='FAQ image' />
    </div>
  )
}

export default Questions