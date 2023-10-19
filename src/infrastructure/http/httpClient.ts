export type HttpResponse<TData = any, statusCode = number> = {
    statusCode: HttpStatusCode;
    data?: TData;
}

export enum HttpStatusCode {
    ok = 200,
    noContent = 204,
    unauthorized = 401,
    badRequest = 400,
    notFound = 404,
    internalServerError = 500
}

export type HttpPostParams<T> = {
    url: string;
    body?: T;
}

export type HttpMethod = 'get' | 'put' | 'post' | 'delete'

export interface HttpGetClient {
    request(method: HttpMethod, url: string): Promise<HttpResponse>;
}

export interface HttpPostClient {
    request(method: HttpMethod, url: string, params?: any): Promise<HttpResponse>;
}

export interface HttpPutClient {
    request(method: HttpMethod, url: string, params?: any): Promise<HttpResponse>;
}

export interface HttpDeleteClient {
    request(method: HttpMethod, url: string, params?: any): Promise<HttpResponse>;
}