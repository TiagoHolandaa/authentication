//import { api } from "@/src/infrastructure/conection/axiosConection";
import { AuthenticationParams } from "@/domain/Authenticated";
import { setCookie } from "@/application/manageCookie/setCookie";
import { AxiosHttpPostClient } from "@/infrastructure/axiosHttp/axiosHttpClient";
import { apiHost } from "../conection/axiosConection";

export const authenticatingUser = async (user: AuthenticationParams) => {
    try {
        // Enviar a solicitação para a API de autenticação com Axios
        const httpClient = new AxiosHttpPostClient();

        // Realize uma chamada de POST com a instância do cliente
        const response = await httpClient.request(
            "post",
            `${apiHost}/get`,
            user
        );

        // Verificar a resposta da API e retornar os dados do usuário autenticado
        if (user.email === "tiago.bezerra2004@gmail.com" && user.password === "12345678") {
            setCookie('token', response.data, 7)
        } else {
            throw new Error("Erro na API")
        }
    } catch (error) {
        throw new Error('Erro ao autenticar usuário: ' + error)
    }
}