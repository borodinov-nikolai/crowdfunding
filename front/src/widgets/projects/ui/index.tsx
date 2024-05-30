'use client'
import React from 'react'
import styles from './Projects.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegStar } from "react-icons/fa";
import { useGetAllProjectsQuery } from '@/src/entities/project';
import { ProjectCard } from '@/src/entities/projectCard';

const Projects = () => {
  const projects = useGetAllProjectsQuery()
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
                  {
                    projects?.data?.map((project)=> 
                    <ProjectCard key={project.id}  project={project}  />
                    )
                  }
                </div>

                <div className={styles.navigation} >
                  <div><Image src={'/images/plus_img.png'} width={73} height={73} alt='plus image' /></div>
                  <div><Image src={'/images/active_plus_img.png'} width={73} height={73} alt='plus image' /></div>
                  <div><Image src={'/images/plus_img.png'} width={73} height={73} alt='plus image' /></div>
                </div>
      
              
        </div>
       
    </div>
  )
}

export default Projects