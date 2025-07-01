const mongoose = require('mongoose');
const Campground = require('../models/campgrounds');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers')


mongoose.connect('mongodb://localhost:27017/yelp-camp')
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () =>{
    console.log('database connected')
})

const sample = (a) => a[Math.floor(Math.random()*a.length)]



const seedDB = async () => {
    await Campground.deleteMany({});
    for(let i=0 ; i<50; i++){
        const random1000 = Math.floor(Math.random()*1000)
        const price = Math.floor(Math.random()*100) + Math.floor(Math.random()*10)
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: `https://picsum.photos/400?random=${Math.random()}`,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium non pariatur tempore labore vitae qui veniam omnis eum quaerat nobis, assumenda autem corporis dolor magni reprehenderit soluta dolorum necessitatibus minima!',
            price: price
        })
        await camp.save();
    }
}
    


seedDB().then(()=>{
    mongoose.connection.close();
})