'use client'
import React from 'react'
import styles from './RegistrationForm.module.scss'
import TextInput from '@/src/shared/ui/textInput'
import Image from 'next/image'
import Button from '@/src/shared/ui/button'
import Checkbox from '@/src/shared/ui/checkbox'
import Link from 'next/link'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useRegistrationMutation } from '../api'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { usePathname, useRouter } from 'next/navigation'
import PasswordInput from '@/src/shared/ui/passwordInput'


type Inputs = {

  login: string,
  email: string,
  password: string,
  description: string
}

const Registration = () => {
  const [registration, result] = useRegistrationMutation()
  const pathname = usePathname();
  const { control, register, setError, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
      login: '',
      email: '',
      password: '',
      description: ''
    }
  });

  
  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    const role = pathname.split('/')[2].toUpperCase()
    const res = await registration({...data, role})

    if("error" in res){
      const error = res.error as FetchBaseQueryError
      const {message} = error.data as {message: string}
  
       if( message === "User with this email already exists"){
          setError('email', {
            type: 'manual',
            message: 'Пользователь с таким email уже существует'
          })
       }
      }

      if("data" in res) {
        localStorage.setItem('jwt', res.data.accessToken
        )
       window.location.href='/'
      }
 
    }


  return (

      <form className={styles.root} onSubmit={handleSubmit(onSubmit)}  action="">

            <div className={styles.form_item} >
              <label htmlFor='login' className={styles.label}>Введите Логин</label>
               <div className={styles.input} >
                 <input type="text" id='login' {...register('login', { required: "это поле обязательно",  minLength: { value: 4, message: 'длина должна быть не менее 4 символов' } })} />
                              {errors.login && <span className={styles.error} >{errors.login?.message}</span>}
               </div>
            </div>

            <div className={styles.form_item} >
              <label htmlFor='email' className={styles.label} >Введите Почту</label>
              <div className={styles.input} >
                <input type="text" id='email'  {...register('email', { required: "это поле обязательно", pattern: { value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, message: 'пожалуйста введите корректный email' } })}/>
                {errors.email && <span className={styles.error} >{errors.email?.message}</span>}
              </div>
            </div>

            <div className={styles.form_item} >
              <label htmlFor='password' className={styles.label}>Введите Пароль</label>
                <div className={styles.input} >
                  <input type='password' id='password' {...register('password', { required: "это поле обязательно", minLength: { value: 4, message: 'длина должна быть не менее 4 символов' }, maxLength: { value: 8, message: 'длина должна быть не более 8 символов' } })} />
                  {errors.password && <span className={styles.error} >{errors.password?.message}</span>}
                </div>
       
            </div>
            <div className={styles.form_item} >
              <label htmlFor='description' className={styles.label}>Напишите о себе </label>
                <div className={styles.input} >
                  <textarea placeholder='...' className={styles.textarea} id='description' {...register('description')} />
                  {errors.description && <span className={styles.error} >{errors.description?.message}</span>}
                </div>
       
            </div>
            <button className={styles.button} type='submit' >Отправить</button>

          </form>

   

  )
}

export default Registration