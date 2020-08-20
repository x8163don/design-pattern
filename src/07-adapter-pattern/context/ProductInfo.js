module.exports = class ProductInfo{
  constructor(products=[]) {
    this.products = products;
  }

  printAll(){
    console.log(this.products)
  }
}
