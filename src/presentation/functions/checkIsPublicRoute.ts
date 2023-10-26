import { APP_ROUTES } from "../constants/appRouter";

/***
 * @param asPath string
 * @returns
 */

export const checkIsPublicRoute = (asPath:string) => {
    const appPublicRoute = Object.values(APP_ROUTES.public)

    return appPublicRoute.includes(asPath)
}