import React, { FC } from 'react'
import { IProject } from '../../project/interfaces/project'
import styles from './ProjectCard.module.scss'
import Image from 'next/image'
import StarSvg from '@/src/shared/icons'

interface IProps {
    project: IProject
}
export const ProjectCard: FC<IProps> = ({project}) => {
  const {title, description, target} = project
  return (
    <div className={styles.root} >
      <div className={styles.favoritesIcon} >
        <StarSvg />
      </div>
          <div className={styles.header} > 
          <div className={styles.progres} ><span>0 ₽</span> {`из ${target}`}</div>
          <p className={styles.percentage} > 0%</p>
          </div>
          <div className={styles.imageHolder} >
            <Image src={'/images/project.png'} width={200} height={200} alt='project image' />
          </div>
          <h3 className={styles.title} >{title}</h3>
          <p className={styles.description} >{description}</p>
    </div>
  )
}
