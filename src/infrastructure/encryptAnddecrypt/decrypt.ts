import CryptoJS from "crypto-js";

const key: any = process.env.NEXT_PUBLIC_SECRET_KEY

export const decryptData = (data: string) => {
    try {
        const decryptedData = decrypt(data, key)
        return decryptedData
    } catch (error) {
        console.error('Error ao descriptografar o token:', error)
        return null;
    }
}