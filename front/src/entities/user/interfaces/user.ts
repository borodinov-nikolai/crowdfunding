import { IProject } from "../../project"



export interface IUser {
    id: number
    login: string
    email: string
    role: 'ADMIN'| 'CUSTOMER'| "COMPANY"
    description: string
    projects: IProject[]
}