import { Address } from './address';
import { InvoiceProductRequested} from './invoiceproductrequested';
import { User } from './user';
export class Invoice {

    public idOrder: number;
    public idInvoice: number;
    public nameUser: string;
    public address: Address;
    public idAddress: number;
    public date: Date;
    public number: number;
    public subtotal: number;
    public total: number;
    public status: number;
    public user: User;
    public idUser: number;
    public listProductRequested: Array<InvoiceProductRequested>;

    public constructor() { }

  }
