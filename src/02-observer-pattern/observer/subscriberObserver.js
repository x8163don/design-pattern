const Observer = require('./observer')
module.exports = class SubscribersObserver extends Observer {
  constructor(name) {
    super();
    this._subscriberName = name
  }
  update(){
    console.log(`通知 '${this._subscriberName}'`);
  }
}
