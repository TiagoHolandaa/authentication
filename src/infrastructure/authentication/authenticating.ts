//import { api } from "@/src/infrastructure/conection/axiosConection";
import { AuthenticationParams } from "@/domain/Authenticated";
import { setCookie } from "@/infrastructure/manageCookie/setCookie";

export const authenticatingUser = async (user: AuthenticationParams) => {
    try {
        // Enviar a solicitação para a API de autenticação com Axios
        //const response = await api.post('/login/v1', user)
        const tokenFake = "123_secret"

        // Verificar a resposta da API e retornar os dados do usuário autenticado
        if (user.email === "tiago.bezerra2004@gmail.com" && user.password === "12345678") {
            setCookie('token', tokenFake, 7)
        } else {
            throw new Error("Erro na API")
        }
    } catch (error) {
        throw new Error('Erro ao autenticar usuário: ' + error)
    }
}