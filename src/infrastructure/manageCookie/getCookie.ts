import { decryptData } from "../encryptAnddecrypt/decrypt"

export const getCookie = (name: string) => {
    try {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const [cookieName, ...cookieValueParts] = cookie.trim().split('=');
            if (cookieName === name) {
                const cookieValue = cookieValueParts.join('=');
                const cookieValueEncrypted = decodeURIComponent(cookieValue)
                const cookieValueDecrypted = decryptData(cookieValueEncrypted)
                if (cookieValueDecrypted) {
                    return cookieValueDecrypted
                } else {
                    console.log(cookieValueEncrypted)
                }
            }
        }
    } catch (error) {
        throw new Error('Erro em encontrar o value do token: ' + error)
    }
}