import React from 'react'
import styles from './AddPublication.module.scss'
import { FiPlus } from "react-icons/fi";

const AddPublication = () => {
  return (
    <div className={styles.root} >
        <div className={'container'} >
            <h1 className={styles.title} >Публикации</h1>
            <p className={styles.description} >У вас еще нет существующих публикаций. Создадим новую?</p>
            <div className={styles.publications} >
                   <button className={styles.addButton} >
                        <FiPlus/><p>Создать публикацию</p>
                   </button>
            </div>
        </div>
    </div>
  )
}

export default AddPublication