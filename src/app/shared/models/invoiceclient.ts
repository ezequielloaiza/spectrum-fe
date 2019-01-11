import { Address } from './address';
import { User } from './user';
import { InvoiceClientProductRequested } from './invoiceclientproductrequested';
export class InvoiceClient {

    public idInvoice: number;
    public nameUser: string;
    public address: Address;
    public idAddress: number;
    public date: Date;
    public dueDate: Date;
    public dateSend: Date;
    public number: number;
    public subtotal: number;
    public shipping: number;
    public due: number;
    public total: number;
    public status: number;
    public user: User;
    public idUser: number;
    public client: User;
    public idClient: number;
    public listProductRequested: Array<InvoiceClientProductRequested>;

    public constructor() { }

  }
