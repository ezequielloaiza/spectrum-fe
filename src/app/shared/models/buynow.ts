import { ProductRequested } from './productrequested';
import { FileProductRequested } from './fileproductrequested';

export class BuyNow {

    public idUser: number;
    public idRole: number;
    public productRequestedList: Array<ProductRequested>;
    public listFileRightEye: Array<FileProductRequested>;
    public listFileLeftEye: Array<FileProductRequested>;

    public constructor() { }
  }
