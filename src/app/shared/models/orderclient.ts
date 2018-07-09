import { Address } from "../../shared/models/address"
import { OrderClientProductRequested} from "../../shared/models/orderclientproductrequested"


export class OrderClient {

    public idOrder:number;
    public nameUser:string;
    public address:Address;
    public date:Date;
    public number:number;
    public subtotal:number;
    public total:number;
    public listProductRequested: Array<OrderClientProductRequested>;

    public constructor() { }
  
  }
  