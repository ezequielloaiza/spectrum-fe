import { BusinessType } from './business-type';
import { Country } from './country';

export class Company {
  public idCompany: number;
  public companyName: string;
  public contactName: string;
  public name: string;
  public address: string;
  public email: string;
  public country: Country = new Country();
  public city: string;
  public state: string;
  public postalCode: string;
  public shippingInstructions: string;
  public phone: string;
  public creditLimit: number;
  public balance: number;
  public paymentMethod: number;
  public creditDays: number;
  public businessType: BusinessType = new BusinessType();

  public constructor() { }

}
