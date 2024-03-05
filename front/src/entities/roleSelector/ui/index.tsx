import React from 'react'
import styles from './RoleSelector.module.scss'
import Image from 'next/image'
import Link from 'next/link'


const RoleSelector = () => {
  return (
    <div className={styles.root} >
    <div className={[styles.inner, ' container'].join(' ')} >
        <h1 className={styles.title} >Регистрация</h1>
        <div className={styles.window} >
            <div className={styles.window_backLayer} ></div>
            <div className={styles.window_frontLayer} >
                <h2 className={styles.window_title} >Создать аккаунт для</h2>
                <div className={styles.window_buttons} >
                    <Link href={'/sign-up/customer'} ><button >Заказчика</button></Link>
                    <Link href={'/sign-up/company'} ><button >Компании</button></Link>
                </div>
            </div>
        </div>
    </div>
    <Image className={styles.imgTop} src={'/images/registration_top_img.png'} width={384} height={349} alt=' registration top image' />
    <Image className={styles.imgBottom} src={'/images/registration_bottom_img.png'} width={384} height={349} alt=' registration bottom image' />
</div>
  )
}

export default RoleSelector