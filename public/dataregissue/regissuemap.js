const crimeMap = L.map('map').setView([34.0689, -118.4452], 16);
const oms = new OverlappingMarkerSpiderfier(crimeMap, {
  keepSpiderfied: true,
  markersWontMove: true,
});

const isMobile = window.matchMedia('(max-width: 480px)').matches;

L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 12,
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1Ijoia2FubmVib3lpbmEiLCJhIjoiY2txanFsaHgxMDFiMjJ3bXpnc3BjOHBrZiJ9.a5Lne6oUV-yW1UdZf6nZ5g',
  }
).addTo(crimeMap);

const defaultPinIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [38, 60],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    shadowSize: [41, 41]
  });

let markers = L.markerClusterGroup.layerSupport({
  maxClusterRadius: 40,
});

JUL_2025_crimes_geojson.features.forEach(feature => {
  const coords = [
    feature.geometry.coordinates[1],
    feature.geometry.coordinates[0],
  ];

  const marker = new L.marker(coords, { icon: defaultPinIcon });
  markers.addLayer(marker);

  const popUpText = `<b>${feature.properties.Project}</b><br/><br/>
  <b>Start:</b> ${feature.properties.Start}<br/>
  <b>End:</b> ${feature.properties.End}<br/>
  <b>Cost:</b> ${feature.properties.Cost}<br/>
  <b>Location:</b> ${feature.properties.Location}`;

  const popUpOptions = {
    className: 'custom-popup',
    maxWidth: isMobile ? 200 : 300,
  };

  marker.bindPopup(popUpText, popUpOptions);
  oms.addMarker(marker);
});

crimeMap.addLayer(markers);
