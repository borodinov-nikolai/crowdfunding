'use client'
import React from 'react'
import styles from './AccountMenu.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useGetUserQuery } from '@/src/entities/user'

const AccountMenu = () => {
  const {data} = useGetUserQuery()
  return (
    <div className={styles.root} >
      <div className={[styles.inner, ' container'].join(' ')} >
      <h1 className={styles.title} >Личный кабинет</h1>

      <div className={styles.content} >
        <Image className={styles.avatar_img}  src={'/images/avatar.png'} width={184} height={174} alt='avatar image'/>
        <div className={styles.username} >{data?.login}</div>
        <div className={styles.menu} >
          <Link href={'#'} >
            <div className={styles.menuItem} >
              <Image src={'/images/account_menu_icon1.png'} width={48} height={43} alt="account menu icon" />
                <p>Настройки</p>
            </div>
          </Link>
          <Link href={'#'} >
            <div className={styles.menuItem} >
              <Image src={'/images/account_menu_icon2.png'} width={48} height={43} alt="account menu icon" />
                <p>Изменить данные</p>
            </div>
          </Link>
          <Link href={'/account/publications'} >
            <div className={styles.menuItem} >
              <Image src={'/images/account_menu_icon3.png'} width={48} height={43} alt="account menu icon" />
                <p>Мои публикации</p>
            </div>
          </Link>
          <Link href={'#'} >
            <div className={styles.menuItem} >
              <Image src={'/images/account_menu_icon4.png'} width={48} height={43} alt="account menu icon" />
                <p>Кошелек?</p>
            </div>
          </Link>
        </div>
      </div>

      </div>
    </div>
  )
}

export default AccountMenu