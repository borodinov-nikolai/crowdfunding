import React from 'react'
import styles from './Registration.module.scss'
import Image from 'next/image'

const Registration = () => {
  return (
    <div className={styles.root} >
        <div className={[styles.inner, ' container'].join(' ')} >
            <div className={styles.form} >
                <h1 className={styles.title} >Регистрация</h1>
            </div>
            <div className={styles.imageHolder} >
                <div className={styles.image}>
                  <Image className={styles.boy_img} src={'/images/registration_img.png'} width={290} height={297} alt='boy banner image' />
                  <Image className={styles.ellipse_front_img} src={'/images/ellipse_front_img.png'} width={705} height={388} alt='ellipse image' />
                  <Image className={styles.ellipse_back_img} src={'/images/ellipse_back_img.png'} width={785} height={394} alt='ellipse image' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registration