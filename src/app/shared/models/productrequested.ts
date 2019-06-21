import { Product } from './product';
import { FileProductRequested } from './fileproductrequested';

export class ProductRequested {
  public  idProductRequested: number;
  public  product: Product;
  public  detail: string;
  public  quantity: number;
  public  price: number;
  public  show: boolean;
  public  patient: string;
  public  observations: string;
  public  subtotal: number;
  public  groupId: number;
  public fileProductRequestedList: Array<FileProductRequested>;

  public constructor() { }

  }
