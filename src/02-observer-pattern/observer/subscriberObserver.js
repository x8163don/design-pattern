module.exports = class SubscribersObserver {
  constructor(name) {
    this._subscriberName = name
  }
  update(song){
    console.log(`通知 '${this._subscriberName}' 現在可以從服務上收聽到 '${song._name} by ${song._author}'`);
  }
}
