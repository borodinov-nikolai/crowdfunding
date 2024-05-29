'use client'
import React from 'react'
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
  const router = useRouter()
  const user = useGetUserQuery()
  const [postProject] = usePostProjectMutation()
  const {control, watch, handleSubmit} = useForm<IProjectDto>({
    defaultValues: {
      title: '',
      target: undefined,
      finishDate: undefined,
      description: '',
      personType: '',
      fullName: '',
      town: '',
      inn: '',
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
    if(user?.data?.id) {
      postProject({...data, user: user?.data?.id})
      router.push('/account/publications')
    }
  }

  console.log(watch('target'))

  return (
    <div className={styles.root} >
        <div className='container' >

         <form onSubmit={handleSubmit(onSubmit)} className={styles.form} action="">
            <h2 className={styles.title} >Добавить проект</h2>
            <div className={styles.formComponent} ><Description control={control} /></div>
            <h2 className={styles.title} >Об организаторе</h2>
            <div className={styles.formComponent} ><AboutOrganizer control={control} /></div>
            <h2 className={styles.title} >Расчетный счет</h2>
            <div className={styles.formComponent} ><CheckingAccount control={control} /> </div>
            <div className={styles.personalData} >  <Checkbox id='politics' /> <p>Я согласен на <Link href='#' >обработку персональных данных</Link></p> </div>
            <div  className={styles.submitBtn} ><button type='submit' >Сохраниить</button></div>
         </form>
        </div>
        </div>
  )
}
