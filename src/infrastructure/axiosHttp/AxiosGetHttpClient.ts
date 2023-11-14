import axios from "axios";
import { HttpGetClient, HttpGetParams, HttpResponse } from "../http";

export class AxiosHttpGetClient implements HttpGetClient<any, any> {
    async get(params: HttpGetParams<any>, headers?: any): Promise<HttpResponse<any>> {
        const response = await axios.get(params.url, headers)
        return {
            statusCode: response.status,
            body: response.data
        };
    }
}