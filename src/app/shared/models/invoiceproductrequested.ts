import { ProductRequested } from './productrequested';
import { Invoice } from './invoice';

export class InvoiceProductRequested {

  public  id: number;
  public  productRequested: ProductRequested;
  public  invoice: Invoice;
  public  urlImage: string;
  public  price: number;
  public  netAmount: number;

    public constructor() { }

  }
