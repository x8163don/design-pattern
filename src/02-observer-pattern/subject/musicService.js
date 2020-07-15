module.exports = class MusicService {
  constructor() {
    this._observers = [];
    this._music = [];
  }

  registerObservers(observer) {
    console.log(observer._subscriberName +"加入訂閱")
    this._observers.push(observer)
  }

  removeObservers(observer) {
    console.log(observer._subscriberName +"取消訂閱")
    this._observers = this._observers.filter(subscriber => JSON.stringify(subscriber) !== JSON.stringify(observer));
  }

  notifyObservers(song) {
   this._observers.forEach(item => item.update(song))
  }

  addNewMusic(song){
    this._music.push(song);
    this.notifyObservers(song)
  }
}
