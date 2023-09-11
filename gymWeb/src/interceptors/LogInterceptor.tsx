import { IHttpInterceptor } from '@miracledevs/paradigm-web-fetch';
import { HttpResponse } from '@miracledevs/paradigm-web-fetch';

export class LogResponsesInterceptor implements IHttpInterceptor {
    afterReceive(response: HttpResponse): HttpResponse {
        console.log(
            `${response.url} responded with code ${response.statusText} [${response.status}]`
        );
        return response;
    }
}
