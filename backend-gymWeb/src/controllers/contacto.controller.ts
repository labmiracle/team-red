import { Action, ApiController, ConfigurationBuilder, Controller, HttpMethod } from "@miracledevs/paradigm-express-webapi";
import { POST, Path } from "typescript-rest";
import { Configuration } from "../configuration/configuration";
import { Tags } from "typescript-rest-swagger";
import transporter from "../configuration/mailer";
import { IUserMail } from "../models/user.interface";

@Tags("Auth")
@Path("/api")
@Controller({ route: "/api" })
export class ContactoController extends ApiController {
    config: Configuration;
    salt: string;
    constructor(config: ConfigurationBuilder) {
        super();
        this.config = config.build(Configuration);
    }

    @POST
    @Path("/contacto")
    @Action({ route: "/contacto", fromBody: true })
    async post(user: IUserMail) {
        try {
            await transporter.sendMail({
                from: user.email,
                to: "gastonfalena@gmail.com",
                subject: `GYM WEB CONTACTO`,
                text: `${user.name} envio desde ${user.email} el siguiente mensaje de contacto:\n${user.message}`,
            });
        } catch (error) {
            console.error(error);
        }
    }
}
