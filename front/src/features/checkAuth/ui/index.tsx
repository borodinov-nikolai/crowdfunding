'use client'
import { useGetUserQuery } from '@/src/entities/user';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';


const CheckAuth = ({ children }: { children: ReactNode }) => {
  const {data, isLoading, isSuccess } = useGetUserQuery()
  console.log(data)
  const location = usePathname()

  const forbiddenRoutes = [
    '/account'
  ]


  if (forbiddenRoutes.includes(location)) {

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

export default CheckAuth