import { decryptData } from "../../infrastructure/encryptAnddecrypt/decrypt"

export const getCookie = (name: string) => {
    try {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const [cookieName, ...cookieValueParts] = cookie.trim().split('=');
            if (cookieName === name) {
                const cookieValue = cookieValueParts.join('=');
                const cookieValueEncrypted = decodeURIComponent(cookieValue)
                const cookieValueDecrypted = decryptData(cookieValueEncrypted)
                return cookieValueDecrypted
            }
        }
    } catch (error) {
        console.log('Erro em encontrar o value do token: ' + error)
    }
}