import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { Tags } from "typescript-rest-swagger";
import { Path } from "typescript-rest";

@Path("/api/health")
@Controller({ route: "/api/health" })
@Tags("Server health")
export class HealthController extends ApiController {
    constructor(private connection: MySqlConnection) {
        super();
    }

    @Action({ route: "/" })
    async get(): Promise<void> {
        try {
            await this.connection.connection.ping();
            this.httpContext.response.sendStatus(200);
            return;
        } catch {
            this.httpContext.response.sendStatus(500);
            console.log("estoy en el controller");
            return;
        }
    }
}
