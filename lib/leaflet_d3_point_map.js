(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("d3"), require("jQuery"), require("leaflet"));
	else if(typeof define === 'function' && define.amd)
		define("leaflet_d3_point_map", ["d3", "jQuery", "leaflet"], factory);
	else if(typeof exports === 'object')
		exports["leaflet_d3_point_map"] = factory(require("d3"), require("jQuery"), require("leaflet"));
	else
		root["leaflet_d3_point_map"] = factory(root["d3"], root["jQuery"], root["L"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_d3__, __WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_leaflet__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: LeafletD3PointMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vis.js */ "./src/vis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletD3PointMap", function() { return _vis_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

 // export { LeafletD3PointMap };



/***/ }),

/***/ "./src/vis.js":
/*!********************!*\
  !*** ./src/vis.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
// LeafletD3PointMap


const $ = jquery__WEBPACK_IMPORTED_MODULE_1___default.a;
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
      initMapCenter: [37.8, -26.9],
      initMapZoom: 1.5 // color: d3.scaleOrdinal(d3.schemeCategory10),
      // forceStrength: -2,

    };
    Object.assign(this, defaults, opts); // opts will overwrite defaults

    this.el = this.initEl(this.el);
    this._data = this.initData(this.data);
    this.data = this.updateData;

    if (typeof this.height === 'undefined') {
      this.height = .625 * this.width;
    }

    this.el.style("width", this.width + "px").style("height", this.height + "px");
    this.init = false;
    console.log(this._data);

    if (this.el !== null && this._data !== null) {
      this.draw(this.el);
      this.init = true;
    }
  }

  initEl(el) {
    if (el instanceof d3__WEBPACK_IMPORTED_MODULE_0__["selection"]) {
      // if it's already a d3 selection
      return el;
    } else if (el instanceof $) {
      // if it's a jquery object
      return d3__WEBPACK_IMPORTED_MODULE_0__["select"](el[0]);
    } else {
      // this should cover if it's the actual element or a CSS style selection string
      return d3__WEBPACK_IMPORTED_MODULE_0__["select"](el);
    }
  }

  initData(data) {
    // filter out data elements with no geolocation info
    var _data = [];

    for (var i = 0; i < data.length; i++) {
      if (data[i].lat !== "" && data[i].lat !== "NONE") {
        _data.push(data[i]);
      }
    }

    return _data;
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
    } // console.log(typeof updateData);
    // if (typeof updateData === 'function') updateData();


    return this;
  }

  draw(selection) {
    var obj = this;
    var width = this.width;
    var height = this.height;
    var data = this._data;
    var sizeField = this.sizeField;
    var initMapCenter = this.initMapCenter;
    var initMapZoom = this.initMapZoom; // var graph = this._data;
    // var color = this.color;

    selection.each(function () {
      var selItem = this;
      var map = new leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.Map(selItem, {
        center: initMapCenter,
        zoom: initMapZoom
      }).addLayer(new leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }));
      var markers = new leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.FeatureGroup();
      var svgLayer = leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.svg();
      svgLayer.addTo(map);
      var svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).select("svg");
      var g = svg.select("g");

      for (var i = 0; i < data.length; i++) {
        data[i].LatLng = new leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.LatLng(data[i].lat, data[i].lng);
      }

      var sizeScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([5, 20]).domain(d3__WEBPACK_IMPORTED_MODULE_0__["extent"](data, function (d) {
        return d[sizeField];
      }));
      var feature = g.selectAll("circle").data(data).enter().append("circle").style("stroke", "black").style("opacity", .6).style("fill", "red") // .attr("r", 20);
      .attr("r", function (d) {
        return sizeScale(d[sizeField]);
      });
      map.on("viewreset, zoom", update);
      update();

      function update() {
        console.log('update');
        feature.attr("transform", function (d) {
          return "translate(" + map.latLngToLayerPoint(d.LatLng).x + "," + map.latLngToLayerPoint(d.LatLng).y + ")";
        });
      } // var svg = d3.select(selItem).append("svg").attr("width", width).attr("height", height);
      // console.log(graph);


      function addMarker(lat, lng, data) {
        var opt = {};

        if (data['count_inst'] > 1) {
          opt['zIndexOffset'] = 1000;
        }

        opt['opacity'] = data['COUNT_AUTHOR'] == 1 ? .5 : 1.0;
        var m = new leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.circleMarker([lat, lng], opt);
        var count = 1;
        m.on("click", function () {
          if (count == 1) {
            var $div = $('<div style="width: 200px; height: 200px; pointer-events: none;"></div>');
            $div.addClass('mapPopUp');
            var div = $div[0];
            m.bindPopup(div);
            m.openPopup();
            var $title = $('<h3></h3>').text(data.NAME);
            $div.prepend($title);
            $div.append($('<p></p>').text("Count: " + data['COUNT_AUTHOR']));
            count++;
          }
        });
        markers.addLayer(m);
      }

      function incrementLatLng() {
        lat = lat + .01;
        lng = lng + .01;
      } // var latlngs = [];
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
  } // updateData() {
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

/* harmony default export */ __webpack_exports__["default"] = (LeafletD3PointMap);

/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3__;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ }),

/***/ "leaflet":
/*!****************************************************************************************!*\
  !*** external {"commonjs":"leaflet","commonjs2":"leaflet","amd":"leaflet","root":"L"} ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_leaflet__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFmbGV0X2QzX3BvaW50X21hcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbGVhZmxldF9kM19wb2ludF9tYXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhZmxldF9kM19wb2ludF9tYXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZmxldF9kM19wb2ludF9tYXAvLi9zcmMvdmlzLmpzIiwid2VicGFjazovL2xlYWZsZXRfZDNfcG9pbnRfbWFwL2V4dGVybmFsIFwiZDNcIiIsIndlYnBhY2s6Ly9sZWFmbGV0X2QzX3BvaW50X21hcC9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL2xlYWZsZXRfZDNfcG9pbnRfbWFwL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJsZWFmbGV0XCIsXCJjb21tb25qczJcIjpcImxlYWZsZXRcIixcImFtZFwiOlwibGVhZmxldFwiLFwicm9vdFwiOlwiTFwifSJdLCJuYW1lcyI6WyIkIiwialF1ZXJ5IiwiTGVhZmxldEQzUG9pbnRNYXAiLCJjb25zdHJ1Y3RvciIsIm9wdHMiLCJkZWZhdWx0cyIsImVsIiwiZGF0YSIsIndpZHRoIiwic2l6ZUZpZWxkIiwiaW5pdE1hcENlbnRlciIsImluaXRNYXBab29tIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5pdEVsIiwiX2RhdGEiLCJpbml0RGF0YSIsInVwZGF0ZURhdGEiLCJoZWlnaHQiLCJzdHlsZSIsImluaXQiLCJjb25zb2xlIiwibG9nIiwiZHJhdyIsImQzIiwiaSIsImxlbmd0aCIsImxhdCIsInB1c2giLCJ2YWx1ZSIsImFyZ3VtZW50cyIsInNlbGVjdGlvbiIsIm9iaiIsImVhY2giLCJzZWxJdGVtIiwibWFwIiwiTCIsIk1hcCIsImNlbnRlciIsInpvb20iLCJhZGRMYXllciIsIlRpbGVMYXllciIsImF0dHJpYnV0aW9uIiwibWFya2VycyIsIkZlYXR1cmVHcm91cCIsInN2Z0xheWVyIiwic3ZnIiwiYWRkVG8iLCJzZWxlY3QiLCJnIiwiTGF0TG5nIiwibG5nIiwic2l6ZVNjYWxlIiwicmFuZ2UiLCJkb21haW4iLCJkIiwiZmVhdHVyZSIsInNlbGVjdEFsbCIsImVudGVyIiwiYXBwZW5kIiwiYXR0ciIsIm9uIiwidXBkYXRlIiwibGF0TG5nVG9MYXllclBvaW50IiwieCIsInkiLCJhZGRNYXJrZXIiLCJvcHQiLCJtIiwiY2lyY2xlTWFya2VyIiwiY291bnQiLCIkZGl2IiwiYWRkQ2xhc3MiLCJkaXYiLCJiaW5kUG9wdXAiLCJvcGVuUG9wdXAiLCIkdGl0bGUiLCJ0ZXh0IiwiTkFNRSIsInByZXBlbmQiLCJpbmNyZW1lbnRMYXRMbmciXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0NBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQSxNQUFNQSxDQUFDLEdBQUdDLDZDQUFWO0NBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUMsaUJBQU4sQ0FBd0I7QUFDdkJDLGFBQVcsQ0FBQ0MsSUFBSSxHQUFHLEVBQVIsRUFBWTtBQUN0QixVQUFNQyxRQUFRLEdBQUc7QUFDaEJDLFFBQUUsRUFBRSxJQURZO0FBRWhCQyxVQUFJLEVBQUUsSUFGVTtBQUdoQkMsV0FBSyxFQUFFLEdBSFM7QUFJaEJDLGVBQVMsRUFBRSxjQUpLO0FBS2hCQyxtQkFBYSxFQUFFLENBQUMsSUFBRCxFQUFPLENBQUMsSUFBUixDQUxDO0FBTWhCQyxpQkFBVyxFQUFFLEdBTkcsQ0FPaEI7QUFDQTs7QUFSZ0IsS0FBakI7QUFVQUMsVUFBTSxDQUFDQyxNQUFQLENBQWMsSUFBZCxFQUFvQlIsUUFBcEIsRUFBOEJELElBQTlCLEVBWHNCLENBV2dCOztBQUN0QyxTQUFLRSxFQUFMLEdBQVUsS0FBS1EsTUFBTCxDQUFZLEtBQUtSLEVBQWpCLENBQVY7QUFDQSxTQUFLUyxLQUFMLEdBQWEsS0FBS0MsUUFBTCxDQUFjLEtBQUtULElBQW5CLENBQWI7QUFDQSxTQUFLQSxJQUFMLEdBQVksS0FBS1UsVUFBakI7O0FBQ0EsUUFBSSxPQUFPLEtBQUtDLE1BQVosS0FBdUIsV0FBM0IsRUFBd0M7QUFDdkMsV0FBS0EsTUFBTCxHQUFjLE9BQU8sS0FBS1YsS0FBMUI7QUFDQTs7QUFDRCxTQUFLRixFQUFMLENBQVFhLEtBQVIsQ0FBYyxPQUFkLEVBQXVCLEtBQUtYLEtBQUwsR0FBYSxJQUFwQyxFQUNHVyxLQURILENBQ1MsUUFEVCxFQUNtQixLQUFLRCxNQUFMLEdBQWMsSUFEakM7QUFFQSxTQUFLRSxJQUFMLEdBQVksS0FBWjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLUCxLQUFqQjs7QUFDQSxRQUFJLEtBQUtULEVBQUwsS0FBWSxJQUFaLElBQW9CLEtBQUtTLEtBQUwsS0FBZSxJQUF2QyxFQUE2QztBQUM1QyxXQUFLUSxJQUFMLENBQVUsS0FBS2pCLEVBQWY7QUFDQSxXQUFLYyxJQUFMLEdBQVksSUFBWjtBQUNBO0FBQ0Q7O0FBRUROLFFBQU0sQ0FBQ1IsRUFBRCxFQUFLO0FBQ1YsUUFBSUEsRUFBRSxZQUFZa0IsNENBQWxCLEVBQWdDO0FBQy9CO0FBQ0EsYUFBT2xCLEVBQVA7QUFDQSxLQUhELE1BR08sSUFBSUEsRUFBRSxZQUFZTixDQUFsQixFQUFxQjtBQUMzQjtBQUNBLGFBQU93Qix5Q0FBQSxDQUFVbEIsRUFBRSxDQUFDLENBQUQsQ0FBWixDQUFQO0FBQ0EsS0FITSxNQUdBO0FBQ047QUFDQSxhQUFPa0IseUNBQUEsQ0FBVWxCLEVBQVYsQ0FBUDtBQUNBO0FBQ0Q7O0FBRURVLFVBQVEsQ0FBQ1QsSUFBRCxFQUFPO0FBQ2Q7QUFDQSxRQUFJUSxLQUFLLEdBQUcsRUFBWjs7QUFDQSxTQUFLLElBQUlVLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdsQixJQUFJLENBQUNtQixNQUF6QixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUN0QyxVQUFJbEIsSUFBSSxDQUFDa0IsQ0FBRCxDQUFKLENBQVFFLEdBQVIsS0FBZ0IsRUFBaEIsSUFBc0JwQixJQUFJLENBQUNrQixDQUFELENBQUosQ0FBUUUsR0FBUixLQUFnQixNQUExQyxFQUFrRDtBQUNqRFosYUFBSyxDQUFDYSxJQUFOLENBQVdyQixJQUFJLENBQUNrQixDQUFELENBQWY7QUFDQTtBQUNEOztBQUNELFdBQU9WLEtBQVA7QUFDQTs7QUFFREUsWUFBVSxDQUFDWSxLQUFELEVBQVE7QUFDakIsUUFBSSxDQUFDQyxTQUFTLENBQUNKLE1BQWYsRUFBdUIsT0FBTyxLQUFLWCxLQUFaO0FBQ3ZCLFNBQUtBLEtBQUwsR0FBYWMsS0FBYjs7QUFDQSxRQUFJLEtBQUtULElBQUwsS0FBYyxLQUFsQixFQUF5QjtBQUN4QixXQUFLRyxJQUFMLENBQVUsS0FBS2pCLEVBQWY7QUFDQSxXQUFLYyxJQUFMLEdBQVksSUFBWjtBQUNBLEtBSEQsTUFHTztBQUNOO0FBQ0E7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksbUNBQVo7QUFDQSxLQVZnQixDQVdqQjtBQUNBOzs7QUFDQSxXQUFPLElBQVA7QUFDQTs7QUFFREMsTUFBSSxDQUFDUSxTQUFELEVBQVk7QUFDZixRQUFJQyxHQUFHLEdBQUcsSUFBVjtBQUNBLFFBQUl4QixLQUFLLEdBQUcsS0FBS0EsS0FBakI7QUFDQSxRQUFJVSxNQUFNLEdBQUcsS0FBS0EsTUFBbEI7QUFDQSxRQUFJWCxJQUFJLEdBQUcsS0FBS1EsS0FBaEI7QUFDQSxRQUFJTixTQUFTLEdBQUcsS0FBS0EsU0FBckI7QUFDQSxRQUFJQyxhQUFhLEdBQUcsS0FBS0EsYUFBekI7QUFDQSxRQUFJQyxXQUFXLEdBQUcsS0FBS0EsV0FBdkIsQ0FQZSxDQVFmO0FBQ0E7O0FBQ0FvQixhQUFTLENBQUNFLElBQVYsQ0FBZSxZQUFXO0FBQ3pCLFVBQUlDLE9BQU8sR0FBRyxJQUFkO0FBQ0EsVUFBSUMsR0FBRyxHQUFHLElBQUlDLDhDQUFDLENBQUNDLEdBQU4sQ0FBVUgsT0FBVixFQUFtQjtBQUFDSSxjQUFNLEVBQUU1QixhQUFUO0FBQXdCNkIsWUFBSSxFQUFFNUI7QUFBOUIsT0FBbkIsRUFDUjZCLFFBRFEsQ0FDQyxJQUFJSiw4Q0FBQyxDQUFDSyxTQUFOLENBQWdCLG1EQUFoQixFQUFxRTtBQUM5RUMsbUJBQVcsRUFBRTtBQURpRSxPQUFyRSxDQURELENBQVY7QUFJQSxVQUFJQyxPQUFPLEdBQUcsSUFBSVAsOENBQUMsQ0FBQ1EsWUFBTixFQUFkO0FBRUEsVUFBSUMsUUFBUSxHQUFHVCw4Q0FBQyxDQUFDVSxHQUFGLEVBQWY7QUFDQUQsY0FBUSxDQUFDRSxLQUFULENBQWVaLEdBQWY7QUFDQSxVQUFJVyxHQUFHLEdBQUd0Qix5Q0FBQSxDQUFVLElBQVYsRUFBZ0J3QixNQUFoQixDQUF1QixLQUF2QixDQUFWO0FBQ0EsVUFBSUMsQ0FBQyxHQUFHSCxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLENBQVI7O0FBRUEsV0FBSyxJQUFJdkIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2xCLElBQUksQ0FBQ21CLE1BQXpCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ3RDbEIsWUFBSSxDQUFDa0IsQ0FBRCxDQUFKLENBQVF5QixNQUFSLEdBQWlCLElBQUlkLDhDQUFDLENBQUNjLE1BQU4sQ0FBYTNDLElBQUksQ0FBQ2tCLENBQUQsQ0FBSixDQUFRRSxHQUFyQixFQUEwQnBCLElBQUksQ0FBQ2tCLENBQUQsQ0FBSixDQUFRMEIsR0FBbEMsQ0FBakI7QUFDQTs7QUFDRCxVQUFJQyxTQUFTLEdBQUc1Qiw4Q0FBQSxHQUFpQjZCLEtBQWpCLENBQXVCLENBQUMsQ0FBRCxFQUFHLEVBQUgsQ0FBdkIsRUFDVkMsTUFEVSxDQUNIOUIseUNBQUEsQ0FBVWpCLElBQVYsRUFBZ0IsVUFBU2dELENBQVQsRUFBWTtBQUFFLGVBQU9BLENBQUMsQ0FBQzlDLFNBQUQsQ0FBUjtBQUFzQixPQUFwRCxDQURHLENBQWhCO0FBR0EsVUFBSStDLE9BQU8sR0FBR1AsQ0FBQyxDQUFDUSxTQUFGLENBQVksUUFBWixFQUNibEQsSUFEYSxDQUNSQSxJQURRLEVBRWJtRCxLQUZhLEdBRUxDLE1BRkssQ0FFRSxRQUZGLEVBR2J4QyxLQUhhLENBR1AsUUFITyxFQUdHLE9BSEgsRUFJYkEsS0FKYSxDQUlQLFNBSk8sRUFJSSxFQUpKLEVBS2JBLEtBTGEsQ0FLUCxNQUxPLEVBS0MsS0FMRCxFQU1kO0FBTmMsT0FPYnlDLElBUGEsQ0FPUixHQVBRLEVBT0gsVUFBU0wsQ0FBVCxFQUFZO0FBQUUsZUFBT0gsU0FBUyxDQUFDRyxDQUFDLENBQUM5QyxTQUFELENBQUYsQ0FBaEI7QUFBaUMsT0FQNUMsQ0FBZDtBQVNEMEIsU0FBRyxDQUFDMEIsRUFBSixDQUFPLGlCQUFQLEVBQTBCQyxNQUExQjtBQUNBQSxZQUFNOztBQUVOLGVBQVNBLE1BQVQsR0FBa0I7QUFDakJ6QyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0FrQyxlQUFPLENBQUNJLElBQVIsQ0FBYSxXQUFiLEVBQ0EsVUFBU0wsQ0FBVCxFQUFZO0FBQ1gsaUJBQU8sZUFDTnBCLEdBQUcsQ0FBQzRCLGtCQUFKLENBQXVCUixDQUFDLENBQUNMLE1BQXpCLEVBQWlDYyxDQUQzQixHQUM4QixHQUQ5QixHQUVON0IsR0FBRyxDQUFDNEIsa0JBQUosQ0FBdUJSLENBQUMsQ0FBQ0wsTUFBekIsRUFBaUNlLENBRjNCLEdBRThCLEdBRnJDO0FBR0MsU0FMRjtBQU9BLE9BeEN5QixDQTJDekI7QUFDQTs7O0FBRUEsZUFBU0MsU0FBVCxDQUFtQnZDLEdBQW5CLEVBQXdCd0IsR0FBeEIsRUFBNkI1QyxJQUE3QixFQUFtQztBQUVsQyxZQUFJNEQsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsWUFBSTVELElBQUksQ0FBQyxZQUFELENBQUosR0FBbUIsQ0FBdkIsRUFBMEI7QUFDekI0RCxhQUFHLENBQUMsY0FBRCxDQUFILEdBQXNCLElBQXRCO0FBQ0E7O0FBQ0RBLFdBQUcsQ0FBQyxTQUFELENBQUgsR0FBa0I1RCxJQUFJLENBQUMsY0FBRCxDQUFKLElBQXdCLENBQXpCLEdBQThCLEVBQTlCLEdBQW1DLEdBQXBEO0FBQ0EsWUFBSTZELENBQUMsR0FBRyxJQUFJaEMsOENBQUMsQ0FBQ2lDLFlBQU4sQ0FBbUIsQ0FBQzFDLEdBQUQsRUFBTXdCLEdBQU4sQ0FBbkIsRUFBK0JnQixHQUEvQixDQUFSO0FBRUEsWUFBSUcsS0FBSyxHQUFHLENBQVo7QUFDQUYsU0FBQyxDQUFDUCxFQUFGLENBQUssT0FBTCxFQUFjLFlBQVk7QUFDekIsY0FBSVMsS0FBSyxJQUFJLENBQWIsRUFBZ0I7QUFDZixnQkFBSUMsSUFBSSxHQUFHdkUsQ0FBQyxDQUFDLHdFQUFELENBQVo7QUFDQXVFLGdCQUFJLENBQUNDLFFBQUwsQ0FBYyxVQUFkO0FBQ0EsZ0JBQUlDLEdBQUcsR0FBR0YsSUFBSSxDQUFDLENBQUQsQ0FBZDtBQUNBSCxhQUFDLENBQUNNLFNBQUYsQ0FBWUQsR0FBWjtBQUNBTCxhQUFDLENBQUNPLFNBQUY7QUFFQSxnQkFBSUMsTUFBTSxHQUFHNUUsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlNkUsSUFBZixDQUFvQnRFLElBQUksQ0FBQ3VFLElBQXpCLENBQWI7QUFDQVAsZ0JBQUksQ0FBQ1EsT0FBTCxDQUFhSCxNQUFiO0FBQ0FMLGdCQUFJLENBQUNaLE1BQUwsQ0FBWTNELENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYTZFLElBQWIsQ0FBa0IsWUFBWXRFLElBQUksQ0FBQyxjQUFELENBQWxDLENBQVo7QUFFQStELGlCQUFLO0FBQ0w7QUFDRCxTQWREO0FBZ0JBM0IsZUFBTyxDQUFDSCxRQUFSLENBQWlCNEIsQ0FBakI7QUFFQTs7QUFFRCxlQUFTWSxlQUFULEdBQTJCO0FBQzFCckQsV0FBRyxHQUFHQSxHQUFHLEdBQUcsR0FBWjtBQUNBd0IsV0FBRyxHQUFHQSxHQUFHLEdBQUcsR0FBWjtBQUNBLE9BL0V3QixDQWlGekI7QUFDQTtBQUNTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNTO0FBQ1Q7QUFDQTtBQUNBOztBQUdBLEtBckdEO0FBc0dELFdBQU8sSUFBUDtBQUNDLEdBdExzQixDQXdMdkI7QUFDQTtBQUNHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRztBQUNBO0FBQ0E7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNHO0FBQ0E7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBNU91Qjs7QUErT1RqRCxnRkFBZixFOzs7Ozs7Ozs7OztBQzVQQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxxRCIsImZpbGUiOiJsZWFmbGV0X2QzX3BvaW50X21hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImQzXCIpLCByZXF1aXJlKFwialF1ZXJ5XCIpLCByZXF1aXJlKFwibGVhZmxldFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImxlYWZsZXRfZDNfcG9pbnRfbWFwXCIsIFtcImQzXCIsIFwialF1ZXJ5XCIsIFwibGVhZmxldFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsZWFmbGV0X2QzX3BvaW50X21hcFwiXSA9IGZhY3RvcnkocmVxdWlyZShcImQzXCIpLCByZXF1aXJlKFwialF1ZXJ5XCIpLCByZXF1aXJlKFwibGVhZmxldFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibGVhZmxldF9kM19wb2ludF9tYXBcIl0gPSBmYWN0b3J5KHJvb3RbXCJkM1wiXSwgcm9vdFtcImpRdWVyeVwiXSwgcm9vdFtcIkxcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9sZWFmbGV0X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBMZWFmbGV0RDNQb2ludE1hcCBmcm9tICcuL3Zpcy5qcyc7XG4vLyBleHBvcnQgeyBMZWFmbGV0RDNQb2ludE1hcCB9O1xuZXhwb3J0IHsgTGVhZmxldEQzUG9pbnRNYXAgfTtcblxuIiwiLy8gTGVhZmxldEQzUG9pbnRNYXBcblxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xuY29uc3QgJCA9IGpRdWVyeTtcbmltcG9ydCBMIGZyb20gJ2xlYWZsZXQnO1xuXG5cblxuLy8gcmV1c2FibGUgY2hhcnQgcGF0dGVybiBpbnNwaXJlZCBieTpcbi8vIGh0dHBzOi8vYm9zdC5vY2tzLm9yZy9taWtlL2NoYXJ0L1xuLy8gYW5kXG4vLyBodHRwczovL3d3dy50b3B0YWwuY29tL2QzLWpzL3Rvd2FyZHMtcmV1c2FibGUtZDMtanMtY2hhcnRzXG5jbGFzcyBMZWFmbGV0RDNQb2ludE1hcCB7XG5cdGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuXHRcdGNvbnN0IGRlZmF1bHRzID0ge1xuXHRcdFx0ZWw6IG51bGwsXG5cdFx0XHRkYXRhOiBudWxsLFxuXHRcdFx0d2lkdGg6IDk2MCxcblx0XHRcdHNpemVGaWVsZDogXCJDT1VOVF9BVVRIT1JcIixcblx0XHRcdGluaXRNYXBDZW50ZXI6IFszNy44LCAtMjYuOV0sXG5cdFx0XHRpbml0TWFwWm9vbTogMS41LFxuXHRcdFx0Ly8gY29sb3I6IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKSxcblx0XHRcdC8vIGZvcmNlU3RyZW5ndGg6IC0yLFxuXHRcdH07XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0cywgb3B0cyk7ICAvLyBvcHRzIHdpbGwgb3ZlcndyaXRlIGRlZmF1bHRzXG5cdFx0dGhpcy5lbCA9IHRoaXMuaW5pdEVsKHRoaXMuZWwpO1xuXHRcdHRoaXMuX2RhdGEgPSB0aGlzLmluaXREYXRhKHRoaXMuZGF0YSk7XG5cdFx0dGhpcy5kYXRhID0gdGhpcy51cGRhdGVEYXRhO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5oZWlnaHQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR0aGlzLmhlaWdodCA9IC42MjUgKiB0aGlzLndpZHRoO1xuXHRcdH1cblx0XHR0aGlzLmVsLnN0eWxlKFwid2lkdGhcIiwgdGhpcy53aWR0aCArIFwicHhcIilcblx0XHRcdFx0LnN0eWxlKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0ICsgXCJweFwiKTtcblx0XHR0aGlzLmluaXQgPSBmYWxzZTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLl9kYXRhKTtcblx0XHRpZiAodGhpcy5lbCAhPT0gbnVsbCAmJiB0aGlzLl9kYXRhICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmRyYXcodGhpcy5lbCk7XG5cdFx0XHR0aGlzLmluaXQgPSB0cnVlO1xuXHRcdH1cblx0fTtcblxuXHRpbml0RWwoZWwpIHtcblx0XHRpZiAoZWwgaW5zdGFuY2VvZiBkMy5zZWxlY3Rpb24pIHtcblx0XHRcdC8vIGlmIGl0J3MgYWxyZWFkeSBhIGQzIHNlbGVjdGlvblxuXHRcdFx0cmV0dXJuIGVsXG5cdFx0fSBlbHNlIGlmIChlbCBpbnN0YW5jZW9mICQpIHtcblx0XHRcdC8vIGlmIGl0J3MgYSBqcXVlcnkgb2JqZWN0XG5cdFx0XHRyZXR1cm4gZDMuc2VsZWN0KGVsWzBdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gdGhpcyBzaG91bGQgY292ZXIgaWYgaXQncyB0aGUgYWN0dWFsIGVsZW1lbnQgb3IgYSBDU1Mgc3R5bGUgc2VsZWN0aW9uIHN0cmluZ1xuXHRcdFx0cmV0dXJuIGQzLnNlbGVjdChlbCk7XG5cdFx0fVxuXHR9O1xuXG5cdGluaXREYXRhKGRhdGEpIHtcblx0XHQvLyBmaWx0ZXIgb3V0IGRhdGEgZWxlbWVudHMgd2l0aCBubyBnZW9sb2NhdGlvbiBpbmZvXG5cdFx0dmFyIF9kYXRhID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aCA7IGkrKykge1xuXHRcdFx0aWYgKGRhdGFbaV0ubGF0ICE9PSBcIlwiICYmIGRhdGFbaV0ubGF0ICE9PSBcIk5PTkVcIikge1xuXHRcdFx0XHRfZGF0YS5wdXNoKGRhdGFbaV0pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBfZGF0YTtcblx0fTtcblxuXHR1cGRhdGVEYXRhKHZhbHVlKSB7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fZGF0YTtcblx0XHR0aGlzLl9kYXRhID0gdmFsdWU7XG5cdFx0aWYgKHRoaXMuaW5pdCA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMuZHJhdyh0aGlzLmVsKTtcblx0XHRcdHRoaXMuaW5pdCA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHRoaXMudXBkYXRlRGF0YSgpO1xuXHRcdFx0Ly8gTk9UIElNUExFTUVOVEVEXG5cdFx0XHRjb25zb2xlLmxvZyhcIlVQREFUSU5HIERBVEEgTk9UIFlFVCBJTVBMRU1FTlRFRFwiKTtcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5sb2codHlwZW9mIHVwZGF0ZURhdGEpO1xuXHRcdC8vIGlmICh0eXBlb2YgdXBkYXRlRGF0YSA9PT0gJ2Z1bmN0aW9uJykgdXBkYXRlRGF0YSgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdGRyYXcoc2VsZWN0aW9uKSB7XG5cdFx0dmFyIG9iaiA9IHRoaXM7XG5cdFx0dmFyIHdpZHRoID0gdGhpcy53aWR0aDtcblx0XHR2YXIgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG5cdFx0dmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHRcdHZhciBzaXplRmllbGQgPSB0aGlzLnNpemVGaWVsZDtcblx0XHR2YXIgaW5pdE1hcENlbnRlciA9IHRoaXMuaW5pdE1hcENlbnRlcjtcblx0XHR2YXIgaW5pdE1hcFpvb20gPSB0aGlzLmluaXRNYXBab29tO1xuXHRcdC8vIHZhciBncmFwaCA9IHRoaXMuX2RhdGE7XG5cdFx0Ly8gdmFyIGNvbG9yID0gdGhpcy5jb2xvcjtcblx0XHRzZWxlY3Rpb24uZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxJdGVtID0gdGhpcztcblx0XHRcdHZhciBtYXAgPSBuZXcgTC5NYXAoc2VsSXRlbSwge2NlbnRlcjogaW5pdE1hcENlbnRlciwgem9vbTogaW5pdE1hcFpvb219KVxuXHRcdFx0XHQuYWRkTGF5ZXIobmV3IEwuVGlsZUxheWVyKFwiaHR0cDovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZ1wiLCB7XG5cdFx0XHRcdFx0YXR0cmlidXRpb246ICcmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcblx0XHRcdFx0fSkpO1xuXHRcdFx0dmFyIG1hcmtlcnMgPSBuZXcgTC5GZWF0dXJlR3JvdXAoKTtcblxuXHRcdFx0dmFyIHN2Z0xheWVyID0gTC5zdmcoKTtcblx0XHRcdHN2Z0xheWVyLmFkZFRvKG1hcCk7XG5cdFx0XHR2YXIgc3ZnID0gZDMuc2VsZWN0KHRoaXMpLnNlbGVjdChcInN2Z1wiKTtcblx0XHRcdHZhciBnID0gc3ZnLnNlbGVjdChcImdcIik7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGggOyBpKyspIHtcblx0XHRcdFx0ZGF0YVtpXS5MYXRMbmcgPSBuZXcgTC5MYXRMbmcoZGF0YVtpXS5sYXQsIGRhdGFbaV0ubG5nKVxuXHRcdFx0fVxuXHRcdFx0dmFyIHNpemVTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzUsMjBdKVxuXHRcdFx0XHRcdFx0XHRcdC5kb21haW4oZDMuZXh0ZW50KGRhdGEsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGRbc2l6ZUZpZWxkXTsgfSkpO1xuXG5cdFx0XHR2YXIgZmVhdHVyZSA9IGcuc2VsZWN0QWxsKFwiY2lyY2xlXCIpXG5cdFx0XHQuZGF0YShkYXRhKVxuXHRcdFx0LmVudGVyKCkuYXBwZW5kKFwiY2lyY2xlXCIpXG5cdFx0XHQuc3R5bGUoXCJzdHJva2VcIiwgXCJibGFja1wiKVxuXHRcdFx0LnN0eWxlKFwib3BhY2l0eVwiLCAuNilcblx0XHRcdC5zdHlsZShcImZpbGxcIiwgXCJyZWRcIilcblx0XHRcdC8vIC5hdHRyKFwiclwiLCAyMCk7XG5cdFx0XHQuYXR0cihcInJcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2l6ZVNjYWxlKGRbc2l6ZUZpZWxkXSk7IH0pO1xuXG5cdFx0bWFwLm9uKFwidmlld3Jlc2V0LCB6b29tXCIsIHVwZGF0ZSk7XG5cdFx0dXBkYXRlKCk7XG5cblx0XHRmdW5jdGlvbiB1cGRhdGUoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygndXBkYXRlJyk7XG5cdFx0XHRmZWF0dXJlLmF0dHIoXCJ0cmFuc2Zvcm1cIixcblx0XHRcdGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiK1xuXHRcdFx0XHRcdG1hcC5sYXRMbmdUb0xheWVyUG9pbnQoZC5MYXRMbmcpLnggK1wiLFwiK1xuXHRcdFx0XHRcdG1hcC5sYXRMbmdUb0xheWVyUG9pbnQoZC5MYXRMbmcpLnkgK1wiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0fVxuXG5cblx0XHRcdC8vIHZhciBzdmcgPSBkMy5zZWxlY3Qoc2VsSXRlbSkuYXBwZW5kKFwic3ZnXCIpLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCkuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coZ3JhcGgpO1xuXG5cdFx0XHRmdW5jdGlvbiBhZGRNYXJrZXIobGF0LCBsbmcsIGRhdGEpIHtcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBvcHQgPSB7fTtcblx0XHRcdFx0aWYgKGRhdGFbJ2NvdW50X2luc3QnXT4xKSB7XG5cdFx0XHRcdFx0b3B0Wyd6SW5kZXhPZmZzZXQnXSA9IDEwMDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0b3B0WydvcGFjaXR5J10gPSAoZGF0YVsnQ09VTlRfQVVUSE9SJ10gPT0gMSkgPyAuNSA6IDEuMDtcblx0XHRcdFx0dmFyIG0gPSBuZXcgTC5jaXJjbGVNYXJrZXIoW2xhdCwgbG5nXSwgb3B0KTtcblxuXHRcdFx0XHR2YXIgY291bnQgPSAxO1xuXHRcdFx0XHRtLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGlmIChjb3VudCA9PSAxKSB7XG5cdFx0XHRcdFx0XHR2YXIgJGRpdiA9ICQoJzxkaXYgc3R5bGU9XCJ3aWR0aDogMjAwcHg7IGhlaWdodDogMjAwcHg7IHBvaW50ZXItZXZlbnRzOiBub25lO1wiPjwvZGl2PicpO1xuXHRcdFx0XHRcdFx0JGRpdi5hZGRDbGFzcygnbWFwUG9wVXAnKVxuXHRcdFx0XHRcdFx0dmFyIGRpdiA9ICRkaXZbMF07XG5cdFx0XHRcdFx0XHRtLmJpbmRQb3B1cChkaXYpO1xuXHRcdFx0XHRcdFx0bS5vcGVuUG9wdXAoKTtcblxuXHRcdFx0XHRcdFx0dmFyICR0aXRsZSA9ICQoJzxoMz48L2gzPicpLnRleHQoZGF0YS5OQU1FKTtcblx0XHRcdFx0XHRcdCRkaXYucHJlcGVuZCgkdGl0bGUpO1xuXHRcdFx0XHRcdFx0JGRpdi5hcHBlbmQoJCgnPHA+PC9wPicpLnRleHQoXCJDb3VudDogXCIgKyBkYXRhWydDT1VOVF9BVVRIT1InXSkpO1xuXG5cdFx0XHRcdFx0XHRjb3VudCArK1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHQgICBcblx0XHRcdFx0bWFya2Vycy5hZGRMYXllcihtKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBpbmNyZW1lbnRMYXRMbmcoKSB7XG5cdFx0XHRcdGxhdCA9IGxhdCArIC4wMTtcblx0XHRcdFx0bG5nID0gbG5nICsgLjAxO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyB2YXIgbGF0bG5ncyA9IFtdO1xuXHRcdFx0Ly8gZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvL1xuXHRcdFx0Ly8gXHRpZiAoZGF0YVtpXS5sYXQgIT09IFwiXCIgJiYgZGF0YVtpXS5sYXQgIT09IFwiTk9ORVwiKSB7XG5cdFx0XHQvLyBcdFx0dmFyIGxhdCA9ICtkYXRhW2ldLmxhdDtcblx0XHRcdC8vIFx0XHR2YXIgbG5nID0gK2RhdGFbaV0ubG5nO1xuXHRcdFx0Ly8gXHRcdHZhciBsYXRsbmdTdHIgPSBsYXQgKyBcIixcIiArIGxuZztcblx0XHRcdC8vIFx0XHR3aGlsZSAobGF0bG5ncy5pbmNsdWRlcyhsYXRsbmdTdHIpID09PSB0cnVlKSB7XG5cdFx0XHQvLyBcdFx0XHRpbmNyZW1lbnRMYXRMbmcoKTtcblx0XHRcdC8vIFx0XHRcdHZhciBsYXRsbmdTdHIgPSBsYXQgKyBcIixcIiArIGxuZztcblx0XHRcdC8vIFx0XHRcdFxuXHRcdFx0Ly8gXHRcdH1cblx0XHRcdC8vIFx0XHRhZGRNYXJrZXIobGF0LCBsbmcsIGRhdGFbaV0pO1xuXHRcdFx0Ly8gXHRcdGxhdGxuZ3MucHVzaChsYXRsbmdTdHIpO1xuICAgICAgICAgICAgLy9cblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gbWFwLmFkZExheWVyKG1hcmtlcnMpO1xuXHRcdFx0Ly8gfVxuXG5cblx0XHR9KTtcblx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvLyB1cGRhdGVEYXRhKCkge1xuXHQvLyBcdC8vIHVzZSBEMyB1cGRhdGUgcGF0dGVybiB3aXRoIGRhdGFcbiAgICAvL1xuXHQvLyBcdHZhciBncmFwaCA9IHRoaXMuX2RhdGE7XG5cdC8vIFx0Z3JhcGgubm9kZXMuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRkLmlkID0gZC5pZC50b1N0cmluZygpO1xuXHQvLyBcdH0pXG5cdC8vIFx0Z3JhcGgubGlua3MuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRkLmlkID0gZ2V0TGlua0lkKGQsIGdyYXBoLmRpcmVjdGVkKTtcblx0Ly8gXHR9KTtcblx0Ly8gXHR0aGlzLnNpbXVsYXRpb25cblx0Ly8gXHRcdC5ub2RlcyhncmFwaC5ub2Rlcylcblx0Ly8gXHRcdC5vbihcInRpY2tcIiwgdGlja2VkKTtcbiAgICAvL1xuXHQvLyBcdHNpbXVsYXRpb24uZm9yY2UoXCJsaW5rXCIpXG5cdC8vIFx0XHQubGlua3MoZ3JhcGgubGlua3MpO1xuXHQvLyBcdGNvbnNvbGUubG9nKGdyYXBoKTtcblx0Ly8gXHRzaW11bGF0aW9uLnN0b3AoKTtcblx0Ly8gXHRub2RlID0gbm9kZS5kYXRhKGdyYXBoLm5vZGVzLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLmlkOyB9KTtcblx0Ly8gXHR2YXIgbm9kZUV4aXQgPSBub2RlLmV4aXQoKTtcblx0Ly8gXHQvLyBub2RlRXhpdC5zZWxlY3RBbGwoXCJjaXJjbGVcIikuYXR0cihcImZpbGxcIiwgXCJyZWRcIik7XG5cdC8vIFx0dmFyIHQgPSBkMy50cmFuc2l0aW9uKCd1cGRhdGVEYXRhJykuZHVyYXRpb24oNTAwMCk7XG5cdC8vIFx0bm9kZUV4aXQuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLnN0eWxlKFwic3Ryb2tlXCIsIFwicmVkXCIpLnRyYW5zaXRpb24odCkuYXR0cihcInJcIiwgMCk7XG5cdC8vIFx0bm9kZSA9IGVudGVyTm9kZXMobm9kZSwgdCk7XG5cdC8vIFx0Ly8gbm9kZSA9IG5vZGUuY2FsbChlbnRlck5vZGVzLCB0KTtcbiAgICAvL1xuICAgIC8vXG4gICAgLy9cblx0Ly8gXHRsaW5rID0gbGlua1xuXHQvLyBcdFx0LmRhdGEoZ3JhcGgubGlua3MsIGZ1bmN0aW9uKGQpIHtcblx0Ly8gXHRcdFx0Ly8gZC5pZCA9IGdldExpbmtJZChkKTtcblx0Ly8gXHRcdFx0cmV0dXJuIGQuaWQ7XG5cdC8vIFx0XHR9KTtcblx0Ly8gXHR2YXIgbGlua0V4aXQgPSBsaW5rLmV4aXQoKTtcblx0Ly8gXHRsaW5rRXhpdC5zdHlsZShcInN0cm9rZVwiLCBcInJlZFwiKS50cmFuc2l0aW9uKHQpLnN0eWxlKFwib3BhY2l0eVwiLCAwKS5yZW1vdmUoKTtcblx0Ly8gXHQvLyBsaW5rRXhpdC5yZW1vdmUoKTtcblx0Ly8gXHRsaW5rID0gZW50ZXJMaW5rcyhsaW5rLCB0KTtcblx0Ly8gXHRzaW11bGF0aW9uLm9uKFwidGlja1wiKS5jYWxsKCk7XG4gICAgLy9cbiAgICAvL1xuXHQvLyBcdHQuZW5kKCkudGhlbihmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRub2RlRXhpdC5yZW1vdmUoKTtcblx0Ly8gXHRcdC8vIHNpbXVsYXRpb24uYWxwaGEoMSkucmVzdGFydCgpO1xuXHQvLyBcdFx0Ly8gc2ltdWxhdGlvblxuXHQvLyBcdFx0XHQvLyAuYWxwaGFEZWNheSguMDAwNSlcblx0Ly8gXHRcdFx0Ly8gLnZlbG9jaXR5RGVjYXkoMC45KVxuXHQvLyBcdFx0XHQvLyAuYWxwaGEoLjEpXG5cdC8vIFx0XHRcdC8vIC5yZXN0YXJ0KCk7XG5cdC8vIFx0fSk7XG5cdC8vIFx0XG5cdC8vIFx0Ly8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0Ly8gXHQvLyB9LCA0MDAwKTtcblx0Ly8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZWFmbGV0RDNQb2ludE1hcDtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbGVhZmxldF9fOyJdLCJzb3VyY2VSb290IjoiIn0=