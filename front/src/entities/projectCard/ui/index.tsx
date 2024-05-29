import React, { FC } from 'react'
import { IProject } from '../../project/interfaces/project'


interface IProps {
    project: IProject
}
export const ProjectCard: FC<IProps> = ({project}) => {
  return (
    <div>ProjectCard</div>
  )
}
