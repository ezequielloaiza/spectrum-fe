import { Address } from './address';
import { InvoiceSupplierProductRequested} from './invoicesupplierproductrequested';
import { User } from './user';
export class InvoiceSupplier {

    public idOrder: number;
    public idInvoice: number;
    public nameUser: string;
    public address: Address;
    public idAddress: number;
    public date: Date;
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
    public listProductRequested: Array<InvoiceSupplierProductRequested>;

    public constructor() { }

  }
