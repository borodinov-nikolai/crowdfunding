'use client'
import React, { FC } from 'react'
import styles from './AboutOrganizer.module.scss'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import { IProjectDto } from '@/src/entities/project'
import { DatePicker, Input, InputNumber, Select } from 'antd'

interface IProps {
    control: Control<IProjectDto, any>
    errors: FieldErrors<IProjectDto>
}


const AboutOrganizer: FC<IProps> = ({ control, errors }) => {
    return (
        <div className={styles.root} >
            <div className={styles.formItem} >
                <label htmlFor="personType">Тип</label>
                <Controller
                    name={'personType'}
                    control={control}
                    rules={{ required: 'Это поле обязательно' }}
                    render={({ field }) =>
                        <div className={styles.inputHolder} >
                            <Select {...field} style={{ width: '727px' }} defaultValue={'Физическое лицо'} options={
                                [
                                    {value: 'Физическое лицо', label: 'Физическое лицо'},
                                    {value: 'Юридическое лицо', label: 'Юридическое лицо'},
                                ]
                            } />
                            {errors.personType && <p className={styles.error} >{errors.personType.message}</p> }
                        </div>
                    }
                />
            </div>
            <div className={styles.formItem} >
                <label htmlFor="fullName">ФИО</label>
                <Controller
                    name={'fullName'}
                    control={control}
                    rules={{ required: 'Это поле обязательно' }}
                    render={({ field }) =>
                        <div className={styles.inputHolder} >
                            <Input size='large' id='fullName' style={{ width: '727px' }} {...field} placeholder='Иванов Иван Иванович' />
                            {errors.fullName && <p className={styles.error} >{errors.fullName.message}</p> }
                        </div>
                    }
                />
            </div>
            <div className={styles.formItem} >
                <label htmlFor="town">Город</label>
                <Controller
                    name={'town'}
                    control={control}
                    rules={{ required: 'Это поле обязательно' }}
                    render={({ field }) =>
                        <div className={styles.inputHolder} >
                            <Input size='large' id='town' style={{ width: '727px' }} {...field} placeholder='город, поселок, село' />
                            {errors.town && <p className={styles.error} >{errors.town.message}</p> }
                        </div>
                    }
                />
            </div>
            <div className={styles.formItem} >
                <label htmlFor="inn">ИНН</label>
                <Controller
                    name={'inn'}
                    control={control}
                    rules={{ required: 'Это поле обязательно', validate:(value)=> {
                       const stringValue =  value.toString()
                       return  stringValue.length === 10 || stringValue.length === 12 || 'должно содержать 10 или 12 цифр'
                    } }}
                    render={({ field }) =>
                        <div className={styles.inputHolder} >
                            <InputNumber size='large' id='inn' style={{ width: '727px' }} {...field} placeholder='должно содержать 10 или 12 цифр' />
                            {errors.inn && <p className={styles.error} >{errors.inn.message}</p> }
                        </div>
                    }
                />
            </div>
            <div className={styles.formItem} >
                <label htmlFor="passport">Данные паспорта</label>
                <Controller
                    name={'passport'}
                    control={control}
                    rules={{ required: 'Это поле обязательно' }}
                    render={({ field }) =>
                        <div className={styles.inputHolder} >
                            <Input size='large' id='passport' style={{ width: '727px' }} {...field} placeholder='***********' />
                            {errors.passport && <p className={styles.error} >{errors.passport.message}</p> }
                        </div>
                    }
                />
            </div>
            <div className={styles.formItem} >
                <label htmlFor="issuedBy">Кем выдан</label>
                <Controller
                    name={'issuedBy'}
                    control={control}
                    rules={{ required: 'Это поле обязательно' }}
                    render={({ field }) =>
                        <div className={styles.inputHolder} >
                            <Input size='large' id='issuedBy' style={{ width: '727px' }} {...field} placeholder='' />
                            {errors.issuedBy && <p className={styles.error} >{errors.issuedBy.message}</p> }
                        </div>
                    }
                />
            </div>
            <div className={styles.formItem} >
                <label htmlFor="issuedDate">Дата выдачи</label>
                <Controller
                    name={'issuedDate'}
                    control={control}
                    rules={{ required: 'Это поле обязательно' }}
                    render={({ field }) =>
                        <div className={styles.inputHolder} > 
                        <DatePicker size='large' id='issuedDate' style={{ width: '727px' }} {...field} placeholder='01.01.2024' />
                        {errors.issuedDate && <p className={styles.error} >{errors.issuedDate.message}</p> }
                        </div>  
                    }
                />
            </div>
            <div className={styles.formItem} >
                <label htmlFor="departmentCode">Код подразделения</label>
                <Controller
                    name={'departmentCode'}
                    control={control}
                    rules={{ required: 'Это поле обязательно' }}
                    render={({ field }) =>
                        <div className={styles.inputHolder} >
                            <Input size='large' id='departmentCode' style={{ width: '727px' }} {...field} placeholder='*** ***' />
                            {errors.departmentCode && <p className={styles.error} >{errors.departmentCode.message}</p> }
                        </div>
                    }
                />
            </div>
            <div className={styles.formItem} >
                <label htmlFor="address">Адрес регистрации</label>
                <Controller
                    name={'address'}
                    control={control}
                    rules={{ required: 'Это поле обязательно' }}
                    render={({ field }) =>
                        <div className={styles.inputHolder} >
                            <Input size='large' id='address' style={{ width: '727px' }} {...field} placeholder='как в паспорте' />
                            {errors.address && <p className={styles.error} >{errors.address.message}</p> }
                        </div>
                    }
                />
            </div>
        </div>
    )
}

export default AboutOrganizer