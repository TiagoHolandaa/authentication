import { getCookie } from "@/application/manageCookie/getCookie";

export const checkUserAuthenticated = () => {
    const userToken = getCookie("token")

    return !!userToken
}