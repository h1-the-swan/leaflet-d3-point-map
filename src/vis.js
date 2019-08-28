// LeafletD3PointMap

import * as d3 from 'd3';
import jQuery from 'jquery';
const $ = jQuery;
import L from 'leaflet';



// reusable chart pattern inspired by:
// https://bost.ocks.org/mike/chart/
// and
// https://www.toptal.com/d3-js/towards-reusable-d3-js-charts
class LeafletD3PointMap {
	constructor(opts = {}) {
		const defaults = {
			el: null,
			data: null,
			width: 960,
			sizeField: "COUNT_AUTHOR",
			sizeScale: [1,20],
			initMapCenter: [37.8, -26.9],
			initMapZoom: 1.5,
			// color: d3.scaleOrdinal(d3.schemeCategory10),
			// forceStrength: -2,
		};
		Object.assign(this, defaults, opts);  // opts will overwrite defaults
		this.el = this.initEl(this.el);
		this._data = this.initData(this.data);
		this.data = this.updateData;
		if (typeof this.height === 'undefined') {
			this.height = .625 * this.width;
		}
		this.el.style("width", this.width + "px")
				.style("height", this.height + "px");
		if ((this.sizeScale instanceof Array) && (this.sizeScale.length === 2)) {
			this.sizeScale = d3.scaleLinear().range(this.sizeScale);
		}
		this.init = false;
		console.log(this._data);
		if (this.el !== null && this._data !== null) {
			this.draw(this.el);
			this.init = true;
		}
	};

	initEl(el) {
		if (el instanceof d3.selection) {
			// if it's already a d3 selection
			return el
		} else if (el instanceof $) {
			// if it's a jquery object
			return d3.select(el[0]);
		} else {
			// this should cover if it's the actual element or a CSS style selection string
			return d3.select(el);
		}
	};

	initData(data) {
		// filter out data elements with no geolocation info
		var _data = [];
		for (var i = 0; i < data.length ; i++) {
			if (data[i].lat !== "" && data[i].lat !== "NONE") {
				_data.push(data[i])
			}
		}
		return _data;
	};

	updateData(value) {
		if (!arguments.length) return this._data;
		this._data = value;
		if (this.init === false) {
			this.draw(this.el);
			this.init = true;
		} else {
			// this.updateData();
			// NOT IMPLEMENTED
			console.log("UPDATING DATA NOT YET IMPLEMENTED");

			var g = this.el.select("svg g");
			var circle = g.selectAll("circle")
				.data(this._data, function(d) { return d.ID; });
			var dur = 500;
			circle.exit()
				.transition()
				.duration(dur)
				.attr("r", 0)
				.remove();

			g.enter().append("circle");
			g.each(function(d) { console.log(d); });
		}
		// console.log(typeof updateData);
		// if (typeof updateData === 'function') updateData();
		return this;
	};

	draw(selection) {
		var obj = this;
		var width = this.width;
		var height = this.height;
		var data = this._data;
		var sizeField = this.sizeField;
		var sizeScale = this.sizeScale;
		var initMapCenter = this.initMapCenter;
		var initMapZoom = this.initMapZoom;
		// var graph = this._data;
		// var color = this.color;
		selection.each(function() {
			var selItem = this;
			var map = new L.Map(selItem, {center: initMapCenter, zoom: initMapZoom})
				.addLayer(new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
					attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				}));
			// var markers = new L.FeatureGroup();

			var svgLayer = L.svg();
			svgLayer.addTo(map);
			var svg = d3.select(this).select("svg");
			var g = svg.select("g");

			for (var i = 0; i < data.length ; i++) {
				data[i].LatLng = new L.LatLng(data[i].lat, data[i].lng)
			}
			sizeScale.domain(d3.extent(data, function(d) { return d[sizeField]; }));

			var feature = g.selectAll("circle")
			.data(data, function(d) { return d.ID; })
			.enter().append("circle")
			.style("stroke", "black")
			.style("opacity", .6)
			.style("fill", "red")
			// .attr("r", 20);
			.attr("r", function(d) { return sizeScale(d[sizeField]); })
				.attr("class", function(d) { return "inst_" + d.ID; })

		map.on("viewreset, zoom", update);
		update();

		function update() {
			console.log('update');
			feature.attr("transform",
			function(d) {
				return "translate("+
					map.latLngToLayerPoint(d.LatLng).x +","+
					map.latLngToLayerPoint(d.LatLng).y +")";
				}
			)
		}


			// var svg = d3.select(selItem).append("svg").attr("width", width).attr("height", height);
			// console.log(graph);

			function addMarker(lat, lng, data) {
				
				var opt = {};
				if (data['count_inst']>1) {
					opt['zIndexOffset'] = 1000;
				}
				opt['opacity'] = (data['COUNT_AUTHOR'] == 1) ? .5 : 1.0;
				var m = new L.circleMarker([lat, lng], opt);

				var count = 1;
				m.on("click", function () {
					if (count == 1) {
						var $div = $('<div style="width: 200px; height: 200px; pointer-events: none;"></div>');
						$div.addClass('mapPopUp')
						var div = $div[0];
						m.bindPopup(div);
						m.openPopup();

						var $title = $('<h3></h3>').text(data.NAME);
						$div.prepend($title);
						$div.append($('<p></p>').text("Count: " + data['COUNT_AUTHOR']));

						count ++
					}
				});
			   
				markers.addLayer(m);

			}

			function incrementLatLng() {
				lat = lat + .01;
				lng = lng + .01;
			}

			// var latlngs = [];
			// for (var i = 0; i < data.length; i++) {
            //
			// 	if (data[i].lat !== "" && data[i].lat !== "NONE") {
			// 		var lat = +data[i].lat;
			// 		var lng = +data[i].lng;
			// 		var latlngStr = lat + "," + lng;
			// 		while (latlngs.includes(latlngStr) === true) {
			// 			incrementLatLng();
			// 			var latlngStr = lat + "," + lng;
			// 			
			// 		}
			// 		addMarker(lat, lng, data[i]);
			// 		latlngs.push(latlngStr);
            //
			// 	}
			// map.addLayer(markers);
			// }


		});
	return this;
	}

	// updateData() {
	// 	// use D3 update pattern with data
    //
	// 	var graph = this._data;
	// 	graph.nodes.forEach(function(d) {
	// 		d.id = d.id.toString();
	// 	})
	// 	graph.links.forEach(function(d) {
	// 		d.id = getLinkId(d, graph.directed);
	// 	});
	// 	this.simulation
	// 		.nodes(graph.nodes)
	// 		.on("tick", ticked);
    //
	// 	simulation.force("link")
	// 		.links(graph.links);
	// 	console.log(graph);
	// 	simulation.stop();
	// 	node = node.data(graph.nodes, function(d) { return d.id; });
	// 	var nodeExit = node.exit();
	// 	// nodeExit.selectAll("circle").attr("fill", "red");
	// 	var t = d3.transition('updateData').duration(5000);
	// 	nodeExit.selectAll("circle").style("stroke", "red").transition(t).attr("r", 0);
	// 	node = enterNodes(node, t);
	// 	// node = node.call(enterNodes, t);
    //
    //
    //
	// 	link = link
	// 		.data(graph.links, function(d) {
	// 			// d.id = getLinkId(d);
	// 			return d.id;
	// 		});
	// 	var linkExit = link.exit();
	// 	linkExit.style("stroke", "red").transition(t).style("opacity", 0).remove();
	// 	// linkExit.remove();
	// 	link = enterLinks(link, t);
	// 	simulation.on("tick").call();
    //
    //
	// 	t.end().then(function(d) {
	// 		nodeExit.remove();
	// 		// simulation.alpha(1).restart();
	// 		// simulation
	// 			// .alphaDecay(.0005)
	// 			// .velocityDecay(0.9)
	// 			// .alpha(.1)
	// 			// .restart();
	// 	});
	// 	
	// 	// setTimeout(function() {
	// 	// }, 4000);
	// }
}

export default LeafletD3PointMap;
