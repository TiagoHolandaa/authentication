'use client'

import { checkIsPublicRoute } from "@/presentation/functions/checkIsPublicRoute";
import { usePathname } from "next/navigation";
import PrivateRoute from "@/application/authentication/authenticated"

export default function SomeClientComponent({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()
  const isPublicPage = checkIsPublicRoute(pathname)

  return (
    <html lang="pt-br">
      <body>
        {isPublicPage && children}
        {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
      </body>
    </html>
  )
}