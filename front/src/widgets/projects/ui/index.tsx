import React from 'react'
import styles from './Projects.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegStar } from "react-icons/fa";

const Projects = () => {
  return (
    <div className={styles.root} >
        <div className={[styles.inner, ' container'].join(' ')} >
            <h1 className={styles.title} >Проекты</h1>
            <p className={styles.description} >
            Вы зарегистрировались как заказчик так что вам будут предложены варианты команд, проектов а так же фондов, которые нуждаются в вашей финансовой поддержке (аналогичный но немножко другой текст для команд)
            </p>

                <div className={styles.filters} >
                  <div className={styles.filtersItem} >
                    <Image src={'/icons/filters_icon1.png'} width={25} height={25} alt='filter icon'/>
                  </div>
                  <div className={styles.filtersItem} >
                    <Image src={'/icons/filters_icon2.png'} width={25} height={25} alt='filter icon'/>
                  </div>
                  <div className={styles.filtersItem} >
                    <Image src={'/icons/filters_icon3.png'} width={25} height={25} alt='filter icon'/>
                  </div>
                </div>
                <div className={styles.cardsHolder} >
                    <div className={styles.card} >
                      <Image className={styles.cardImage}  src={'/images/project_card_img.png'} width={400} height={400} alt='project card image' />
                      <div className={styles.progress} >
                        <div className={styles.progressBar} ></div>
                        <p className={styles.progressCounter} >30000/100000</p>
                      </div>
                      <Link className={styles.cardLink} href={'#'} >Подробнее</Link>
                      <Image className={styles.coinsIcon} src={'/images/project_card_coins_img.png'} width={150} height={80} alt='project card coins'/>
                      <FaRegStar className={styles.favoritesIcon} />
                    </div>
                    <div className={styles.card} >
                      <Image className={styles.cardImage}  src={'/images/project_card_img.png'} width={400} height={400} alt='project card image' />
                       <button className={styles.cardButton} >Стать заказчиком</button>
                      <Link className={styles.cardLink} href={'#'} >Подробнее</Link>
                      <FaRegStar className={styles.favoritesIcon} />
                    </div>
  
                    <div className={styles.card} ></div>
                    <div className={styles.card} ></div>
                    <div className={styles.card} ></div>
                    <div className={styles.card} ></div>
                    <div className={styles.card} ></div>
                    <div className={styles.card} ></div>
                    <div className={styles.card} ></div>
                </div>

                <div className={styles.navigation} >
                  <div><Image src={'/images/plus_img.png'} width={73} height={73} alt='plus image' /></div>
                  <div><Image src={'/images/active_plus_img.png'} width={73} height={73} alt='plus image' /></div>
                  <div><Image src={'/images/plus_img.png'} width={73} height={73} alt='plus image' /></div>
                </div>
      
              <div className={styles.pagination} >Далее</div>
        </div>
        <Image className={styles.image} src={'/images/projects_img.png'} width={611} height={626} alt='projects image'/>
    </div>
  )
}

export default Projects