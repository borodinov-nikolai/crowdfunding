'use client'
import React, { useState } from 'react'
import styles from './AddPublication.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import Description from '../components/description'
import { IProjectDto, usePostProjectMutation } from '@/src/entities/project'
import AboutOrganizer from '../components/aboutOrganizer'
import CheckingAccount from '../components/checkingAccount'
import { Checkbox } from 'antd'
import Link from 'next/link'
import { useGetUserQuery } from '@/src/entities/user'
import { useRouter } from 'next/navigation'






export const AddPublication = () => {
  const [confirmed, setConfirmed] = useState<boolean>(false)
  const [showError, setShowError] = useState<boolean>(false)
  const router = useRouter()
  const user = useGetUserQuery()
  const [postProject] = usePostProjectMutation()
  const {control, watch, handleSubmit, formState: {errors}} = useForm<IProjectDto>({
    defaultValues: {
      title: '',
      target: undefined,
      finishDate: undefined,
      description: '',
      personType: 'Физическое лицо',
      fullName: '',
      town: '',
      inn: undefined,
      passport: '',
      issuedBy: '',
      issuedDate: undefined,
      departmentCode: '',
      address: '',
      checkingAccount: '',
      payeesBank: '',
      korAccount: '',
      bik: '',
      otherData: '',
    }
  })


  const onSubmit: SubmitHandler<IProjectDto> = (data)=> {
    
    if(user?.data?.id && confirmed ) {
      postProject({...data, user: user?.data?.id})
      router.push('/account/publications')
    } 

    if(!confirmed) {
      setShowError(true)
    }
  }

  const confirmation = (value: boolean)=> {
       if(value) {
        setShowError(false)
       }
       setConfirmed(value)
  } 

 

  return (
    <div className={styles.root} >
        <div className='container' >

         <form onSubmit={handleSubmit(onSubmit)} className={styles.form} action="">
            <h2 className={styles.title} >Добавить проект</h2>
            <div className={styles.formComponent} ><Description errors={errors} control={control} /></div>
            <h2 className={styles.title} >Об организаторе</h2>
            <div className={styles.formComponent} ><AboutOrganizer errors={errors} control={control} /></div>
            <h2 className={styles.title} >Расчетный счет</h2>
            <div className={styles.formComponent} ><CheckingAccount errors={errors} control={control} /> </div>
            <div className={styles.personalData} >  <Checkbox checked={confirmed} onChange={(e)=>confirmation(e.target.checked)} id='politics' /> <p>Я согласен на <Link href='#' >обработку персональных данных</Link></p> </div>
            {showError && <p className={styles.error} > Пожалуйста, подтвердите согласие на обработку данных </p>}
            <div  className={styles.submitBtn} ><button type='submit' >Сохранить</button></div>
         </form>
        </div>
        </div>
  )
}
