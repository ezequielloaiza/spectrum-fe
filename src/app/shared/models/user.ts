import { Membership } from './membership';

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
  public country: string;
  public city: string;
  public state: string;
  public postalCode: string;
  public phone: string;
  public nameSeller: string;
  public cardCode: string;
  public certificationCode: string;
  public pwsTemporal: boolean;
  public membership: Membership = new Membership();

  public constructor() { }

}
