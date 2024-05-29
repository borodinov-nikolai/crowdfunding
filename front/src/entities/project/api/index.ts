import { emptySplitApi } from "@/src/shared/configs/rtk_base";
import { IProjectDto } from "../interfaces/projectDto";
import { IProject } from "../interfaces/project";




const extendedApi = emptySplitApi.injectEndpoints({
    endpoints: (build)=> ({
        getAllProjects: build.query<IProject[], void>({
            query: ()=> '/projects',
            providesTags: ['Project']
        }),
        postProject: build.mutation<IProject, IProjectDto>({
            query: (data) => ({
                url: '/projects',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Project', 'User']
        })
    }),
    overrideExisting: false
})


export const {usePostProjectMutation, useGetAllProjectsQuery} = extendedApi