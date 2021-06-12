import { ProductRequested } from './productrequested';
import { Order } from './order';

export class OrderProductRequested {

  public  id: number;
  public  productRequested: ProductRequested;
  public  fileProductRequestedList: Array<any>;
  public  order: Order;
  public  urlImage: string;

    public constructor() { }

  }
