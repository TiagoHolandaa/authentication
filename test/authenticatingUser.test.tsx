import { authenticatingUser } from '@/application/authentication/authenticating';
import { AxiosHttpPostClient } from '@/infrastructure/axiosHttp/AxiosHttpClient';
import * as setCookieModule from '../src/application/manageCookie/setCookie';


describe('authenticatingUser', () => {
    const httpClientMock = {
        request: jest.fn(),
    };
    
    const setCookieSpy = jest.spyOn(require('../src/application/manageCookie/setCookie'), 'setCookie');


    beforeEach(() => {
        AxiosHttpPostClient.prototype.request = jest.fn(() => httpClientMock.request());
    });

    afterEach(() => {
        httpClientMock.request.mockClear();
        setCookieSpy.mockClear();
    });

    it('deve autenticar o usuário com sucesso', async () => {
        // Configura o mock para retornar uma resposta simulada de sucesso
        httpClientMock.request.mockResolvedValue({ status: 200, data: 'seu-token-aqui' });

        const user = {
            email: 'tiago.bezerra2004@gmail.com',
            password: '12345678',
        };

        // Chame a função authenticatingUser passando o usuário
        const result = await authenticatingUser(user);

        // Verifique se o espião para setCookie foi chamado com os parâmetros corretos
        expect(setCookieSpy).toHaveBeenCalledWith('token', 'seu-token-aqui', 7);

        // Verifique se o resultado é o esperado
        expect(result).toEqual('Usuário autenticado com sucesso');
    });


    it('deve lidar com erro na autenticação', async () => {
        // Configura o mock para retornar uma resposta simulada de erro
        httpClientMock.request.mockResolvedValue({ status: 400 });

        const user = {
            email: 'usuário-incorreto',
            password: 'senha-incorreta',
        };

        // Chame a função authenticatingUser passando o usuário
        await expect(authenticatingUser(user)).rejects.toThrow('Erro na API');
    });

});
