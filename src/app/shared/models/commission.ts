import { InvoiceClient } from './invoiceclient';

export class Commission {

    public idCommission: number;
    public date: Date;
    public total: number;
    public invoiceClient: InvoiceClient;
    public idUser: number;

    public constructor() { }
}
