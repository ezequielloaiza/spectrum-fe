import { ProductRequested } from './productrequested';
import { FileProductRequested } from './fileproductrequested';

export class BuyNow {

    public idUser: number;
    public idRole: number;
    public productRequestedList: Array<ProductRequested>;
    public fileProductRequestedList: Array<FileProductRequested>;

    public constructor() { }
  }
