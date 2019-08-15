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
			// color: d3.scaleOrdinal(d3.schemeCategory10),
			// forceStrength: -2,
		};
		Object.assign(this, defaults, opts);  // opts will overwrite defaults
		this._data = this.data;
		this.data = this.updateData;
		if (typeof this.height === 'undefined') {
			this.height = .625 * this.width;
		}
		this.manyBody = d3.forceManyBody()
							.strength(this.forceStrength);
		this.init = false;
		console.log(this._data);
		if (this.el !== null && this._data !== null) {
			this.draw(this.el);
			this.init = true;
		}
	}

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
		}
		// console.log(typeof updateData);
		// if (typeof updateData === 'function') updateData();
		return this;
	};

	draw(selection) {
		var obj = this;
		var width = this.width;
		var height = this.height;
		// var graph = this._data;
		// var color = this.color;
		selection.each(function() {
			var selItem = this;

			// var svg = d3.select(selItem).append("svg").attr("width", width).attr("height", height);
			// console.log(graph);

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
