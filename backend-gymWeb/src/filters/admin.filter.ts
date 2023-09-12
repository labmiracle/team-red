import { Injectable, DependencyLifeTime, DependencyContainer } from "@miracledevs/paradigm-web-di";
import { IFilter, HttpContext } from "@miracledevs/paradigm-express-webapi";
import { Configuration } from "../configuration/configuration";
import { ConfigurationBuilder } from "@miracledevs/paradigm-express-webapi";
import { UserRepository } from "../repositories/user.repository";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class AdminFilter implements IFilter {
    private config: Configuration;
    constructor(private readonly configurationBuilder: ConfigurationBuilder, private repo: UserRepository) {
        this.config = configurationBuilder.build(Configuration);
    }

    async beforeExecute(httpContext: HttpContext): Promise<void> {
        try {
            const token = httpContext.request.headers["x-auth"] as string;
            const payload = token.split(".")[1];
            const decodedPayload = atob(payload);
            const parsedPayload = JSON.parse(decodedPayload);
            const username = parsedPayload.username;
            const user = await this.repo.findByUserName(username);
            if (user[0].role_id != 1) {
                httpContext.response.sendStatus(401);
                return;
            }
            return;
        } catch {
            httpContext.response.sendStatus(500);
        }
    }
}
