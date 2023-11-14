import axios from "axios";
import { HttpPostClient, HttpPostParams, HttpResponse } from "../http";

export class AxiosHttpPostClient implements HttpPostClient<any, any> {
    async post(params: HttpPostParams<any>, headers?: any): Promise<HttpResponse<any>> {
        const response = await axios.post(params.url, params.body, headers)
        return {
            statusCode: response.status,
            body: response.data,
        }
    }
}