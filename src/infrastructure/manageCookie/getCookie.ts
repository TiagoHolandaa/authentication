import { decryptData } from "../encryptAnddecrypt/decrypt"

export const getCookie = (name: string) => {
    const cookies = document.cookie.split("; ").find((row) => row.startsWith(`${name}`))?.split("=")[1]
    if (cookies) {
        if (cookies) {
            const cookieValueEncrypted = decodeURIComponent(cookies)
            const cookieValueDecrypted = decryptData(cookieValueEncrypted)
            if (cookieValueDecrypted) {
                return cookieValueDecrypted
            } else {
                console.error("Valor do cookie inválido.")
            }
        }
    }
    return null
}