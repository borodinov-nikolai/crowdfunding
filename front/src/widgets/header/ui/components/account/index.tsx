'use client';
import React from 'react'
import styles from './Account.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { RiCheckLine } from 'react-icons/ri';
import { useGetUserQuery } from '@/src/entities/user';


const Account = () => {
  const pathname = usePathname();
  const {data, isLoading, isSuccess} = useGetUserQuery();



    
    return (
    <div className={styles.account} > 
    
    
     {(!isLoading && !isSuccess) && <Link   href={'#'} >
    <div className={styles.signIn} >
      <p>Войти</p>
      <RiCheckLine/>
    </div>
      </Link>}
  
  
  { (!isLoading && !isSuccess && !pathname.includes('/sign-up')) && (<Link href={'/sign-up'} >
    <div className={styles.signUp} >Регистрация</div>
  </Link>)}

  {(!isLoading && isSuccess) && <Link  href={'/account'} >
       <div> <Image src={'/images/account.png'} width={42} height={42} alt='account image'/>
       <p>{data?.login}</p></div>
     </Link>}
     

  
  </div>
  )

}

export default Account