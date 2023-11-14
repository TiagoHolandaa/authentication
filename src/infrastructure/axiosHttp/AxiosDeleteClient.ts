import axios from "axios"
import { HttpDeleteClient, HttpDeleteParams, HttpResponse } from "../http"

export class AxiosHttpDeleteClient implements HttpDeleteClient<any, any> {
    async delete(params: HttpDeleteParams<any>, headers?: any): Promise<HttpResponse<any>> {
        const response = await axios.delete((params.url, params.body), headers)
        return {
            statusCode: response.status,
            body: response.data
        }
    }

}