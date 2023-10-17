import { api } from "../conection/axiosConection";
import { HttpPostClient, HttpPostParams } from "../http/httpPostClient";
import { HttpResponse } from "../http/httpResponse";

export class AxiosHttpClient implements HttpPostClient<any, any> {
    async post(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
        try {
            const response = await api.post(params.url, params.body);
            return {
                statusCode: response.status,
                body: await response.data,
            };
        } catch (error) {
            throw error;
        }
    }
}