import {
  AxiosHttpDeleteClient,
  AxiosHttpGetClient,
  AxiosHttpPostClient,
  AxiosHttpPutClient,
} from "@/infrastructure/axiosHttp/axiosHttpClient"; // Importe a classe que você deseja testar
import { apiHost } from "@/application/conection/axiosConection";

// Mock da função request para evitar chamadas reais à API
jest.mock("axios", () => {
  return {
    request: jest.fn().mockResolvedValue({ data: "Test Data", status: 200 }),
  };
});

const loginData = { email: "user@example.com", password: "secret123" };
const id = "1234567890";

describe("AxiosHttpClient", () => {
  //#region GET
  it("deve retornar os dados corretos ao fazer uma solicitação do get", async () => {
    // Crie uma instância da classe que você está testando
    const httpClient = new AxiosHttpGetClient();

    // Realize uma chamada de GET com a instância do cliente
    const response = await httpClient.request("get", `${apiHost}/get`);

    // Verifique se a resposta possui uma propriedade 'statusCode'
    expect(response.statusCode).toBe(200);

    // Verifique se a resposta possui dados
    expect(response.data).toBeDefined();
  });

  it("deve lidar com erros normalmente do get", async () => {
    // Crie uma instância da classe que você está testando
    const httpClient = new AxiosHttpGetClient();

    // Realize uma chamada de GET com a instância do cliente
    try {
      await httpClient.request("get", `${apiHost}/get`);
    } catch (error) {
      // Verifique se ocorreu um erro GET
      expect(error).toBeDefined();
    }
  });
  //#endregion

  //#region POST
  it("deve retornar os dados corretos ao fazer uma solicitação do post", async () => {
    // Crie uma instância da classe que você está testando
    const httpClient = new AxiosHttpPostClient();

    // Realize uma chamada de POST com a instância do cliente
    const response = await httpClient.request(
      "post",
      `${apiHost}/post`,
      loginData
    );

    // Verifique se a resposta possui uma propriedade 'statusCode'
    expect(response.statusCode).toBe(200);

    // Verifique se a resposta possui dados
    expect(response.data).toEqual("Test Data");
  });

  it("deve lidar com erros normalmente do post", async () => {
    // Crie uma instância da classe que você está testando
    const httpClient = new AxiosHttpPostClient();

    // Realize uma chamada de POST com a instância do cliente
    try {
      await httpClient.request("post", `${apiHost}/post`, loginData);
    } catch (error) {
      // Verifique se ocorreu um erro post
      expect(error).toEqual("Test Data");
    }
  });
  //#endregion

  //#region PUT
  it("deve retornar os dados corretos ao fazer uma solicitação do put", async () => {
    // Crie uma instância da classe que você está testando
    const axiosHttpClient = new AxiosHttpPutClient();

    const response = await axiosHttpClient.request("put", `${apiHost}/put`, id);

    // Verifique se a resposta possui dados e corretos
    expect(response.data).toEqual("Test Data");
  });

  it("deve lidar com erros normalmente do put", async () => {
    // Crie uma instância da classe que você está testando
    const httpClient = new AxiosHttpPutClient();

    // Realize uma chamada de PUT com a instância do cliente
    try {
      await httpClient.request("put", `${apiHost}/get`, id);
    } catch (error) {
      // Verifique se ocorreu um erro PUT
      expect(error).toEqual("Test Data");
    }
  });
  //#endregion

  //#region  DELETE
  it("deve retornar os dados corretos ao fazer uma solicitação do delete", async () => {
    const axiosHttpClient = new AxiosHttpDeleteClient();

    // Realize uma chamada de DELETE com a instância do cliente
    const response = await axiosHttpClient.request(
      "delete",
      `${apiHost}/delete`,
      id
    );

    // Verifique se a resposta possui dados e corretos
    expect(response.data).toEqual("Test Data");
  });

  it("deve lidar com erros normalmente do delete", async () => {
    // Crie uma instância da classe que você está testando
    const httpClient = new AxiosHttpDeleteClient();

    // Realize uma chamada de DELETE com a instância do cliente
    try {
      await httpClient.request("delete", `${apiHost}/get`, loginData);
    } catch (error) {
      // Verifique se ocorreu um erro DELETE
      expect(error).toEqual("Test Data");
    }
  });
  //#endregion
});
