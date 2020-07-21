const FreightService = require("./context/freightService")
const VolumeFee = require("./strategy/volumeFee")
const WeightFee = require("./strategy/weightFee")
const Goods = require("./context/goods")

const manyGoods = [
  new Goods({ width: 100, height: 100, depth: 10, weight: 30 }),
  new Goods({ width: 20, height: 20, depth: 20, weight: 10 }),
  new Goods({ width: 13, height: 12, depth: 10, weight: 100 }),
]

const blackCat = new FreightService("黑貓宅急便", new VolumeFee())
const hsinchu = new FreightService("新竹貨運", new WeightFee())

console.log(
  blackCat._companyName + " Fee:" + blackCat.execCalculateFee(manyGoods)
)
console.log(
  hsinchu._companyName + " Fee:" + hsinchu.execCalculateFee(manyGoods)
)
