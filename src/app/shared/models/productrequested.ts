import { Product } from '../../shared/models/product';

export class ProductRequested {

  public  product: Product;
  public  detail: string;
  public  quantity: number;
  public  price: number;
  public  show: boolean;
  public  patient: string;
  public  observations: string;

    public constructor() { }

  }
