import { ProductRequested } from '../../shared/models/productrequested';
import { OrderClient } from '../../shared/models/orderclient';

export class OrderClientProductRequested {

  public  id: number;
  public  productRequested: ProductRequested;
  public  order: OrderClient;
  public  urlImage: string;
  public patient: string;

    public constructor() { }

  }
