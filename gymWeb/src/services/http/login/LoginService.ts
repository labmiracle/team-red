import { ApiClient, apiClientInstance } from '../ApiClient';
import { IUser, IAuthUser } from '../../../interfaces/User.interface';
import { HttpResponse } from '@miracledevs/paradigm-web-fetch';

export class LoginService {
    constructor(private readonly apiClient: ApiClient) {}

    async login(authUser: IAuthUser): Promise<HttpResponse | undefined> {
        const response: HttpResponse = await this.apiClient.post(
            'auth/login',
            {},
            JSON.stringify(authUser)
        );

        const token = (await response.text()) as string;
        localStorage.setItem('jwtoken', token);
        console.log('HOLA: ', token);

        return response;
    }

    async register(user: IUser): Promise<string> {
        return await this.apiClient.post(
            'auth/register',
            {},
            JSON.stringify(user)
        );
    }
}

export const loginServiceInstance = new LoginService(apiClientInstance);
