import { FileInvoicePayment } from './fileinvoicepayment';
import { InvoiceClientInvoicePayment } from './invoiceclientinvoicepayment';


export class InvoicePayment {
    public idInvoicePayment: number;
    public typePayment: number;
    public date: Date;
    public referenceNumber: String;
    public amount: number;
    public bank: String;
    public status: number;
    public description: String;
    public fileInvoicePaymentList: Array<FileInvoicePayment>;
    public invoiceClientInvoicePaymentList: Array<InvoiceClientInvoicePayment>;

    public constructor() { }

  }
