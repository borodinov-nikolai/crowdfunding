import React from 'react'
import styles from './Projects.module.scss';
import Image from 'next/image';


const Projects = () => {
  return (
    <div className={styles.root} >
        <div className={[styles.inner, ' container'].join(' ')} >
            <h1 className={styles.title} >Проекты</h1>
            <p className={styles.description} >
            Вы зарегистрировались как заказчик так что вам будут предложены варианты команд, проектов а так же фондов, которые нуждаются в вашей финансовой поддержке (аналогичный но немножко другой текст для команд)
            </p>

                <div className={styles.filters} >

                </div>
                <div className={styles.cardsHolder} >
                    <div className={styles.card} ></div>
                    <div className={styles.card} ></div>
                    <div className={styles.card} ></div>
                    <div className={styles.card} ></div>
                    <div className={styles.card} ></div>
                    <div className={styles.card} ></div>
                    <div className={styles.card} ></div>
                    <div className={styles.card} ></div>
                    <div className={styles.card} ></div>
                </div>
      
        </div>
        <Image className={styles.image} src={'/images/projects_img.png'} width={611} height={626} alt='projects image'/>
    </div>
  )
}

export default Projects