const maptilerApiKey = maptilerToken;
maptilersdk.config.apiKey = maptilerApiKey;

const map = new maptilersdk.Map({
  container: 'map',
  style: `https://api.maptiler.com/maps/streets/style.json?key=${maptilerApiKey}#1.0/0.00000/0.00000`,
  center: campground.geometry.coordinates,
  zoom: 10,
});

new maptilersdk.Marker()
  .setLngLat(campground.geometry.coordinates)
  .setPopup(
    new maptilersdk.Popup({ offset: 25 }).setHTML(
      `<h3>${campground.title}</h3><p>${campground.location}</p>`
    )
  )
  .addTo(map);
