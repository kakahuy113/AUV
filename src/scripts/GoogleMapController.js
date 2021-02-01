const MapDOM = document.querySelector('#map');
const BranchListDOM = document.querySelector('.dealer-locator-list .list');
var map,
	infoWindow,
	markers = [];
var locationsInput = locationsInput || [];
var google = google || {};
const mapOption = {
	gestureHandling: 'cooperative',
	zoom: 12,
	styles: [
		{
			"featureType": "all",
			"elementType": "all",
			"stylers": [
				{
					"hue": "#e7ecf0"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "all",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "all",
			"stylers": [
				{
					"saturation": -70
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "all",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "all",
			"stylers": [
				{
					"visibility": "simplified"
				},
				{
					"saturation": -60
				}
			]
		}
	]
};

const addMarkers = () => {
	markers = [];
	const bounds = new google.maps.LatLngBounds();
	locationsInput.forEach((location, index) => {
		let locationLatLng = new google.maps.LatLng(location.lat, location.lng);
		let marker = new google.maps.Marker({
			map: map,
			title: location.title,
			position: locationLatLng,
			icon: location.icon,
		});
		bounds.extend(marker.position);
		markers.push(marker);
		showInfoMarkerOnMap(marker, index);
	});

	map.fitBounds(bounds);
};

const showInfoMarkerOnMap = (marker, index) => {
	infoWindow.setContent(`
			<h3>${locationsInput[index].title}</h3>
		`);
	infoWindow.open(map, marker);
	map.panTo(marker.getPosition());
	map.setZoom(18);
	google.maps.event.addListener(map, 'click', function () {
		infoWindow.close();
	});
};

const getLocationList = () => {
	if (BranchListDOM) {
		BranchListDOM.innerHTML = '';
		markers.forEach((marker, index) => {
			const newMarker = document.createElement('div');
			newMarker.classList.add('dealer-locator-item');
			newMarker.innerHTML = `
				<h3>${locationsInput[index].title}</h3>
				<p>${locationsInput[index].address}</p>
				<p>${locationsInput[index].phone}</p>
			`;
			newMarker.setAttribute('marker-id', `${index}`);
			newMarker.addEventListener('click', () => {
				const markerIndex = newMarker.getAttribute('marker-id');
				google.maps.event.trigger(markers[markerIndex], 'click');
			});
			BranchListDOM.appendChild(newMarker);
		});
	}
};

const initialize = () => {
	infoWindow = new google.maps.InfoWindow();
	map = new google.maps.Map(MapDOM, mapOption);
	addMarkers();
	let listener = google.maps.event.addListener(map, 'idle', () => {
		if (map.getZoom() > 12) {
			map.setZoom(15);
		}
		google.maps.event.removeListener(listener);
	});
	google.maps.event.addListener(map, 'bounds_changed', getLocationList);
};

if (MapDOM) {
	google.maps.event.addDomListener(window, 'load', initialize);
	if (BranchListDOM) {
		getLocationList();
	}
}
