import { Action, ApiController, Controller, HttpMethod } from "@miracledevs/paradigm-express-webapi";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { User } from "../models/user";
import { UserRepository } from "../repositories/user.repository";
import { IUser } from "../models/user.interface";
import { InsertionResult } from "../core/repositories/commands/db.command";
import { DELETE, GET, POST, PUT, Path, PathParam, Security } from "typescript-rest";
import { Tags } from "typescript-rest-swagger";
import { AuthFilter } from "../filters/auth.filter";

@Path("/api/users")
@Security("x-auth")
@Controller({
    route: "/api/users",
    // filters: [AuthFilter]
})
@Tags("User")
export class UserController extends ApiController {
    constructor(private repo: UserRepository) {
        super();
    }

    @GET
    @Action({ route: "/" })
    async getAll(): Promise<IUser[]> {
        try {
            return await this.repo.getAll();
        } catch (error) {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }

    @GET
    @Path(":id")
    @Action({ route: "/:id" })
    async getById(@PathParam("id") id: number): Promise<IUser> {
        try {
            return await this.repo.getById(id);
        } catch (error) {
            this.httpContext.response.sendStatus(404);
            return;
        }
    }
    @POST
    @Action({ route: "/", method: HttpMethod.POST, fromBody: true })
    async newUser(user: User): Promise<User> {
        try {
            const metadata: InsertionResult<number> = await this.repo.insertOne(user);
            user.id = metadata.insertId;
            this.httpContext.response.status(201).send(user);
            return user;
        } catch (error) {
            console.log("newUser:", error);
            this.httpContext.response.sendStatus(500);
            return;
        }
    }
    @DELETE
    @Path(":id")
    @Action({ route: "/:id", method: HttpMethod.DELETE })
    async delete(@PathParam("id") id: number): Promise<User> {
        try {
            const user = await this.repo.getById(id);
            await this.repo.delete(id);
            return user;
        } catch (error) {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }
    @PUT
    @Path("/edit")
    @Action({ route: "/edit", method: HttpMethod.PUT, fromBody: true })
    async update(user: User): Promise<User> {
        try {
            const user = this.httpContext.request.body.user;
            await this.repo.update(user);
            this.httpContext.response.status(200).send(user);
            return user;
        } catch (error) {
            console.log("EDIT: ", error);
            this.httpContext.response.sendStatus(500);
            return;
        }
    }
}
