


export interface IProject {
    id: number
    title: string
    target: bigint
    finishDate: Date
    description?: string
    personType: string
    fullName: string
    town: string
    inn: number
    passport: string
    issuedBy: string
    issuedDate: Date
    departmentCode: string
    address: string
    checkingAccount: string
    payeesBank: string
    korAccount: string
    bik: string
    otherData?: string
    user: number
}
