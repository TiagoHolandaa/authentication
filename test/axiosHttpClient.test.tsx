import { AxiosHttpClient } from "@/infrastructure/axiosHttp/axiosHttpClient"; // Importe a classe que você deseja testar
import { api } from "@/infrastructure/conection/axiosConection";
import axios from "axios";

// Mock da função request para evitar chamadas reais à API
jest.mock('axios', () => {
  return {
    request: jest.fn().mockResolvedValue({ data: 'Test Data' }),
  };
});

describe('AxiosHttpClient', () => {
  it('deve retornar os dados corretos ao fazer uma solicitação', async () => {
    const axiosHttpClient = new AxiosHttpClient();

    const response = await axios.get('https://example.com');

    expect(response.data).toEqual('Test Data');
  });
});