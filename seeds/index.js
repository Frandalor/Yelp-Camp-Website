const mongoose = require('mongoose');
const Campground = require('../models/campgrounds');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/yelp-camp');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('database connected');
});

const sample = (a) => a[Math.floor(Math.random() * a.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 200; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price =
      Math.floor(Math.random() * 100) + Math.floor(Math.random() * 10);
    const camp = new Campground({
      author: '686e665f64706b3439cb7448',
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium non pariatur tempore labore vitae qui veniam omnis eum quaerat nobis, assumenda autem corporis dolor magni reprehenderit soluta dolorum necessitatibus minima!',
      price: price,
      geometry: {
        type: 'Point',
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      image: [
        {
          url: 'https://res.cloudinary.com/deawyqfb9/image/upload/v1752216405/YelpCamp/dbiijxxch2il0dncwojn.jpg',
          filename: 'YelpCamp/dbiijxxch2il0dncwojn',
        },
        {
          url: 'https://res.cloudinary.com/deawyqfb9/image/upload/v1752216910/YelpCamp/nhok6nxdjudbqx6ijazl.jpg',
          filename: 'YelpCamp/nhok6nxdjudbqx6ijazl',
        },
        {
          url: 'https://res.cloudinary.com/deawyqfb9/image/upload/v1752216914/YelpCamp/lgqdvipsrgw39yhks4mj.jpg',
          filename: 'YelpCamp/lgqdvipsrgw39yhks4mj',
        },
        {
          url: 'https://res.cloudinary.com/deawyqfb9/image/upload/v1752221589/YelpCamp/koynb4karfgkphr8ykff.jpg',
          filename: 'YelpCamp/koynb4karfgkphr8ykff',
        },
        {
          url: 'https://res.cloudinary.com/deawyqfb9/image/upload/v1752221592/YelpCamp/nmyuwnywqs1uktgx2yhy.jpg',
          filename: 'YelpCamp/nmyuwnywqs1uktgx2yhy',
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
