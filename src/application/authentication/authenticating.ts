//import { api } from "@/src/infrastructure/conection/axiosConection";
import { AuthenticationParams } from "@/domain/Authenticated";
import { setCookie } from "@/application/manageCookie/setCookie";

export const authenticatingUser = async (user: AuthenticationParams) => {
    try {
        /* // Enviar a solicitação para a API de autenticação com Axios
        const httpClient = new AxiosHttpPostClient();

        // Realize uma chamada de POST com a instância do cliente
        const response = await httpClient.request(
            "post",
            `${apiHost}/get`,
            user
        ); */

        const responseFake = "tokenfakedabjdoiw"

        // Verificar a resposta da API e retornar os dados do usuário autenticado
        if (user.email === "tiago.bezerra2004@gmail.com" && user.password === "12345678") {
            setCookie('token', responseFake, 7)
        } else {
            throw new Error("Erro na API")
        }
    } catch (error) {
        throw new Error('Erro ao autenticar usuário: ' + error)
    }
}