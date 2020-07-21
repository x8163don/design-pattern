const CalculateFee = require("./icalculateFee")
module.exports = class WeightFee extends CalculateFee {
  calculateFee(goods = []) {
    let fee = 0
    goods.forEach((item) => {
      fee += item._weight * 0.6
    })
    return fee
  }
}
