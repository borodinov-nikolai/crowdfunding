'use client'
import React, { FC } from 'react'
import styles from './Description.module.scss'
import { Control, Controller } from 'react-hook-form'
import { DatePicker, Input, InputNumber } from 'antd'
import { IProjectDto } from '@/src/entities/project'
import TextArea from 'antd/es/input/TextArea'


interface IProps {
    control: Control<IProjectDto, any>
}

const Description: FC<IProps> = ({control}) => {
  return (
    <div className={styles.root} >
    <div className={styles.formItem} >
        <label htmlFor="title">Название проекта</label>
        <Controller
        name={'title'}
        control={control}
        render={({field})=> 
        <Input size='large' id='title' style={{width: '727px'}} {...field} placeholder='название'  />
        }
        />
    </div>
    <div className={styles.formItem} >
        <label htmlFor="target">Финансовая цель</label>
        <Controller
        name={'target'}
        control={control}
        render={({field})=> 
        <InputNumber controls={false} size='large' id='target' placeholder='0'  style={{width: '727px'}} {...field}  />
        }
        />
    </div>
    <div className={styles.formItem} >
        <label htmlFor="finishDate">Дата завершения</label>
        <Controller
        name={'finishDate'}
        control={control}
        render={({field})=> 
        <DatePicker size='large' id='finishDate' style={{width: '727px'}} {...field} placeholder='время не задано' />
        }
        />
    </div>
    <div className={styles.formItem} >
        <label htmlFor="description">О проекте</label>
        <Controller
        name={'description'}
        control={control}
        render={({field})=> 
        <TextArea id='description' rows={7} style={{width: '727px'}} {...field} placeholder='детально о проекте...' />
        }
        />
    </div>
    </div>
  )
}

export default Description