const MusicService = require('./subject/musicService')
const SubscriberObserver = require('./observer/subscriberObserver')
const Song = require('./context/song')

const goodMusic = new MusicService();

const bevis = new SubscriberObserver("Bevis");
const mike = new SubscriberObserver("Mike");

goodMusic.registerObservers(bevis)
goodMusic.registerObservers(mike)

goodMusic.addNewMusic(new Song({name:'Capsize', author:'Iris Temple'}));

goodMusic.removeObservers(mike)

goodMusic.addNewMusic(new Song({name:'Autumn Breeze', author:'Jida,Rachel Lim'}));

goodMusic.registerObservers(mike)

goodMusic.addNewMusic(new Song({name:'At Last', author:'Tandems\'91'}));
