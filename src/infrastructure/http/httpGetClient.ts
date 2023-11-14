import { HttpResponse } from ".";

export type HttpGetParams<T> = {
    url: string;
    body?: T;
};

export interface HttpGetClient<T, R> {
    get(params: HttpGetParams<T>, headers?: any): Promise<HttpResponse<R>>
}


