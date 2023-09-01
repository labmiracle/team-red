export class ApiClient {
    private readonly baseUrl: string | undefined;
    private readonly httpClient: HttpClient;
    constructor() {
        this.baseUrl = process.env.MY_APP_API_URL;
        this.httpClient = new HttpClient();
        this.httpClient.registerInterceptor(
            new ContentTypeInterceptor('application/json')
        );
        // acá se puede agregar la redirección si vuelve un statucode 401 (redirect /logon)
    }
    authorize(token: string): void {
        this.httpClient.registerInterceptor(
            new AuthorizationInterceptor(token)
        );
    }
    async get<TResult>(
        url: string,
        queryString?: QueryString
    ): Promise<TResult> {
        return (await (
            await this.httpClient.get(`${this.baseUrl}/${url}`, queryString)
        ).json()) as TResult;
    }
    async post<TResult>(
        url: string,
        queryString?: QueryString,
        body?: BodyInit
    ): Promise<TResult> {
        return (await (
            await this.httpClient.post(
                `${this.baseUrl}/${url}`,
                queryString,
                body
            )
        ).json()) as TResult;
    }
    async put<TResult>(
        url: string,
        queryString?: QueryString,
        body?: BodyInit
    ): Promise<TResult> {
        return (await (
            await this.httpClient.put(
                `${this.baseUrl}/${url}`,
                queryString,
                body
            )
        ).json()) as TResult;
    }
    async patch<TResult>(
        url: string,
        queryString?: QueryString,
        body?: BodyInit
    ): Promise<TResult> {
        return (await (
            await this.httpClient.patch(
                `${this.baseUrl}/${url}`,
                queryString,
                body
            )
        ).json()) as TResult;
    }
    async delete<TResult>(
        url: string,
        queryString?: QueryString
    ): Promise<TResult> {
        return (await (
            await this.httpClient.delete(`${this.baseUrl}/${url}`, queryString)
        ).json()) as TResult;
    }
}
export const apiClientInstance = new ApiClient();

class CountiesService {
    private readonly url: string;
    constructor(private readonly apiClient: ApiClient) {
        this.url = 'counties';
    }
    async getAll(): Promise<County[]> {
        return await this.apiClient.get<County[]>(`${this.url}/getAll`);
    }
    async getById(id: number): Promise<County[]> {
        return await this.apiClient.get<County[]>(`${this.url}/getById/${id}`);
    }
    async getGeoJSONs(): Promise<GeoJSON[]> {
        return await this.apiClient.post<GeoJSON[]>(`${this.url}/getGeoJSONs`);
    }
    async getGeoJSONFeatures(): Promise<string> {
        return await this.apiClient.post<string>(
            `${this.url}/getGeoJSONFeatures`
        );
    }
}
export const countryServiceInstance = new CountryService(apiClientInstnace);
