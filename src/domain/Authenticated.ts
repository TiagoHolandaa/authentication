import { Token } from "./Token"

export type AuthenticationParams = {
    email: string,
    password: string
}

export interface IAuthetication {
    auth: (params: AuthenticationParams) => Promise<Token>
}