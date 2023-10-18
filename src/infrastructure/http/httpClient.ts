export type HttpResponse<TData = any> = {
    data: TData;
}

export type HttpMethod = 'get' | 'put' | 'post' | 'delete'

export interface HttpClient<TData = any> {
    request(method: HttpMethod, url: string): Promise<HttpResponse<TData>>;
}