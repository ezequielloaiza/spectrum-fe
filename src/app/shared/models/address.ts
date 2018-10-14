import { Country } from './country';

export class Address {

    public name: string;
    public country: Country = new Country;
    public city: String ;
    public state: String;

    public constructor() { }
}
