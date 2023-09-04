import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { IUser } from "./user.interface";

@Injectable({ lifeTime: DependencyLifeTime.Transient })
export class User implements IUser {
    id: number = 0;
    firstname: string = "";
    lastname: string = "";
    dni: number = 0;
    dateofbirth: string = "1999-12-05";
    phone: number = 0;
    email: string = "";
    address: string = "";
    city: string = "";
    state: string = "";
    username: string = "";
    password: string = "";
    pay_date: string = "1999-12-05";
    role_id: number = 2;
}
