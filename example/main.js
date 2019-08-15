
// var map = L.map('mapid').setView([51.505, -0.09], 13);
//
// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
// 	maxZoom: 18,
// 	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
// 		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
// 		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
// 	id: 'mapbox.streets'
// }).addTo(map);

var map = new L.Map("mapid", {center: [37.8, -26.9], zoom: 1.5})
	.addLayer(new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}));

var markers = new L.FeatureGroup();

var latlngs = [];

function addMarker(lat, lng, data) {

	var opt = {};
	if (data['count_inst']>1) {
		opt['zIndexOffset'] = 1000;
	}
	opt['opacity'] = (data['count_inst'] == 1) ? .5 : 1.0;
	var m = new L.circleMarker([lat, lng], opt);

	var count = 1;
	m.on("click", function () {
		if (count == 1) {
			var $div = $('<div style="width: 200px; height: 200px; pointer-events: none;"></div>');
			$div.addClass('mapPopUp')
			var div = $div[0];
			m.bindPopup(div);
			m.openPopup();

			$title = $('<h3></h3>').text(data.NAME);
			$div.prepend($title);
			$div.append($('<p></p>').text("Count: " + data['count_inst']));
			$div.append($('<p></p>').text("alt name: " + data['grid_name']));

			// var svg = d3.select(div).select("svg")
			// 	.attr("width", 200)
			// 	.attr("height", 200);
			//
			// svg.append("rect")
			// .style("stroke", "gray")
			// .style("fill", "blue")
			// .attr("x", 10)
			// .attr("y", 10)
			// .attr("width", 180)
			// .attr("height", 180)
			// .on("click", function () {
			// 	d3.select(this).style("fill", getRandomColor());
			// });
			count ++
		}
	});

	markers.addLayer(m);

}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

d3.csv("asthma_feed1_grid_align.csv", function(error, data) {
	if (error) throw error;

	console.log(data);
	function incrementLatLng() {
		lat = lat + .01;
		lng = lng + .01;
	}
	for (var i = 0; i < data.length; i++) {

		if (data[i].lat !== "") {
			var lat = +data[i].lat;
			var lng = +data[i].lng;
			var latlngStr = lat + "," + lng;
			while (latlngs.includes(latlngStr) === true) {
				console.log(lat,lng);
				incrementLatLng();
				console.log(lat,lng);
				var latlngStr = lat + "," + lng;

			}
			addMarker(lat, lng, data[i]);
			latlngs.push(latlngStr);

		}
		map.addLayer(markers);

	}
});

// addMarker(42.335602, -71.106414);
// addMarker(42.367980, -83.086123);





