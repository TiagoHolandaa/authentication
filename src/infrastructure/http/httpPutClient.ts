import { HttpResponse } from ".";

export type HttpPutParams<T> = {
    url: string;
    body?: T;
};

export interface HttpPutClient<T, R> {
    put(params: HttpPutParams<T>, headers?: any): Promise<HttpResponse<R>>
}


