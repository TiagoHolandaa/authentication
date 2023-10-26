import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

import { APP_ROUTES } from "@/presentation/constants/appRouter";
import { checkUserAuthenticated } from "@/presentation/functions/checkUserAuthenticated";

type PrivateRouteProps = {
  children: ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isUserAuthenticated = checkUserAuthenticated()
  const { push } = useRouter()

  useEffect(() => {
    if (!isUserAuthenticated) {
      push(APP_ROUTES.public.signin)
    }
  }, [isUserAuthenticated, push])

  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  )
}

export default PrivateRoute;