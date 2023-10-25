export interface User {
    email: string,
    password: string,
    nameComple: string,
    CPF: string;
    phone: {
        DDD: number,
        numPhone: number
    }
}