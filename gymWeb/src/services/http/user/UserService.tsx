import { ApiClient, apiClientInstance } from '../ApiClient';
import { IUser } from '../../../interfaces/User.interface';

const userPath = 'users/';

export class UserService {
    constructor(private readonly apiClient: ApiClient) {}

    async getAll(): Promise<IUser[]> {
        return await this.apiClient.get(userPath);
    }

    async getbyId(id: number): Promise<IUser> {
        return await this.apiClient.get(userPath, { id });
    }

    async newUser(user: IUser): Promise<IUser> {
        return await this.apiClient.post(userPath, {}, JSON.stringify(user));
    }

    async delete(id: number): Promise<void> {
        await this.apiClient.delete(userPath, { id });
    }

    async edit(user: IUser): Promise<IUser> {
        return await this.apiClient.put(
            `${userPath}edit/`,
            {},
            JSON.stringify(user)
        );
    }
}

export const userServiceInstance = new UserService(apiClientInstance);
