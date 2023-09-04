import { ApiClient, apiClientInstance } from '../ApiClient';
import { IAuthUser } from '../../../interfaces/AuthUser.interface';
import { IUser } from '../../../interfaces/User.interface';

export class LoginService {
    constructor(private readonly apiClient: ApiClient) {}

    async login(authUser: IAuthUser): Promise<string> {
        return await this.apiClient.post(
            'auth/login',
            {},
            JSON.stringify(authUser)
        );
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
