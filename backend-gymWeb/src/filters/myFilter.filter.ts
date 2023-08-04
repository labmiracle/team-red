import { Injectable, DependencyLifeTime, DependencyContainer } from "@miracledevs/paradigm-web-di";
import { IFilter, HttpContext } from "@miracledevs/paradigm-express-webapi";
import { MySqlConnector } from "../core/mysql/mysql.connector";
import { MySqlConnection } from "../core/mysql/mysql.connection";

/**
 * Requires a mysql connection from the connection pool for the ongoing request.
 */
@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class MyFilter implements IFilter {
    private connection: MySqlConnection;

    constructor() {}

    async beforeExecute(httpContext: HttpContext): Promise<void> {
        try {
            console.log("Antes del filtro....");
        } catch {
            httpContext.response.sendStatus(500);
            console.log("Estoy en el filtro");
        }
    }

    async afterExecute(): Promise<void> {
        console.log("Después del filtro...");
    }

    async onError() {
        console.error("Ups!");
    }
}
