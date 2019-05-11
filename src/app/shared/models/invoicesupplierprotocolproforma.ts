import { ProtocolProforma } from './protocolProforma';
import { InvoiceSupplier } from './invoice-supplier';

export class InvoiceSupplierProtocolProforma {

  public idInvoiceSupplierProtocolProforma: number;
  public protocolProforma: ProtocolProforma;
  public idProtocolClient: number;
  public invoice: InvoiceSupplier;
  public idInvoice: number;
  public spectrumProforma: Boolean;
  public additionalDocuments: string;
  public outputs: string;
  public documentation: string;
  public fixedPrices: string;
  public comments: string;
  public emailComment: string;
  public tariffCodes: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

}
