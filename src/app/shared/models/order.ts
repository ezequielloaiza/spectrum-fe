import { Address } from './address';
import { OrderProductRequested} from './orderproductrequested';
export class Order {

    public idOrder: number;
    public nameUser: string;
    public address: Address;
    public date: Date;
    public number: number;
    public subtotal: number;
    public total: number;
    public status: number;
    public paymentStatus: number;
    public listProductRequested: Array<OrderProductRequested>;

    public constructor() { }

  }
