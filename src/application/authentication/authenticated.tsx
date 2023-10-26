import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

import { APP_ROUTES } from "@/presentation/constants/appRouter";
import { checkUserAuthenticated } from "@/presentation/functions/checkUserAuthenticated";

type PrivateRouteProps = {
  children: ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
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