const MapWrapper = function(element, coords, zoom) {
    const osmLayer = new L.TileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
    this.map = L.map(element).addLayer(osmLayer).setView(coords, zoom);
    this.map.on("click", function(event){
       this.addMarker(event.latlng); 
    }.bind(this))
}

MapWrapper.prototype.addMarker = function (coords){
    L.marker(coords).addTo(this.map);
}

MapWrapper.prototype.flyMeTo = function(place){
    this.map.flyTo(place, 10);
    L.marker(place).addTo(this.map).bindPopup('Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, it has a skyline punctuated by skyscrapers such as the iconic John Hancock Center, 1,451-ft. Willis Tower (formerly the Sears Tower) and the neo-Gothic Tribune Tower. The city is also renowned for its museums, including the Art Institute of Chicago with its noted Impressionist and Post-Impressionist works.').openPopup()
}

MapWrapper.prototype.flyMeToA = function(place){
    this.map.flyTo(place, 10);
    L.marker(place).addTo(this.map).bindPopup('<a href=https://www.youtube.com/watch?gl=ID&hl=id&v=yqLLDZvbG-U>Amarillo<\a>').openPopup()
}

MapWrapper.prototype.geolocation = function(){
 	L.marker(this.map.locate({setView: true, maxZoom: 15})).addTo(this.map).bindPopup('My location').openPopup()
}
