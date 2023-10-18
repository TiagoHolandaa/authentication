import { api } from "../conection/axiosConection";
import { HttpClient, HttpMethod, HttpResponse } from "../http/httpClient";
import { HttpPostParams } from "../http/httpPostClient";

export class AxiosHttpClient implements HttpClient {
    post(arg0: HttpPostParams<any>) {
      throw new Error("Method not implemented.");
    }
    async request(method: HttpMethod, url: string): Promise<HttpResponse<any>> {
        const { data } = await api.request<HttpResponse>({ method, url })

        return { data }
    }

}

