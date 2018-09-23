import { Address } from './address';
import { OrderProductRequested} from './orderproductrequested';
import { User } from './user';
export class Order {

    public idOrder: number;
    public nameUser: string;
    public address: Address;
    public date: Date;
    public number: number;
    public subtotal: number;
    public total: number;
    public status: number;
    public user: User;
    public paymentStatus: number;
    public dateSend: Date;
    public listProductRequested: Array<OrderProductRequested>;

    public constructor() { }

  }
