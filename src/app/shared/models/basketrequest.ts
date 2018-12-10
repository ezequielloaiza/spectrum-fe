import { ProductRequested } from './productrequested';
import { FileProductRequested } from './fileproductrequested';

export class BasketRequest {

    public idUser: number;
    public productRequestedList: Array<ProductRequested>;
    public listFileRightEye: Array<FileProductRequested>;
    public listFileLeftEye: Array<FileProductRequested>;

    public constructor() { }
}
