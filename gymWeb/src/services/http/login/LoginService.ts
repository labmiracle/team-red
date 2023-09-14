import { ApiClient, apiClientInstance } from '../ApiClient';
import { IUser, IAuthUser } from '../../../interfaces/User.interface';

export class LoginService {
    constructor(private readonly apiClient: ApiClient) {}
    baseUrl = import.meta.env.VITE_API_URL_BASE as string;
    async login(authUser: IAuthUser): Promise<void> {
        //     return await this.apiClient.post(
        //         'auth/login',
        //         {},
        //         JSON.stringify(authUser)
        //     );

        const response = await fetch(`${this.baseUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(authUser),
        });

        const jwtToken = await response.text();
        //const payload = jwtToken.split('.')[1];
        // const decodedPayload = atob(payload);
        // const parsedPayload = JSON.parse(decodedPayload);
        localStorage.setItem('jwtToken', jwtToken);
        const token = localStorage.getItem('jwtToken') as string;
        this.apiClient.authorize(token);
        return;
    }

    async register(user: IUser): Promise<string> {
        return await this.apiClient.post(
            'auth/register',
            {},
            JSON.stringify(user)
        );
    }

    logout = (): void => {
        localStorage.removeItem('jwtToken');
    };

    isAuthenticated = (): boolean => {
        const token = localStorage.getItem('jwtToken');
        return !!token;
    };

    isAuthorizedTo = (): {
        userId: number;
        username: string;
        role_id: number;
    } | null => {
        const token = localStorage.getItem('jwtToken');

        if (token) {
            try {
                const payload = token.split('.')[1];
                const decodedPayload = atob(payload);
                const parsedPayload = JSON.parse(decodedPayload);

                return {
                    userId: parsedPayload.Id,
                    username: parsedPayload.username,
                    role_id: parsedPayload.role_id,
                };
            } catch (error) {
                console.error('Error decoding or parsing JWT:', error);
                return null;
            }
        } else {
            return null;
        }
    };
}

export const loginServiceInstance = new LoginService(apiClientInstance);
