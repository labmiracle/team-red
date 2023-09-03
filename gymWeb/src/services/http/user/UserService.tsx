import { ApiClient, apiClientInstance } from '../ApiClient';
import { IUser } from '../../../interfaces/User.interface';

export class UserService {
    constructor(private readonly apiClient: ApiClient) {}

    async getAll(): Promise<IUser[]> {
        return await this.apiClient.get('users');
    }

    async getbyId(id: number): Promise<IUser> {
        return await this.apiClient.get('users', { id });
    }

    async newUser(user: IUser): Promise<IUser> {
        return await this.apiClient.post('users', {}, JSON.stringify(user));
    }

    async delete(id: number): Promise<void> {
        await this.apiClient.delete('users', { id });
    }

    async edit(user: IUser): Promise<IUser> {
        return await this.apiClient.put(
            `'users/edit/`,
            {},
            JSON.stringify(user)
        );
    }
}

export const userServiceInstance = new UserService(apiClientInstance);
