import axios from "axios";
import { HttpPutClient, HttpPutParams, HttpResponse } from "../http";

export class AxiosHttpPutClient implements HttpPutClient<any, any> {
    async put(params: HttpPutParams<any>, headers?: any): Promise<HttpResponse<any>> {
        const response = await axios.put(params.url, params.body, headers)
        return {
            statusCode: response.status,
            body: response.data
        }
    }
}