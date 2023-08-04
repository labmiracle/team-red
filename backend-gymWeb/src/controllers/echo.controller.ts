import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { User } from "../models/user";
import { error } from "console";

@Controller({ route: "/api/echo" })
export class EchoController extends ApiController {
    constructor() {
        super();
    }

    @Action({ route: "/:message" })
    get(message: string): string {
        try {
            //console.log("Estoy en el ECHO controller.");
            //const msn = this.httpContext.request.body.message;
            //this.httpContext.response.send(message);
            return message;
        } catch {
            this.httpContext.response.sendStatus(500);
            console.log("estoy en el Error del controller echo");
            return;
        }
    }

    @Action({ route: "/", fromBody: true })
    post(user: User): User {
        try {
            if (user.id !== 1) {
                throw Error("No es id 1");
            }
            //console.log("Estoy en el ECHO controller.");
            //const msn = this.httpContext.request.body.message;
            //this.httpContext.response.send(message);
            return user;
        } catch {
            this.httpContext.response.sendStatus(500);
            console.log("estoy en el Error del controller echo");
            return;
        }
    }
}
