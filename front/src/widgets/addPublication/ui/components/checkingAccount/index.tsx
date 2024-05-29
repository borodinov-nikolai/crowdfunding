'use client'
import React, { FC } from 'react'
import styles from './CheckingAccount.module.scss'
import { Control, Controller } from 'react-hook-form'
import { IProjectDto } from '@/src/entities/project'
import { Input  } from 'antd'

interface IProps {
    control: Control<IProjectDto, any>
}

const CheckingAccount: FC<IProps> = ({control}) => {
  return (
    <div className={styles.root} >
              <div className={styles.formItem} >
        <label htmlFor="checkingAccount">Расчетный счет</label>
        <Controller
        name={'checkingAccount'}
        control={control}
        render={({field})=> 
        <Input size='large' id='checkingAccount' style={{width: '727px'}} {...field} placeholder=''  />
        }
        />
    </div>
              <div className={styles.formItem} >
        <label htmlFor="payeesBank">Банк получателя</label>
        <Controller
        name={'payeesBank'}
        control={control}
        render={({field})=> 
        <Input size='large' id='payeesBank' style={{width: '727px'}} {...field} placeholder=''  />
        }
        />
    </div>
              <div className={styles.formItem} >
        <label htmlFor="korAccount">Кор. счет</label>
        <Controller
        name={'korAccount'}
        control={control}
        render={({field})=> 
        <Input size='large' id='korAccount' style={{width: '727px'}} {...field} placeholder=''  />
        }
        />
    </div>
              <div className={styles.formItem} >
        <label htmlFor="bik">БИК</label>
        <Controller
        name={'bik'}
        control={control}
        render={({field})=> 
        <Input size='large' id='bik' style={{width: '727px'}} {...field} placeholder=''  />
        }
        />
    </div>
              <div className={styles.formItem} >
        <label htmlFor="otherData">Прочие данные</label>
        <Controller
        name={'otherData'}
        control={control}
        render={({field})=> 
        <Input size='large' id='otherData' style={{width: '727px'}} {...field} placeholder=''  />
        }
        />
    </div>
    </div>
  )
}

export default CheckingAccount