export class Protocol {

  id: number;
  accNumber: string;
  businessName: string;
  recipient: string;
  shippingAddress: string;
  dmv: string;
  shippingFrecuency: string;
  shippingMethod: string;
  accountNumber: string;
  shippingDetail: string;
  comment: string;
  emailComment: string;
  clientId: any;
  supplierId: any;
  country: number;
  countryName: string;
  valid: boolean;
  constructor(obj?: any) {
    Object.assign(this, obj);
  }

}
