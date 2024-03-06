'use client';
import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
// import Account from './components/account';
const Account = dynamic(() => import('./components/account'), { ssr: false })


const Header = () => {
  const pathname = usePathname();




  return (
    <header className={styles.root} >
        <div className={[styles.inner, ' container'].join(' ')} >
   
           <Link href={'/'} >
              <div className={styles.logo}>
                <Image src={'/images/logo.png'} width={40} height={40} alt='logo' />
                <p>ITmergehub</p>
              </div>
            </Link>

            <div className={styles.navigation} >
              <ul  className={styles.navigationList} >
              <Link href={'/'} ><li className={[styles.navigationItem, pathname === '/' && styles.navigationItem__active].filter(Boolean).join(' ')} >О Нас</li></Link>
              <Link href={'/projects'} ><li className={[styles.navigationItem, pathname === '/projects' && styles.navigationItem__active].filter(Boolean).join(' ')} >Проекты</li></Link>
              <Link href={'#'} ><li className={[styles.navigationItem, pathname === '/contacts' && styles.navigationItem__active].filter(Boolean).join(' ')} >Контакты</li></Link>
              </ul>
            </div>

        

           <div className={styles.accountHolder} ><Account/></div>

           
     
        </div>
        </header>
  )
}

export default Header