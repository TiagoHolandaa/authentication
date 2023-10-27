import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

import { APP_ROUTES } from "@/presentation/constants/appRouter";
import { checkUserAuthenticated } from "@/presentation/functions/checkUserAuthenticated";

const PrivateRoute = ({ children }: {children: React.ReactNode}) => {
  const {push} = useRouter()

  const isUserAuthenticated = checkUserAuthenticated()

  useEffect(() => {
    if (!isUserAuthenticated) {
      push(APP_ROUTES.public.signin)
    }
  }, [isUserAuthenticated])

  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  )
}

export default PrivateRoute;