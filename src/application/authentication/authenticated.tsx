import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loading from '@/app/components/loading';
import { getCookie } from '../manageCookie/getCookie';

interface WithAuthProps {
    // Defina as propriedades que o componente WrappedComponent aceita
    // por exemplo, você pode adicionar propriedades específicas da página protegida.
  }
  
  const withAuth = <T extends WithAuthProps>(WrappedComponent: React.ComponentType<T>) => {
    return (props: T) => {
      const router = useRouter();
      const [isLoading, setLoading] = useState<boolean>(true);
      const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  
      useEffect(() => {
        const checkAuthentication = async () => {
          const recoveredToken = getCookie("token")

          if (recoveredToken) {
            setIsAuthenticated(true)
          }
          
          setLoading(false); // Defina isLoading para falso quando a verificação estiver concluída.
  
          if (!isAuthenticated) {
            router.push('/login'); // Redirecione para a página de login se o usuário não estiver autenticado.
          }
        };
  
        checkAuthentication();
      }, [router]);
  
      if (isLoading) {
        return <Loading />;
      }
  
      return <WrappedComponent {...props} />;
    };
  };
  
  export default withAuth;