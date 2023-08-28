import bcrypt from "bcrypt";
import { UserRepository } from "../repositories/user.repository";
import { AuthUser } from "../controllers/auth.user";
import { User } from "../models/user";
import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class AuthService {
    constructor(private repo: UserRepository) {}

    async validateUser(authUser: AuthUser): Promise<boolean> {
        const users = await this.repo.findByUserName(authUser.username);
        return await bcrypt.compare(authUser.password, users[0].password);
    }

    async registerUser(user: User) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await this.repo.insertOne(user);
    }
}
