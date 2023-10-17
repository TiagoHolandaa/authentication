import CryptoJS from "crypto-js";

const key: any = process.env.NEXT_PUBLIC_SECRET_KEY
const dado = "U2FsdGVkX1/EwDPNQybhJnS+Z0P79uNFbXLQaxySkeE="
const dado1 = "U2FsdGVkX1/EwDPNQybhJnS+Z0P79uNFbXLQaxySkeE"

export const decryptData = (data: string) => {
    try {
        const decryptedBytes = CryptoJS.AES.decrypt(data, key)
        const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8))
        return decryptedData;
    } catch (error) {
        console.error('Error ao descriptografar o token:', error)
        return null;
    }
}