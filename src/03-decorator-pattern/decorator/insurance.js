function Insurance(car) {
  const price = car.cost()
  car.cost = function () {
    return 10 + price
  }
}

module.exports = Insurance
