// Load mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoicmVpbmhhcmR0Z3JleWxpbmciLCJhIjoiY2toZGg0ZW55MDF3ejJwcW9iYW94NzhnOCJ9.4YHML8DLbpKIRriTsNOblQ';

// Get current location
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

// When location = success, do this
function successLocation(position) {
  console.log(position)
  setupMap([position.coords.longitude, position.coords.latitude]) 
}

// When location = error, do this
function errorLocation() {
  // Default Paris
  setupMap([2.35183, 48.85658])
}

// Create new map
function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15
  })

  // Nav controls
    // Directions
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/cycling'
    });
 
    map.addControl(directions, 'top-left');  
    // Zoom and compass
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    // Fullscreen button
    const fullscreen = new mapboxgl.FullscreenControl();
    map.addControl(fullscreen);
}

