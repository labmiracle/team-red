import { Injectable, DependencyLifeTime, DependencyContainer } from "@miracledevs/paradigm-web-di";
import { IFilter, HttpContext } from "@miracledevs/paradigm-express-webapi";

import { Configuration } from "../configuration/configuration";
import { ConfigurationBuilder } from "@miracledevs/paradigm-express-webapi";
import jwt from "jsonwebtoken";

/**
 * Requires a mysql connection from the connection pool for the ongoing request.
 */
@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class AuthFilter implements IFilter {
    config: Configuration;
    constructor(config: ConfigurationBuilder) {
        this.config = config.build(Configuration);
    }

    async beforeExecute(httpContext: HttpContext): Promise<void> {
        try {
            const token = httpContext.request.headers["x-auth"] as string;
            if (!token || !jwt.verify(token, this.config.jwtSecret)) {
                httpContext.response.sendStatus(401);
            }
        } catch {
            httpContext.response.sendStatus(500);
        }
    }
}
