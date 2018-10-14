import { Country } from './country';

export class Seller {
    public idUser: number;
    public userId: number;
    public name: string;
    public password: string;
    public token: string;
    public address: string;
    public identification: string;
    public status: number;
    public email: string;
    public username: string;
    public country: Country = new Country();
    public city: string;
    public state: string;
    public postalCode: string;
    public phone: string;

    public constructor() { }

}
