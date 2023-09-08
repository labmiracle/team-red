import { Action, ApiController, ConfigurationBuilder, Controller, HttpMethod } from "@miracledevs/paradigm-express-webapi";
import { User } from "../models/user";
import { POST, Path } from "typescript-rest";
import { AuthUser } from "../models/auth.user";
import { Configuration } from "../configuration/configuration";
import jwt from "jsonwebtoken";
import { Tags } from "typescript-rest-swagger";
import { UserRepository } from "../repositories/user.repository";
import { AuthService } from "../services/auth.service";

@Tags("Auth")
@Path("/api/auth")
@Controller({ route: "/api/auth" })
export class LoginController extends ApiController {
    config: Configuration;
    salt: string;
    constructor(config: ConfigurationBuilder, private repo: UserRepository, private auth: AuthService) {
        super();
        this.config = config.build(Configuration);
    }

    @POST
    @Path("/login")
    @Action({ route: "/login", fromBody: true })
    async post(authUser: AuthUser): Promise<string> {
        try {
            const validUsername = await this.auth.validateAuthUsername(authUser);
            const validPassword = await this.auth.validateAuthPassword(authUser);

            if (validUsername && validPassword) {
                const user = await this.repo.findByUserName(authUser.username);
                const payload = { username: user[0].username, role_id: user[0].role_id };
                const token = jwt.sign(payload, this.config.jwtSecret);

                return token;
            }
            this.httpContext.response.sendStatus(401);
        } catch (error) {
            console.log("Login error: ", error);
            this.httpContext.response.sendStatus(500);

            return;
        }
    }

    @POST
    @Path("/register")
    @Action({ route: "/register", fromBody: true, method: HttpMethod.POST })
    async register(user: User): Promise<string> {
        try {
            //falta lógica de validación de campos requeridos //
            // que se llamaría desde services -> auth.services.ts //
            const usernameValid = await this.auth.validateUsername(user);
            const emailValid = await this.auth.validateEmail(user);
            const dniValid = await this.auth.validateDni(user);
            if (!usernameValid) {
                this.httpContext.response.status(404).send("The user already exists");
                return;
            }
            if (!emailValid) {
                this.httpContext.response.status(404).send("The email already exists");
                return;
            }
            if (!dniValid) {
                this.httpContext.response.status(404).send("The dni already exists");
                return;
            }
            const fields: (string | boolean)[] = await this.auth.validateFields(user);
            if (!fields[1]) {
                this.httpContext.response.status(404).send(fields[0]);
                return;
            }
            this.auth.registerUser(user);
            this.httpContext.response.sendStatus(201);
        } catch {
            this.httpContext.response.sendStatus(500);

            return;
        }
    }
}
