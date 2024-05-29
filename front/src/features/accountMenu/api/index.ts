import { emptySplitApi } from "@/src/shared/configs/rtk_base";




const extendedApi = emptySplitApi.injectEndpoints({
    endpoints: (build)=> ({
        signOut: build.mutation<void, void>({
            query: ()=> ({
                url: '/auth/sign-out',
                method: 'POST',
            }),
            invalidatesTags: ['User']
        })
    }),
    overrideExisting: false
})

export const {useSignOutMutation} = extendedApi