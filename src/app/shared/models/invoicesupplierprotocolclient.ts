import { Protocol } from './protocol';
import { InvoiceSupplier } from './invoice-supplier';

export class InvoiceSupplierProtocolClient {

  public idInvoiceSupplierProtocolClient: number;
  public protocolClient: Protocol;
  public idProtocolClient: number;
  public invoice: InvoiceSupplier;
  public idInvoice: number;
  public accNumber: string;
  public businessName: string;
  public recipient: string;
  public shippingAddress: string;
  public shippingMethod: string;
  public accountNumber: string;
  public comment: string;
  public emailComment: string;
  public country: number;
  public countryName: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

}
