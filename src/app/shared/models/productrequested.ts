import { Product } from './product';
import { FileProductRequested } from './fileproductrequested';

export class ProductRequested {
  public  idProductRequested: number;
  public  name: string;
  public  codeSpectrum: string;
  public  product: Product;
  public  detail: string;
  public  quantity: number;
  public  price: number;
  public  priceBase: number;
  public  show: boolean;
  public  patient: string;
  public  observations: string;
  public  subtotal: number;
  public  groupId: number;
  public  basketId: number;
  public  orderId: number;
  public fileProductRequestedList: Array<FileProductRequested>;
  public delete: boolean;
  public newCode: string;
  public newPrice: number;

  public constructor() { }

  }
