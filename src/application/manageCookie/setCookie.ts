import { encryptData } from "../../infrastructure/encryptAnddecrypt/encrypt";

export const setCookie = (name: string, value: string, timeHour: number) => {
    const expirationDate = new Date()
    expirationDate.setDate(expirationDate.getTime() + (timeHour * 60 * 60 * 1000))
    const expires = `expires=${expirationDate.toUTCString()}`;
    const valueCookie = encryptData(value)
    if (valueCookie !== undefined) {
        document.cookie = `${name}=${valueCookie}; ${expires}; path=/`;
    }
}