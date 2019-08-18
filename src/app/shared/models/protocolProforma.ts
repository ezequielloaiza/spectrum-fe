export class ProtocolProforma {

  id: number;
  spectrumProforma: Boolean;
  additionalDocuments: string;
  outputs: string;
  protocolSpectrum: string;
  maximumAmount: number;
  documentation: string;
  fixedPrices: string;
  comments: string;
  emailComment: string;
  tariffCodes: string;
  clientId: any;
  supplierId: any;
  valid: boolean;
  originUsa: Boolean;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

}
