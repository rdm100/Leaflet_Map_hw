const drawMap = function () {
  const mapDiv = document.getElementById("main-map");
  const glasgow = [55.86515, -4.25763];
  // const javaStreet = [55.801507, -4.003805];
  const chicago = [41.8819, -87.6278];
  const amarillo = [35.2018863,-101.9450251];
  const zoomLevel = 15;
  const mainMap = new MapWrapper(mapDiv, glasgow, zoomLevel);
  mainMap.addMarker(glasgow);
  // const mainMap = new MapWrapper(mapDiv, javaStreet, zoomLevel);
  // mainMap.addMarker(glasgow);

    const button = document.querySelector('#chicago');
    button.addEventListener('click', function(){
    mainMap.flyMeTo(chicago);
});

    const button2 = document.querySelector('#amarillo');
    button2.addEventListener('click', function(){
    mainMap.flyMeToA(amarillo);
});

// 	const button3 = document.querySelector('#locate-position');
// 	button3.addEventListener('click', function(){
//  	mainMap.locate({setView: true});
// });

	const button3 = document.querySelector('#locate-position');
	button3.addEventListener('click', function(){
 	mainMap.geolocation();
});

}

window.addEventListener("load", drawMap);