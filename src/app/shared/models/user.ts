import { Membership } from './membership';
import { Country } from './country';
import { Company } from './company';

export class User {
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
  public nameSeller: string;
  public cardCode: string;
  public certificationCode: string;
  public accSpct: string;
  public avatar: string;
  public pwsTemporal: boolean;
  public membership: Membership = new Membership();
  public company: Company = new Company();

  public constructor() { }

}
