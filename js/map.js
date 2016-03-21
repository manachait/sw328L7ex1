function init(){
	document.addEventListener("deviceready", onDeviceReady, false)
}
function onDeviceReady(){
	document.addEventListener("online", onOnline, false);
	document.addEventListener("offline", onOffline, false);
}
function onOffline(){
	alert("Not connected to the Internet");
	var mapObj = document.getElementById("myMap");
	mapObj.innerHTML = "Please connect to the Internet";
}
function onOnline(){
	var myscript = document.createElement("script");
	myscript.type = "text/javascript";
	myscript.src = "https://maps.googleapis.com/maps/api/js?callback=initMap";
	document.body.appendChild(myscript);
}
function initMap() {
	var mapOptions = {
		center: {lat: 13.779896, lng: 100.5601513},
		zoom: 15
	};			
	var mapObj = document.getElementById("myMap");
	var map = new google.maps.Map(mapObj, mapOptions);
}