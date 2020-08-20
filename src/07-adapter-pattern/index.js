const ProductInfo = require('./context/ProductInfo')
const VendorProductInfoAdapter = require('./adapter/VendorProductInfoAdapter')

const myProducts = ["Product1","Product2"]

const myProductInfo = new ProductInfo(myProducts)
const vendorProductInfo= new VendorProductInfoAdapter()

myProductInfo.printAll();
vendorProductInfo.printAll();
