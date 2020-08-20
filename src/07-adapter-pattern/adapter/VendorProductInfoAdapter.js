const VendorProductInfo = require('../context/VendorProductInfo')
const ProductInfo = require('../context/ProductInfo')
module.exports = class VendorProductInfoAdapter extends ProductInfo{

  constructor() {
    super();
    this._vendorProduct = new VendorProductInfo()
  }

  printAll(){
    this._vendorProduct.showProductsDetail()
  }
}
