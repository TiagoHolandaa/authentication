import { faker } from "@faker-js/faker";
import axios from "axios";

export const mockAxios = (): jest.Mocked<typeof axios> => {
    const mockedAxiosResult = {
        status: faker.datatype.number(),
        data: faker.datatype.json()
    }

    const mockedAxios = axios as jest.Mocked<typeof axios>
    mockedAxios.post.mockResolvedValue(mockedAxiosResult)
    
    return mockedAxios;
}