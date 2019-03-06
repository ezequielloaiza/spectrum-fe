import { InvoicePayment } from './invoicepayment';

export class FileInvoicePayment {

  public  id: number;
  public  invoicePayment: InvoicePayment;
  public  url: string;
  public  name: string;
  public  type: string;
  public  size: number;
  public  createdAt: Date;
  public  file: any;
  public  delete: boolean;

  public constructor() { }

  }
