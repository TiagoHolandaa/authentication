import {faker} from "@faker-js/faker"
import { HttpPostParams } from "@/infrastructure/http/httpPostClient"

export const mockPostRequest = (): HttpPostParams<any> => ({
    url: faker.internet.url(),
    body: faker.datatype.json()
})