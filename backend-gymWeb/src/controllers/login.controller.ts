import { Action, ApiController, ConfigurationBuilder, Controller } from "@miracledevs/paradigm-express-webapi";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { User } from "../models/user";
import { error } from "console";
import { POST, Path } from "typescript-rest";
import { AuthUser } from "./auth.user";
import { Configuration } from "../configuration/configuration";
import jwt from "jsonwebtoken";
import { Tags } from "typescript-rest-swagger";

@Tags("User login")
@Path("/api/login")
@Controller({ route: "/api/login" })
export class LoginController extends ApiController {
    config: Configuration;
    constructor(config: ConfigurationBuilder) {
        super();
        this.config = config.build(Configuration);
    }

    @POST
    @Action({ route: "/", fromBody: true })
    post(authUser: AuthUser): string {
        try {
            //voy a la base de datos
            if (authUser.username === "admin" && authUser.password === "admin") {
                return jwt.sign({ user: "admin" }, this.config.jwtSecret);
            }
            this.httpContext.response.sendStatus(401);
        } catch {
            this.httpContext.response.sendStatus(500);

            return;
        }
    }
}
