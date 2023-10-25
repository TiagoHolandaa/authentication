import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/loading";
import { getCookie } from "../manageCookie/getCookie";
import { decryptData } from "@/infrastructure/encryptAnddecrypt/decrypt";

interface WithAuthProps {
  token: string;
}

const withAuth = <T extends WithAuthProps>(
  WrappedComponent: React.ComponentType<T>
) => {
  return (props: T) => {
    const router = useRouter();
    const [isLoading, setLoading] = useState<boolean>(true);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
    const [test, setTest] = useState("")

    useEffect(() => {
      const checkAuthentication = async () => {
        const recoveredToken = getCookie("token");
        console.log(recoveredToken);
        if (recoveredToken) {
          setIsAuthenticated(true);
          setTest("teste")
          console.log(test)
        }

        /* if (!isAuthenticated) {
          router.push("/signin"); // Redirecione para a página de login se o usuário não estiver autenticado.
        } */

        setLoading(false); // Defina isLoading para falso quando a verificação estiver concluída.

      };

      checkAuthentication();
    }, []);

    if (isLoading) {
      return <Loading />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
