import axios from "axios";
import { HttpGetClient, HttpPostClient, HttpMethod, HttpResponse, HttpPutClient, HttpDeleteClient } from "../http/httpClient";

export class AxiosHttpGetClient implements HttpGetClient {
  async request(method: HttpMethod, url: string): Promise<HttpResponse<any>> {
    const { data } = await axios.request<HttpResponse>({ method, url })

    return { statusCode: 200, data }
  }
}

export class AxiosHttpPostClient implements HttpPostClient {
  async request(method: HttpMethod, url: string, params?: any): Promise<HttpResponse<any, number>> {
    const { data } = await axios.request<HttpResponse>({ method, url, params })

    return { statusCode: 200, data }
  }

}

export class AxiosHttpPutClient implements HttpPutClient {
  async request(method: HttpMethod, url: string, params?: any): Promise<HttpResponse<any, number>> {
    const { data } = await axios.request<HttpResponse>({ method, url, params })

    return { statusCode: 200, data }
  }
}

export class AxiosHttpDeleteClient implements HttpDeleteClient {
  async request(method: HttpMethod, url: string, params?: any): Promise<HttpResponse<any, number>> {
    const { data } = await axios.request<HttpResponse>({ method, url, params })

    return { statusCode: 200, data }
  }
}

