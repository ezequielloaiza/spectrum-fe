import { ProductRequested } from './productrequested';
import { FileProductRequested } from './fileproductrequested';

export class BasketRequest {

    public idUser: number;
    public productRequestedList: Array<ProductRequested>;
    public fileProductRequestedList: Array<FileProductRequested>;

    public constructor() { }
  }
