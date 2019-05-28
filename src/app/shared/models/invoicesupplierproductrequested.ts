import { ProductRequested } from './productrequested';
import { InvoiceSupplier } from './invoice-supplier';

export class InvoiceSupplierProductRequested {

  public  idInvoiceProductRequested: number;
  public  productRequested: ProductRequested;
  public  idProductRequested: number;
  public  invoice: InvoiceSupplier;
  public  urlImage: string;
  public  price: number;
  public  tax: number;
  public  netAmount: number;
  public  description: string;
  public  quantity: number;
  public  delete: boolean;

    public constructor() { }

  }
