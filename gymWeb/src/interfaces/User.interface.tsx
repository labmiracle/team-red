export interface IUser {
    id: number;
    firstname: string;
    lastname: string;
    dni: number;
    dateofbirth: string;
    phone: number;
    email: string;
    address: string;
    city: string;
    state: string;
    username: string;
    password: string;
    pay_date: string;
    role_id: number;
}

export interface IEditedUser {
    id: number;
    firstname?: string | undefined;
    lastname?: string | undefined;
    dni?: number | undefined;
    dateofbirth?: string | undefined;
    phone?: number | undefined;
    email?: string | undefined;
    address?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    username?: string | undefined;
    password?: string | undefined;
    pay_date?: string | undefined;
    role_id?: number | undefined;
}

export interface IAuthUser {
    username: string;
    password: string;
}
