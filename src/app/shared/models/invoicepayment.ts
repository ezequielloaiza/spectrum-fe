import { FileInvoicePayment } from './fileinvoicepayment';


export class InvoicePayment {
    public idInvoicePayment: number;
    public idInvoiceClient: number;
    public typeId: number;
    public date: Date;
    public referenceNumber: String;
    public amount: number;
    public bank: String;
    public status: number;
    public description: String;
    public fileInvoicePaymentList: Array<FileInvoicePayment>;

    public constructor() { }

  }
