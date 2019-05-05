import { Address } from './address';
import { InvoiceSupplierProductRequested} from './invoicesupplierproductrequested';
import { User } from './user';
export class InvoiceSupplier {

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
    public original: boolean;
    public numberOriginal: number;
    public comments: string;
    public listProductRequested: Array<InvoiceSupplierProductRequested>;
    public listOrders: Array<Number>;
    public shippingInstructions: string;
    public termsAndConditions: string;
    public deliverTo: string;
    public customer: string;

    public constructor() { }

  }
