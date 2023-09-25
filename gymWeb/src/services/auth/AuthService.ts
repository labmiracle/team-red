import { IUser } from '../../interfaces/User.interface';
import { userServiceInstance } from '../http/user/UserService';

export class AuthService {
    constructor() {}

    private getTokenPayload(): Record<string, any> | null {
        const token = localStorage.getItem('jwtToken') as string;
        if (!token) {
            return null;
        }
        try {
            const payload = token.split('.')[1];
            const decodedPayload = atob(payload);
            const parsedPayload = JSON.parse(decodedPayload);
            const userId = parsedPayload.id;
            return userId;
        } catch (error) {
            console.error('Error decoding or parsing JWT:', error);
            return null;
        }
    }

    async auth(): Promise<IUser | null> {
        const userId = this.getTokenPayload();

        if (!userId) {
            return null;
        }

        try {
            const response = await userServiceInstance.getbyId(userId);

            if (!response) {
                throw new Error('Error en la solicitud');
            }

            return response;
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }
}

export const authServiceInstance = new AuthService();
