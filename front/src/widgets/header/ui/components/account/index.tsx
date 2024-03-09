'use client';
import React, { useEffect, useState } from 'react'
import styles from './Account.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { RiCheckLine } from 'react-icons/ri';
import { useGetUserQuery } from '@/src/entities/user';


const Account = () => {
  const pathname = usePathname();
  const [isAuth, setIsAuth] = useState<boolean>()
  const {data, isLoading, isSuccess} = useGetUserQuery();

   useEffect(()=> {
  
    if(isLoading === false && isSuccess === true) {
      setIsAuth(true) 
    } else if(isLoading === false && isSuccess === false) {
      setIsAuth(false)
    }

   },[isLoading, isSuccess]) 


    
    return (
    <div className={styles.account} > 
    
    
     {isAuth === false && <Link   href={'#'} >
    <div className={styles.signIn} >
      <p>Войти</p>
      <RiCheckLine/>
    </div>
      </Link>}
  
  
  { (isAuth === false && !pathname.includes('/sign-up')) && (<Link href={'/sign-up'} >
    <div className={styles.signUp} >Регистрация</div>
  </Link>)} 

  {isAuth === true && <Link href={'/account'} >
       <div className={styles.profile} > <Image src={'/images/account.png'} width={42} height={42} alt='account image'/>
       <p className={styles.username} >{data?.login}</p></div>
     </Link>}
     

  
  </div>
  )

}

export default Account