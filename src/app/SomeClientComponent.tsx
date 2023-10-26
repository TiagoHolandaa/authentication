'use client'

import { Inter } from "next/font/google";
import { checkIsPublicRoute } from "@/presentation/functions/checkIsPublicRoute";
import { usePathname } from "next/navigation";
import PrivateRoute from "@/application/authentication/authenticated";

const inter = Inter({ subsets: ["latin"] });

export default function SomeClientComponent({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()
  const isPublicPage = checkIsPublicRoute(pathname)

  console.log(isPublicPage)

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {isPublicPage && children}
        {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
      </body>
    </html>
  )
}