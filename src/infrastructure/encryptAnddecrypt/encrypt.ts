import CryptoJS from 'crypto-js';

const key: any = process.env.NEXT_PUBLIC_SECRET_KEY

export const encryptData = (data: string) => {
    try {
        const encryptedData = CryptoJS.AES.encrypt(data, key).toString()
        return encryptedData;
    } catch (error) {
        return null
    }
}