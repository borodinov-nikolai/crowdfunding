import React from 'react'
import styles from './AboutUs.module.scss'
import Image from 'next/image'


const AboutUs = () => {
  return (
    <div>
        <div  className={[styles.inner, ' container'].join(' ')} >
          <div className={styles.firstBlock}>
            <h1 className={styles.title} >ITmergehub</h1>
            <p className={styles.description} >Очень интересный текст про то, что мы делаем!</p>
            <div className={styles.statistics} >
              <h2 className={styles.statisticTitle} >Наша статистика</h2>
              <div className={styles.statisticsMarks} >
                <div className={styles.customers} ><span></span>Заказчики</div>
                <div className={styles.companies} ><span></span>Компании</div>
              </div>
              <div className={styles.imageHolder} >
                <Image src={'/images/chart.png'} width={300} height={300} alt='charts image'/>
              </div>
            </div>
          </div>
          <div className={styles.secondBlock} >
            <Image src={'/images/girl_banner.png'} width={630} height={630} alt='girl banner' />
          </div>
        </div>
    </div>
  )
}

export default AboutUs