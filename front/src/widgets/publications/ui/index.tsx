'use client'
import React from 'react'
import styles from './AddPublication.module.scss'
import { FiPlus } from "react-icons/fi";
import Link from 'next/link';
import { ProjectCard } from '@/src/entities/projectCard';
import { useGetUserQuery } from '@/src/entities/user';

export const Publications = () => {
  const {data: user} = useGetUserQuery()
  
  return (
    <div className={styles.root} >
        <div className={'container'} >
            <h1 className={styles.title} >Публикации</h1>
            <p className={styles.description} >У вас еще нет существующих публикаций. Создадим новую?</p>
            <div className={styles.publications} >
                   <Link href='/account/publications/add-publication' >
                     <button className={styles.addButton} >
                          <FiPlus/><p>Создать публикацию</p>
                     </button>
                   </Link>
                   
                   <div className={styles.cardsHolder} >
                      {user?.projects?.map((project)=> 
                     <ProjectCard key={project.id} project={project} />
                      )}
                     </div>
            </div>
        </div>
    </div>
  )
}

