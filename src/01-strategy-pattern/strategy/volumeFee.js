const CalculateFee = require("./icalculateFee")
module.exports = class VolumeFee extends CalculateFee {
  calculateFee(goods = []) {
    let fee = 0
    goods.forEach((item) => {
      fee += (item._width * item._height * item._depth) / 1000
    })
    return fee
  }
}
