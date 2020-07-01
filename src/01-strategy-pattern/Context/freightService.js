const CalculateFee = require("../Strategy/icalculateFee")
module.exports = class FreightService {
  constructor(companyName, calculateFee = new CalculateFee()) {
    this._companyName = companyName
    this._calculateFee = calculateFee
  }

  execCalculateFee(goods = []) {
    return this._calculateFee.calculateFee(goods)
  }
}
