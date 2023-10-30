export interface User {
    email: string,
    password: string,
    nameComplete: string,
    cpf: string;
    phone: {
        ddd: string,
        numPhone: string
    }
}