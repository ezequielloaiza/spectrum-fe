import { Address } from '../../shared/models/address';
import { OrderProductRequested} from '../../shared/models/orderproductrequested';
export class Order {

    public idOrder: number;
    public nameUser: string;
    public address: Address;
    public date: Date;
    public number: number;
    public subtotal: number;
    public total: number;
    public status: number;
    public listProductRequested: Array<OrderProductRequested>;

    public constructor() { }

  }
