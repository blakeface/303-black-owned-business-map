import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [12.550343, 55.665957],
  zoom: 8,
});

const marker = new mapboxgl.Marker()
  .setLngLat([12.550343, 55.665957])
  .addTo(map);
