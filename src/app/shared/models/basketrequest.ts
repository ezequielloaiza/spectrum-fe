import { ProductRequested } from '../../shared/models/productrequested';
import { FileProductRequested } from '../../shared/models/fileproductrequested';

export class BasketRequest {

    public idUser: number;
    public productRequestedList: Array<ProductRequested>;
    public fileProductRequestedList: Array<FileProductRequested>;

    public constructor() { }
  }
