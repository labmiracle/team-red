import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { EditRepositoryBase } from "../core/repositories/edit.repository";
import { User } from "../models/user";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { DependencyContainer } from "@miracledevs/paradigm-web-di";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class UserRepository extends EditRepositoryBase<User, number> {
    constructor(dependencyContainer: DependencyContainer, connection: MySqlConnection) {
        super(dependencyContainer, connection, User, "user");
    }

    async findByUserName(username: string): Promise<User[]> {
        const rows = await this.find("username = ? ", [username]);
        return rows;
    }
    async findByEmail(email: string): Promise<User[]> {
        const rows = await this.find("email = ? ", [email]);
        return rows;
    }
    async findByDni(dni: number): Promise<User[]> {
        const rows = await this.find("dni = ? ", [dni]);
        return rows;
    }
}
