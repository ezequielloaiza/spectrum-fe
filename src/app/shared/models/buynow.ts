import { ProductRequested } from '../../shared/models/productrequested';
import { FileProductRequested } from '../../shared/models/fileproductrequested';

export class BuyNow {

    public idUser: number;
    public idRole: number;
    public productRequestedList: Array<ProductRequested>;
    public fileProductRequestedList: Array<FileProductRequested>;

    public constructor() { }
  }
