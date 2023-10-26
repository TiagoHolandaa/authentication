import CryptoJS from "crypto-js";

const key: any = process.env.NEXT_PUBLIC_SECRET_KEY

export const decryptData = (data: string) => {
    try {
        const decryptedBytes = CryptoJS.AES.decrypt(data, key)
        const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8)
        return decryptedData;
    } catch (error) {
        console.error('Error ao descriptografar o token:', error)
        return null;
    }
}