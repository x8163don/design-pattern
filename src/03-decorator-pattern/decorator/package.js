function Package(car) {
  const price = car.cost()
  car.cost = function () {
    return 30 + price
  }
}

module.exports = Package
