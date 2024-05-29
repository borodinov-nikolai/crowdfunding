import { emptySplitApi } from "@/src/shared/configs/rtk_base"
import { IUser } from "../interfaces/user"






const token = typeof window !== 'undefined' && localStorage.getItem('jwt')
const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getUser : build.query<IUser, void>({
      query: ()=> '/auth/me',
      providesTags:['User']
    })
  }),

  overrideExisting: false,
})

export const {useGetUserQuery} = token ? extendedApi : {useGetUserQuery:()=>{return {data:null, isLoading: false, isSuccess: false}}}