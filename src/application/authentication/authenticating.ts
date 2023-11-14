import { setCookie } from "@/application/manageCookie/setCookie";
import { apiHost } from "../conection/axiosConection";
import { AxiosHttpPostClient } from "@/infrastructure/axiosHttp";
import { HttpPostParams } from "@/infrastructure/http";
import { AuthenticationParams } from "@/domain/Authenticated";


export const authenticatingUser = async (user: AuthenticationParams) => {
    try {
        /* const fakeUser = {
            cpf: "000.000.000-11",
            password: "123456789"
        } */

        // Realize uma chamada de POST com a instância do cliente
        const axiosHttpPost = new AxiosHttpPostClient()

        const postParams: HttpPostParams<any> = {
            url: `http://10.14.10.189:8080/login`,
            body: user
        }

        const response = await axiosHttpPost.post(postParams)

        const responseFake = "tokenfakedabjdoiw"

        // Verificar a resposta da API e retornar os dados do usuário autenticado
        if (user.email === "tiago.bezerra2004@gmail.com" && user.password === "123456789") {
            setCookie('token', responseFake, 7)
            console.log(response)
        } else {
            throw new Error("Erro na API")
        }
    } catch (error) {
        throw new Error('Erro ao autenticar usuário: ' + error)
    }
}