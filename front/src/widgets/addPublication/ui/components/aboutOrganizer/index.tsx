'use client'
import React, { FC } from 'react'
import styles from './AboutOrganizer.module.scss'
import { Control, Controller } from 'react-hook-form'
import { IProjectDto } from '@/src/entities/project'
import { DatePicker, Input } from 'antd'

interface IProps {
    control: Control<IProjectDto, any>
}


const AboutOrganizer: FC<IProps> = ({control}) => {
  return (
    <div className={styles.root} >
       <div className={styles.formItem} >
        <label htmlFor="personType">Тип</label>
        <Controller
        name={'personType'}
        control={control}
        render={({field})=> 
        <Input size='large' id='personType' style={{width: '727px'}} {...field} placeholder='физическое лицо'  />
        }
        />
    </div>
       <div className={styles.formItem} >
        <label htmlFor="fullName">ФИО</label>
        <Controller
        name={'fullName'}
        control={control}
        render={({field})=> 
        <Input size='large' id='fullName' style={{width: '727px'}} {...field} placeholder='Иванов Иван Иванович'  />
        }
        />
    </div>
       <div className={styles.formItem} >
        <label htmlFor="town">Город</label>
        <Controller
        name={'town'}
        control={control}
        render={({field})=> 
        <Input size='large' id='town' style={{width: '727px'}} {...field} placeholder='город, поселок, село'  />
        }
        />
    </div>
       <div className={styles.formItem} >
        <label htmlFor="inn">ИНН</label>
        <Controller
        name={'inn'}
        control={control}
        render={({field})=> 
        <Input size='large' id='inn' style={{width: '727px'}} {...field} placeholder='должно содержать 10 или 12 цифр'  />
        }
        />
    </div>
       <div className={styles.formItem} >
        <label htmlFor="passport">Данные паспорта</label>
        <Controller
        name={'passport'}
        control={control}
        render={({field})=> 
        <Input size='large' id='passport' style={{width: '727px'}} {...field} placeholder='***********'  />
        }
        />
    </div>
       <div className={styles.formItem} >
        <label htmlFor="issuedBy">Кем выдан</label>
        <Controller
        name={'issuedBy'}
        control={control}
        render={({field})=> 
        <Input size='large' id='issuedBy' style={{width: '727px'}} {...field} placeholder =''  />
        }
        />
    </div>
       <div className={styles.formItem} >
        <label htmlFor="issuedDate">Дата выдачи</label>
        <Controller
        name={'issuedDate'}
        control={control}
        render={({field})=> 
        <DatePicker size='large' id='issuedDate' style={{width: '727px'}} {...field}  placeholder='01.01.2024' />
        }
        />
    </div>
       <div className={styles.formItem} >
        <label htmlFor="departmentCode">Код подразделения</label>
        <Controller
        name={'departmentCode'}
        control={control}
        render={({field})=> 
        <Input size='large' id='departmentCode' style={{width: '727px'}} {...field} placeholder='*** ***'  />
        }
        />
    </div>
       <div className={styles.formItem} >
        <label htmlFor="address">Адрес регистрации</label>
        <Controller
        name={'address'}
        control={control}
        render={({field})=> 
        <Input size='large' id='address' style={{width: '727px'}} {...field} placeholder='как в паспорте'  />
        }
        />
    </div>
    </div>
  )
}

export default AboutOrganizer