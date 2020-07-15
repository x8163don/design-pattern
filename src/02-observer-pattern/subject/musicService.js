module.exports = class Spotify {
  constructor() {
    this._observers = [];
  }

  registerObservers(observer) {
    this._observers.push(observer)
  }

  removeObservers(observer) {
    this._observers = this._observers.filter(subscriber => JSON.stringify(subscriber) !== JSON.stringify(observer));
  }

  notifyObservers() {
   this._observers.forEach(item => item.update())
  }
}
