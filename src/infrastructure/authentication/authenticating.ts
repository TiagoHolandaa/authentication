import User from "@/src/domain/Authenticated";
//import { api } from "@/src/infrastructure/conection/axiosConection";
import { setCookie } from "@/src/infrastructure/manageCookie/setCookie";
import { getCookie } from "@/src/infrastructure/manageCookie/getCookie";
import LoginPageRoute from "@/src/presentation/router/LoginPageRoute";
import authenticated from "@/src/infrastructure/authentication/authenticated";

async function authenticatingUser(user: User) {
    try {
        // Enviar a solicitação para a API de autenticação com Axios
        //const response = await api.post('/login/v1', user)
        const tokenFake = "321s_ecreet"

        // Verificar a resposta da API e retornar os dados do usuário autenticado
        if (user.email === "tiago.bezerra2004@gmail.com" && user.password === "12345678") {
            setCookie('token', tokenFake, 7)
            const recoveredToken = getCookie('token');
            console.log(recoveredToken)

            if (authenticated.length) {
                const loginPageRoute = new LoginPageRoute()
                loginPageRoute.navigateToHomePage()
            }
        } else {
            throw new Error("Erro na API")
        }

    } catch (error) {
        throw new Error('Erro ao autenticar usuário: ' + error)
    }
}

export default authenticatingUser;