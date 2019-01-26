import { ProductRequested } from './productrequested';
import { InvoiceClient } from './invoiceclient';

export class InvoiceClientProductRequested {

  public  id: number;
  public  productRequested: ProductRequested;
  public  idProductRequested: number;
  public  invoice: InvoiceClient;
  public  urlImage: string;
  public  price: number;
  public  tax: number;
  public  netAmount: number;

    public constructor() { }

  }
