import { Injectable, DependencyLifeTime, DependencyContainer } from "@miracledevs/paradigm-web-di";
import { IFilter, HttpContext } from "@miracledevs/paradigm-express-webapi";
import { Configuration } from "../configuration/configuration";
import { ConfigurationBuilder } from "@miracledevs/paradigm-express-webapi";
import jwt from "jsonwebtoken";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class AdminFilter implements IFilter {
    private config: Configuration;
    constructor(private readonly configurationBuilder: ConfigurationBuilder) {
        this.config = configurationBuilder.build(Configuration);
    }

    async beforeExecute(httpContext: HttpContext): Promise<void> {
        try {
            const token = httpContext.request.headers["x-auth"] as string;
            if (!token || !jwt.verify(token, this.config.jwtSecret)) {
                httpContext.response.sendStatus(401);
                return;
            }
            const payload = token.split(".")[1];
            const decodedPayload = atob(payload);
            const parsedPayload = JSON.parse(decodedPayload);
            const role_id_request = parsedPayload.role_id;
            return role_id_request;
        } catch {
            httpContext.response.sendStatus(500);
        }
    }
}
