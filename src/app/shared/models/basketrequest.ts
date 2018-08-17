import { ProductRequested } from '../../shared/models/productrequested';

export class BasketRequest {

    public idUser: number;
    public productRequestedList: Array<ProductRequested>;
    public constructor() { }
  }
