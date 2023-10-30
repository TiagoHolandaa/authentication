import { User } from '@/domain/User';
import { AxiosHttpPostClient } from '@/infrastructure/axiosHttp/axiosHttpClient';
import { apiHost } from '../conection/axiosConection';

const signup = async (user: User) => {
    const httpClient = new AxiosHttpPostClient()

    try {
        /* const response: any = await httpClient.request('post', `${apiHost}/signup`, user)
        if (response.status === 200) {
            console.log("Usuario cadastrado com sucesso!")
        } else {
            throw Error("Erro ao realizar o cadastro");
        } */

        //exemplo de cadastro
        if (user) {
            console.log("Cadastro realizado com sucesso")
        } else {
            throw Error("Não foi possível realizar o cadastro")
        }
    } catch (error) {
        console.log("Erro em cadastrar", error)
    }
}

export default signup;