'use client'
import { useGetUserQuery } from '@/src/entities/user';
import { usePathname} from 'next/navigation';

import React, { ReactNode } from 'react';


export const CheckAuth = ({ children }: { children: ReactNode }) => {
  const { isLoading, isSuccess } = useGetUserQuery()
  const location = usePathname()
  const forbiddenRoutes = [
    '/account',
    '/account/publications',
    '/account/publications/add-publication'
  ]


  if (location && forbiddenRoutes.includes(location)) {

    if (!isLoading && !isSuccess && typeof window !== 'undefined') {

      window.location.href = '/'
      return null

    } else if (!isLoading && isSuccess) {
      return <>{children}</>
    }
  } else {
    return <>{children}</>
  }


}
