const MAP_BOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiYXNic2FidWoiLCJhIjoiY2w5NGM5Mmh5MjJ0bjN2cGM3Z2FjcGhydCJ9.8ghiULDblZT4A1d3h0NN4A";

navigator.geolocation.getCurrentPosition(successPosition, errorPosition, {
  enableHighAccuracy: true,
});

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAP_BOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: centerPosition,
    zoom: 15,
  });

  const navigationControl = new mapboxgl.NavigationControl();
  map.addControl(navigationControl);

  const directionControl = new MapboxDirections({
    accessToken: MAP_BOX_ACCESS_TOKEN,
  });

  map.addControl(directionControl, "top-left");
}

function successPosition(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorPosition() {
  setupMap([90.26667, 23.858334]);
}
