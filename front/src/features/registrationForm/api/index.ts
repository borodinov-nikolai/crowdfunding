import { emptySplitApi } from "@/src/shared/configs/rtk_base"



interface User {
  id: number
  email:string
  password: string
  login: string
  phoneNumber: string
  accessToken: string
}


type Inputs = {

    login: string,
  email: string,
  password: string,
  description: string,
  role: string
}

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    registration: build.mutation<User, Inputs>({
      query: ({email, password, login, role, description})=> ({
        url: '/auth/sign-up',
        method: 'POST',
        body: {
          email,
          password,
          login,
          role,
          description
        }
      }),
      invalidatesTags:['User']
     
    })
  }),
  overrideExisting: false,
})

export const {useRegistrationMutation} = extendedApi