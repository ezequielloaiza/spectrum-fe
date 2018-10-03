import { BusinessType } from './business-type';

export class Company {
  public idCompany: number;
  public companyName: string;
  public contactName: string;
  public name: string;
  public address: string;
  public email: string;
  public country: string;
  public city: string;
  public state: string;
  public postalCode: string;
  public phone: string;
  public creditLimit: number;
  public balance: number;
  public businessType: BusinessType = new BusinessType();

  public constructor() { }

}
