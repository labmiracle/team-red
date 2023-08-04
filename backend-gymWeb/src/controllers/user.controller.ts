import { Action, ApiController, Controller, HttpMethod } from "@miracledevs/paradigm-express-webapi";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { User } from "../models/user";
import { UserRepository } from "../repositories/user.repository";
import { IUser } from "../models/user.interface";
import { InsertionResult } from "../core/repositories/commands/db.command";

@Controller({ route: "/api/users" })
export class UserController extends ApiController {
    constructor(private repo: UserRepository) {
        super();
    }

    @Action({ route: "/" })
    async getAll(): Promise<IUser[]> {
        try {
            return await this.repo.getAll();
        } catch (error) {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }

    @Action({ route: "/state/:state" })
    async getAllByStatus(state: number): Promise<IUser[]> {
        try {
            return await this.repo.find("state = ?", [state]);
        } catch (error) {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }

    @Action({ route: "/:id" })
    async getById(id: number): Promise<IUser> {
        try {
            return await this.repo.getById(id);
        } catch (error) {
            this.httpContext.response.sendStatus(404);
            return;
        }
    }

    @Action({ route: "/", method: HttpMethod.POST, fromBody: true })
    async newUser(user: User): Promise<User> {
        try {
            const metadata: InsertionResult<number> = await this.repo.insertOne(user);
            user.id = metadata.insertId;
            this.httpContext.response.status(201).send(user);
            return user;
        } catch (error) {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }

    @Action({ route: "/:id" })
    async delete(id: number): Promise<User> {
        try {
            const user = await this.repo.getById(id);
            user.state = 0;
            await this.repo.update(user);
            return user;
        } catch (error) {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }
}
