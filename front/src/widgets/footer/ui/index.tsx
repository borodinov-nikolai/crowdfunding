import React from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {
  return (
    <footer className={styles.root} >
        <div className={[styles.inner, ' container'].join(' ')} >
        <Link href={'/'} >
              <div className={styles.logo}>
                <Image src={'/images/logo.png'} width={40} height={40} alt='logo' />
                <p>ITmergehub</p>
              </div>
            </Link>
            
        <div className={styles.info} >
          <div>@ ПОЧТА</div>
          <div>Made in Figma</div>
        </div>
        </div>
    </footer> 
  )
}

export default Footer