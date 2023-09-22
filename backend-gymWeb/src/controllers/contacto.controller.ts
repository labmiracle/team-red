import { Action, ApiController, ConfigurationBuilder, Controller, HttpMethod } from "@miracledevs/paradigm-express-webapi";
import { POST, Path } from "typescript-rest";
import { Configuration } from "../configuration/configuration";
import { Tags } from "typescript-rest-swagger";
import sendGrid from "@sendGrid/mail";
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
        const apikey = "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";
        sendGrid.setApiKey(apikey);
        const msg = {
            to: "gastonfalena4@gmail.com",
            from: user.email,
            subject: `Contacto desde gym web por ${user.name}`,
            text: user.message,
            html: "<strong>and easy to do anywhere, even with Node.js</strong>",
        };
        sendGrid
            .send(msg)
            .then(() => {
                console.log("Email sent");
            })
            .catch(error => {
                console.error(error);
            });
    }
}
