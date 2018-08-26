import { Product } from '../../shared/models/product';
import { FileProductRequested } from '../../shared/models/fileproductrequested';

export class ProductRequested {

  public  product: Product;
  public  detail: string;
  public  quantity: number;
  public  price: number;
  public  show: boolean;
  public  patient: string;
  public  observations: string;
  public  files: Array<FileProductRequested>;

    public constructor() { }

  }
