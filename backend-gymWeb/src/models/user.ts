import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { IUser } from "./user.interface";

@Injectable({ lifeTime: DependencyLifeTime.Transient })
export class User implements IUser {
    id: number = 0;
    name: string = "";
    lastname: string = "";
    dni: number = 0;
    dateofbirth: string = "";
    phone: string = "";
    email: string = "";
    address: string = "";
    city: string = "";
    state: number = 1;
    username: string = "";
    password: string = "";
}
