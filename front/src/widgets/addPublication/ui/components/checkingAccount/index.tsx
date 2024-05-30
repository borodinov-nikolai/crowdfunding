'use client'
import React, { FC } from 'react'
import styles from './CheckingAccount.module.scss'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import { IProjectDto } from '@/src/entities/project'
import { Input  } from 'antd'

interface IProps {
    control: Control<IProjectDto, any>
    errors: FieldErrors<IProjectDto>
}

const CheckingAccount: FC<IProps> = ({control, errors}) => {
  return (
    <div className={styles.root} >
              <div className={styles.formItem} >
        <label htmlFor="checkingAccount">Расчетный счет</label>
        <Controller
        name={'checkingAccount'}
        control={control}
         rules={{required: 'Это поле обязательно'}}
        render={({field})=> 
         <div className={styles.InputHolder} >
          <Input size='large' id='checkingAccount' style={{width: '727px'}} {...field} placeholder=''  />
          {errors.checkingAccount && <p className={styles.error} >{errors.checkingAccount.message}</p> }
          </div> 
        }
        />
    </div>
              <div className={styles.formItem} >
        <label htmlFor="payeesBank">Банк получателя</label>
        <Controller
        name={'payeesBank'}
        control={control}
         rules={{required: 'Это поле обязательно'}}
        render={({field})=> 
         <div className={styles.InputHolder} >
        <Input size='large' id='payeesBank' style={{width: '727px'}} {...field} placeholder=''  />
        {errors.payeesBank && <p className={styles.error} >{errors.payeesBank.message}</p> }
         </div> 
        }
        />
    </div>
              <div className={styles.formItem} >
        <label htmlFor="korAccount">Кор. счет</label>
        <Controller
        name={'korAccount'}
        control={control}
         rules={{required: 'Это поле обязательно'}}
        render={({field})=> 
         <div className={styles.InputHolder} >
        <Input size='large' id='korAccount' style={{width: '727px'}} {...field} placeholder=''  />
        {errors.korAccount && <p className={styles.error} >{errors.korAccount.message}</p> }
         </div> 
        }
        />
    </div>
              <div className={styles.formItem} >
        <label htmlFor="bik">БИК</label>
        <Controller
        name={'bik'}
        control={control}
         rules={{required: 'Это поле обязательно'}}
        render={({field})=> 
         <div className={styles.InputHolder} >
         <Input size='large' id='bik' style={{width: '727px'}} {...field} placeholder=''  />
         {errors.bik && <p className={styles.error} >{errors.bik.message}</p> }
         </div> 
        }
        />
    </div>
              <div className={styles.formItem} >
        <label htmlFor="otherData">Прочие данные</label>
        <Controller
        name={'otherData'}
        control={control}
        render={({field})=> 
         <div className={styles.InputHolder} >
            <Input size='large' id='otherData' style={{width: '727px'}} {...field} placeholder=''  />
         </div> 
        }
        />
    </div>
    </div>
  )
}

export default CheckingAccount