import { ProductRequested } from '../../shared/models/productrequested';
import { Order } from '../../shared/models/order';

export class OrderProductRequested {

  public  id: number;
  public  productRequested: ProductRequested;
  public  order: Order;
  public  urlImage: string;

    public constructor() { }

  }
