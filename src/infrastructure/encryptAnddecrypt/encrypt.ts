import CryptoJS from 'crypto-js';

const key: any = process.env.NEXT_PUBLIC_SECRET_KEY
const dado = "tiago"

export const encryptData = (data: string) => {
    try {
        const encryptedData = CryptoJS.AES.encrypt(data, key).toString()
        return encryptedData;
    } catch (error) {
        console.error("Error encriptar o dado", error)
        return null
    }
}