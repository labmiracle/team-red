import { ApiClient, apiClientInstance } from '../ApiClient';
import { IUserMail } from '../../../interfaces/User.interface';

export class ContactoService {
    constructor(private readonly apiClient: ApiClient) {}

    async sendMail(user: IUserMail) {
        return await this.apiClient.post('contacto', {}, JSON.stringify(user));
    }
}

export const contactoServiceInstance = new ContactoService(apiClientInstance);
