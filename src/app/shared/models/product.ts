export class Product {

  public idProduct: number;
  public name: string ;
  public price1: number;
  public price2: number;
  public price3: number;
  public priceType: Number;
  public minimum: number;
  public maximum: number;
  public increment: number;
  public material: string;
  public description_short: string;
  public description: string;
  public replacementPeriod: string;
  public warranty: number;
  public url: string;
  public stock: number;
  public infoAditional: string;
  public codeSpectrum: string;
  public types: string;
  public status: number;
  public priced1: number;
  public priced2: number;
  public priced3: number;

  public constructor() { }

  public haveAdditionalProduct(idSupplier) {
    return idSupplier === 2 ||  // Europa
           idSupplier === 14 || // Smartlens
           idSupplier === 'id supplier Xcel';
  }

  public haveInsertsDMV(idSupplier) {
    return idSupplier === 2 ||  // Europa
           idSupplier === 14 || // Smartlens
           idSupplier === 'id supplier Xcel';
  }

  public isInsertsDMV(idProduct) {
    return idProduct === 146 ||  // Europa
           idProduct === 307 || // Smartlens
           idProduct === 'id product dmv Xcel';
  }

  public isAdditionalProduct(idProduct) {
    return idProduct === 145 || // Noctch Europa
           idProduct === 146 || // DMV Inserts Europa
           idProduct === 147 || // Hydrapeg Europa
           idProduct === 305 || // Hydrapeg Smartlens
           idProduct === 306 || // Notch Smartlens
           idProduct === 307;   // Dmv Inserts Smartlens
  }

  public getInsertsID(product, supplierId) {
    switch (supplierId || product.supplier.idSupplier) {
      case 2: // Europa
        return 146;
      case 14: // Smartlens
        return 307;
      case 'id supplier Xcel': // X-cel
        return null;
      default:
        null;
    }
  }

}
