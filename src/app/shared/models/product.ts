export class Product {

  public idProduct: number;
  public name: string ;
  public price1: number;
  public price2: number;
  public price3: number;
  public price4: number;
  public price5: number;
  public price6: number;
  public price7: number;
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
           idSupplier === 13;
  }

  public haveInsertsDMV(idSupplier) {
    return idSupplier === 2 ||  // Europa
           idSupplier === 14 || // Smartlens
           idSupplier === 13;
  }

  public isInsertsDMV(idProduct) {
    return idProduct === 146 ||  // Europa
           idProduct === 307 || // Smartlens
           idProduct === 311;
  }

  public isAdditionalProduct(idProduct) {
    return idProduct === 145 || // Noctch Europa
           idProduct === 146 || // DMV Inserts Europa
           idProduct === 147 || // Hydrapeg Europa
           idProduct === 305 || // Hydrapeg Smartlens
           idProduct === 306 || // Notch Smartlens
           idProduct === 307 || // Dmv Inserts Smartlens
           idProduct === 310 || // Hydrapeg Xcel
           idProduct === 311; // Dmv Xcel
  }

  public getInsertsID(product, supplierId) {
    switch (supplierId || product.supplier.idSupplier) {
      case 2: // Europa
        return 146;
      case 14: // Smartlens
        return 307;
      case 13: // X-cel
        return 311;
      default:
        null;
    }
  }

  public xcelWithDmv(idProduct) {
    return idProduct === 308; // Atlantis id
  }

}
