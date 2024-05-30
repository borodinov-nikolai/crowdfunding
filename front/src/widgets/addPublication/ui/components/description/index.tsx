'use client'
import React, { FC } from 'react'
import styles from './Description.module.scss'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import { DatePicker, Divider, Input, InputNumber } from 'antd'
import { IProjectDto } from '@/src/entities/project'
import TextArea from 'antd/es/input/TextArea'


interface IProps {
    control: Control<IProjectDto, any>
    errors: FieldErrors<IProjectDto>
}

const Description: FC<IProps> = ({control, errors}) => {
  return (
    <div className={styles.root} >
    <div className={styles.formItem} >
        <label htmlFor="title">Название проекта</label>
        <Controller
        name={'title'}
        control={control}
        rules={{required: 'Это поле обязательно'}}
        render={({field})=> 
         <div className={styles.inputHolder} > <Input size='large' id='title' style={{width: '727px'}} {...field} placeholder='название'  />
              {errors.title && <p className={styles.error} >{errors.title.message}</p> }
         </div> 
        }
        />
      
    </div>
    <div className={styles.formItem} >
        <label htmlFor="target">Финансовая цель</label>
        <Controller
        name={'target'}
        control={control}
        rules={{required: 'Это поле обязательно'}}
        render={({field})=> 
         <div className={styles.inputHolder} >
            <InputNumber controls={false} size='large' id='target' placeholder='0'  style={{width: '727px'}} {...field}  />
            {errors.target && <p className={styles.error} >{errors.target.message}</p> }</div> 
        
        }
        />
    </div>
    <div className={styles.formItem} >
        <label htmlFor="finishDate">Дата завершения</label>
        <Controller
        name={'finishDate'}
        control={control}
        rules={{required: 'Это поле обязательно'}}
        render={({field})=> 
            <div className={styles.inputHolder} >
                <DatePicker size='large' id='finishDate' style={{width: '727px'}} {...field} placeholder='время не задано' />
                {errors.finishDate && <p className={styles.error} >{errors.finishDate.message}</p> }
            </div> 
        }
        />
    </div>
    <div className={styles.formItem} >
        <label htmlFor="description">О проекте</label>
        <Controller
        name={'description'}
        control={control}
         render={({field})=> 
            <div className={styles.inputHolder} >
                <TextArea id='description' rows={7} style={{width: '727px'}} {...field} placeholder='детально о проекте...' />
                </div> 
        }
        />
    </div>
    </div>
  )
}

export default Description