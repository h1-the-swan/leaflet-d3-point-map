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
      })); // var markers = new L.FeatureGroup();

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
      }).attr("class", function (d) {
        return "inst_" + d.ID;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFmbGV0X2QzX3BvaW50X21hcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbGVhZmxldF9kM19wb2ludF9tYXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhZmxldF9kM19wb2ludF9tYXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZmxldF9kM19wb2ludF9tYXAvLi9zcmMvdmlzLmpzIiwid2VicGFjazovL2xlYWZsZXRfZDNfcG9pbnRfbWFwL2V4dGVybmFsIFwiZDNcIiIsIndlYnBhY2s6Ly9sZWFmbGV0X2QzX3BvaW50X21hcC9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL2xlYWZsZXRfZDNfcG9pbnRfbWFwL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJsZWFmbGV0XCIsXCJjb21tb25qczJcIjpcImxlYWZsZXRcIixcImFtZFwiOlwibGVhZmxldFwiLFwicm9vdFwiOlwiTFwifSJdLCJuYW1lcyI6WyIkIiwialF1ZXJ5IiwiTGVhZmxldEQzUG9pbnRNYXAiLCJjb25zdHJ1Y3RvciIsIm9wdHMiLCJkZWZhdWx0cyIsImVsIiwiZGF0YSIsIndpZHRoIiwic2l6ZUZpZWxkIiwiaW5pdE1hcENlbnRlciIsImluaXRNYXBab29tIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5pdEVsIiwiX2RhdGEiLCJpbml0RGF0YSIsInVwZGF0ZURhdGEiLCJoZWlnaHQiLCJzdHlsZSIsImluaXQiLCJjb25zb2xlIiwibG9nIiwiZHJhdyIsImQzIiwiaSIsImxlbmd0aCIsImxhdCIsInB1c2giLCJ2YWx1ZSIsImFyZ3VtZW50cyIsInNlbGVjdGlvbiIsIm9iaiIsImVhY2giLCJzZWxJdGVtIiwibWFwIiwiTCIsIk1hcCIsImNlbnRlciIsInpvb20iLCJhZGRMYXllciIsIlRpbGVMYXllciIsImF0dHJpYnV0aW9uIiwic3ZnTGF5ZXIiLCJzdmciLCJhZGRUbyIsInNlbGVjdCIsImciLCJMYXRMbmciLCJsbmciLCJzaXplU2NhbGUiLCJyYW5nZSIsImRvbWFpbiIsImQiLCJmZWF0dXJlIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJhcHBlbmQiLCJhdHRyIiwiSUQiLCJvbiIsInVwZGF0ZSIsImxhdExuZ1RvTGF5ZXJQb2ludCIsIngiLCJ5IiwiYWRkTWFya2VyIiwib3B0IiwibSIsImNpcmNsZU1hcmtlciIsImNvdW50IiwiJGRpdiIsImFkZENsYXNzIiwiZGl2IiwiYmluZFBvcHVwIiwib3BlblBvcHVwIiwiJHRpdGxlIiwidGV4dCIsIk5BTUUiLCJwcmVwZW5kIiwibWFya2VycyIsImluY3JlbWVudExhdExuZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7Q0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBLE1BQU1BLENBQUMsR0FBR0MsNkNBQVY7Q0FLQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQyxpQkFBTixDQUF3QjtBQUN2QkMsYUFBVyxDQUFDQyxJQUFJLEdBQUcsRUFBUixFQUFZO0FBQ3RCLFVBQU1DLFFBQVEsR0FBRztBQUNoQkMsUUFBRSxFQUFFLElBRFk7QUFFaEJDLFVBQUksRUFBRSxJQUZVO0FBR2hCQyxXQUFLLEVBQUUsR0FIUztBQUloQkMsZUFBUyxFQUFFLGNBSks7QUFLaEJDLG1CQUFhLEVBQUUsQ0FBQyxJQUFELEVBQU8sQ0FBQyxJQUFSLENBTEM7QUFNaEJDLGlCQUFXLEVBQUUsR0FORyxDQU9oQjtBQUNBOztBQVJnQixLQUFqQjtBQVVBQyxVQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CUixRQUFwQixFQUE4QkQsSUFBOUIsRUFYc0IsQ0FXZ0I7O0FBQ3RDLFNBQUtFLEVBQUwsR0FBVSxLQUFLUSxNQUFMLENBQVksS0FBS1IsRUFBakIsQ0FBVjtBQUNBLFNBQUtTLEtBQUwsR0FBYSxLQUFLQyxRQUFMLENBQWMsS0FBS1QsSUFBbkIsQ0FBYjtBQUNBLFNBQUtBLElBQUwsR0FBWSxLQUFLVSxVQUFqQjs7QUFDQSxRQUFJLE9BQU8sS0FBS0MsTUFBWixLQUF1QixXQUEzQixFQUF3QztBQUN2QyxXQUFLQSxNQUFMLEdBQWMsT0FBTyxLQUFLVixLQUExQjtBQUNBOztBQUNELFNBQUtGLEVBQUwsQ0FBUWEsS0FBUixDQUFjLE9BQWQsRUFBdUIsS0FBS1gsS0FBTCxHQUFhLElBQXBDLEVBQ0dXLEtBREgsQ0FDUyxRQURULEVBQ21CLEtBQUtELE1BQUwsR0FBYyxJQURqQztBQUVBLFNBQUtFLElBQUwsR0FBWSxLQUFaO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtQLEtBQWpCOztBQUNBLFFBQUksS0FBS1QsRUFBTCxLQUFZLElBQVosSUFBb0IsS0FBS1MsS0FBTCxLQUFlLElBQXZDLEVBQTZDO0FBQzVDLFdBQUtRLElBQUwsQ0FBVSxLQUFLakIsRUFBZjtBQUNBLFdBQUtjLElBQUwsR0FBWSxJQUFaO0FBQ0E7QUFDRDs7QUFFRE4sUUFBTSxDQUFDUixFQUFELEVBQUs7QUFDVixRQUFJQSxFQUFFLFlBQVlrQiw0Q0FBbEIsRUFBZ0M7QUFDL0I7QUFDQSxhQUFPbEIsRUFBUDtBQUNBLEtBSEQsTUFHTyxJQUFJQSxFQUFFLFlBQVlOLENBQWxCLEVBQXFCO0FBQzNCO0FBQ0EsYUFBT3dCLHlDQUFBLENBQVVsQixFQUFFLENBQUMsQ0FBRCxDQUFaLENBQVA7QUFDQSxLQUhNLE1BR0E7QUFDTjtBQUNBLGFBQU9rQix5Q0FBQSxDQUFVbEIsRUFBVixDQUFQO0FBQ0E7QUFDRDs7QUFFRFUsVUFBUSxDQUFDVCxJQUFELEVBQU87QUFDZDtBQUNBLFFBQUlRLEtBQUssR0FBRyxFQUFaOztBQUNBLFNBQUssSUFBSVUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2xCLElBQUksQ0FBQ21CLE1BQXpCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ3RDLFVBQUlsQixJQUFJLENBQUNrQixDQUFELENBQUosQ0FBUUUsR0FBUixLQUFnQixFQUFoQixJQUFzQnBCLElBQUksQ0FBQ2tCLENBQUQsQ0FBSixDQUFRRSxHQUFSLEtBQWdCLE1BQTFDLEVBQWtEO0FBQ2pEWixhQUFLLENBQUNhLElBQU4sQ0FBV3JCLElBQUksQ0FBQ2tCLENBQUQsQ0FBZjtBQUNBO0FBQ0Q7O0FBQ0QsV0FBT1YsS0FBUDtBQUNBOztBQUVERSxZQUFVLENBQUNZLEtBQUQsRUFBUTtBQUNqQixRQUFJLENBQUNDLFNBQVMsQ0FBQ0osTUFBZixFQUF1QixPQUFPLEtBQUtYLEtBQVo7QUFDdkIsU0FBS0EsS0FBTCxHQUFhYyxLQUFiOztBQUNBLFFBQUksS0FBS1QsSUFBTCxLQUFjLEtBQWxCLEVBQXlCO0FBQ3hCLFdBQUtHLElBQUwsQ0FBVSxLQUFLakIsRUFBZjtBQUNBLFdBQUtjLElBQUwsR0FBWSxJQUFaO0FBQ0EsS0FIRCxNQUdPO0FBQ047QUFDQTtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxtQ0FBWjtBQUNBLEtBVmdCLENBV2pCO0FBQ0E7OztBQUNBLFdBQU8sSUFBUDtBQUNBOztBQUVEQyxNQUFJLENBQUNRLFNBQUQsRUFBWTtBQUNmLFFBQUlDLEdBQUcsR0FBRyxJQUFWO0FBQ0EsUUFBSXhCLEtBQUssR0FBRyxLQUFLQSxLQUFqQjtBQUNBLFFBQUlVLE1BQU0sR0FBRyxLQUFLQSxNQUFsQjtBQUNBLFFBQUlYLElBQUksR0FBRyxLQUFLUSxLQUFoQjtBQUNBLFFBQUlOLFNBQVMsR0FBRyxLQUFLQSxTQUFyQjtBQUNBLFFBQUlDLGFBQWEsR0FBRyxLQUFLQSxhQUF6QjtBQUNBLFFBQUlDLFdBQVcsR0FBRyxLQUFLQSxXQUF2QixDQVBlLENBUWY7QUFDQTs7QUFDQW9CLGFBQVMsQ0FBQ0UsSUFBVixDQUFlLFlBQVc7QUFDekIsVUFBSUMsT0FBTyxHQUFHLElBQWQ7QUFDQSxVQUFJQyxHQUFHLEdBQUcsSUFBSUMsOENBQUMsQ0FBQ0MsR0FBTixDQUFVSCxPQUFWLEVBQW1CO0FBQUNJLGNBQU0sRUFBRTVCLGFBQVQ7QUFBd0I2QixZQUFJLEVBQUU1QjtBQUE5QixPQUFuQixFQUNSNkIsUUFEUSxDQUNDLElBQUlKLDhDQUFDLENBQUNLLFNBQU4sQ0FBZ0IsbURBQWhCLEVBQXFFO0FBQzlFQyxtQkFBVyxFQUFFO0FBRGlFLE9BQXJFLENBREQsQ0FBVixDQUZ5QixDQU16Qjs7QUFFQSxVQUFJQyxRQUFRLEdBQUdQLDhDQUFDLENBQUNRLEdBQUYsRUFBZjtBQUNBRCxjQUFRLENBQUNFLEtBQVQsQ0FBZVYsR0FBZjtBQUNBLFVBQUlTLEdBQUcsR0FBR3BCLHlDQUFBLENBQVUsSUFBVixFQUFnQnNCLE1BQWhCLENBQXVCLEtBQXZCLENBQVY7QUFDQSxVQUFJQyxDQUFDLEdBQUdILEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsQ0FBUjs7QUFFQSxXQUFLLElBQUlyQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbEIsSUFBSSxDQUFDbUIsTUFBekIsRUFBa0NELENBQUMsRUFBbkMsRUFBdUM7QUFDdENsQixZQUFJLENBQUNrQixDQUFELENBQUosQ0FBUXVCLE1BQVIsR0FBaUIsSUFBSVosOENBQUMsQ0FBQ1ksTUFBTixDQUFhekMsSUFBSSxDQUFDa0IsQ0FBRCxDQUFKLENBQVFFLEdBQXJCLEVBQTBCcEIsSUFBSSxDQUFDa0IsQ0FBRCxDQUFKLENBQVF3QixHQUFsQyxDQUFqQjtBQUNBOztBQUNELFVBQUlDLFNBQVMsR0FBRzFCLDhDQUFBLEdBQWlCMkIsS0FBakIsQ0FBdUIsQ0FBQyxDQUFELEVBQUcsRUFBSCxDQUF2QixFQUNWQyxNQURVLENBQ0g1Qix5Q0FBQSxDQUFVakIsSUFBVixFQUFnQixVQUFTOEMsQ0FBVCxFQUFZO0FBQUUsZUFBT0EsQ0FBQyxDQUFDNUMsU0FBRCxDQUFSO0FBQXNCLE9BQXBELENBREcsQ0FBaEI7QUFHQSxVQUFJNkMsT0FBTyxHQUFHUCxDQUFDLENBQUNRLFNBQUYsQ0FBWSxRQUFaLEVBQ2JoRCxJQURhLENBQ1JBLElBRFEsRUFFYmlELEtBRmEsR0FFTEMsTUFGSyxDQUVFLFFBRkYsRUFHYnRDLEtBSGEsQ0FHUCxRQUhPLEVBR0csT0FISCxFQUliQSxLQUphLENBSVAsU0FKTyxFQUlJLEVBSkosRUFLYkEsS0FMYSxDQUtQLE1BTE8sRUFLQyxLQUxELEVBTWQ7QUFOYyxPQU9idUMsSUFQYSxDQU9SLEdBUFEsRUFPSCxVQUFTTCxDQUFULEVBQVk7QUFBRSxlQUFPSCxTQUFTLENBQUNHLENBQUMsQ0FBQzVDLFNBQUQsQ0FBRixDQUFoQjtBQUFpQyxPQVA1QyxFQVFaaUQsSUFSWSxDQVFQLE9BUk8sRUFRRSxVQUFTTCxDQUFULEVBQVk7QUFBRSxlQUFPLFVBQVVBLENBQUMsQ0FBQ00sRUFBbkI7QUFBd0IsT0FSeEMsQ0FBZDtBQVVEeEIsU0FBRyxDQUFDeUIsRUFBSixDQUFPLGlCQUFQLEVBQTBCQyxNQUExQjtBQUNBQSxZQUFNOztBQUVOLGVBQVNBLE1BQVQsR0FBa0I7QUFDakJ4QyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0FnQyxlQUFPLENBQUNJLElBQVIsQ0FBYSxXQUFiLEVBQ0EsVUFBU0wsQ0FBVCxFQUFZO0FBQ1gsaUJBQU8sZUFDTmxCLEdBQUcsQ0FBQzJCLGtCQUFKLENBQXVCVCxDQUFDLENBQUNMLE1BQXpCLEVBQWlDZSxDQUQzQixHQUM4QixHQUQ5QixHQUVONUIsR0FBRyxDQUFDMkIsa0JBQUosQ0FBdUJULENBQUMsQ0FBQ0wsTUFBekIsRUFBaUNnQixDQUYzQixHQUU4QixHQUZyQztBQUdDLFNBTEY7QUFPQSxPQXpDeUIsQ0E0Q3pCO0FBQ0E7OztBQUVBLGVBQVNDLFNBQVQsQ0FBbUJ0QyxHQUFuQixFQUF3QnNCLEdBQXhCLEVBQTZCMUMsSUFBN0IsRUFBbUM7QUFFbEMsWUFBSTJELEdBQUcsR0FBRyxFQUFWOztBQUNBLFlBQUkzRCxJQUFJLENBQUMsWUFBRCxDQUFKLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3pCMkQsYUFBRyxDQUFDLGNBQUQsQ0FBSCxHQUFzQixJQUF0QjtBQUNBOztBQUNEQSxXQUFHLENBQUMsU0FBRCxDQUFILEdBQWtCM0QsSUFBSSxDQUFDLGNBQUQsQ0FBSixJQUF3QixDQUF6QixHQUE4QixFQUE5QixHQUFtQyxHQUFwRDtBQUNBLFlBQUk0RCxDQUFDLEdBQUcsSUFBSS9CLDhDQUFDLENBQUNnQyxZQUFOLENBQW1CLENBQUN6QyxHQUFELEVBQU1zQixHQUFOLENBQW5CLEVBQStCaUIsR0FBL0IsQ0FBUjtBQUVBLFlBQUlHLEtBQUssR0FBRyxDQUFaO0FBQ0FGLFNBQUMsQ0FBQ1AsRUFBRixDQUFLLE9BQUwsRUFBYyxZQUFZO0FBQ3pCLGNBQUlTLEtBQUssSUFBSSxDQUFiLEVBQWdCO0FBQ2YsZ0JBQUlDLElBQUksR0FBR3RFLENBQUMsQ0FBQyx3RUFBRCxDQUFaO0FBQ0FzRSxnQkFBSSxDQUFDQyxRQUFMLENBQWMsVUFBZDtBQUNBLGdCQUFJQyxHQUFHLEdBQUdGLElBQUksQ0FBQyxDQUFELENBQWQ7QUFDQUgsYUFBQyxDQUFDTSxTQUFGLENBQVlELEdBQVo7QUFDQUwsYUFBQyxDQUFDTyxTQUFGO0FBRUEsZ0JBQUlDLE1BQU0sR0FBRzNFLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTRFLElBQWYsQ0FBb0JyRSxJQUFJLENBQUNzRSxJQUF6QixDQUFiO0FBQ0FQLGdCQUFJLENBQUNRLE9BQUwsQ0FBYUgsTUFBYjtBQUNBTCxnQkFBSSxDQUFDYixNQUFMLENBQVl6RCxDQUFDLENBQUMsU0FBRCxDQUFELENBQWE0RSxJQUFiLENBQWtCLFlBQVlyRSxJQUFJLENBQUMsY0FBRCxDQUFsQyxDQUFaO0FBRUE4RCxpQkFBSztBQUNMO0FBQ0QsU0FkRDtBQWdCQVUsZUFBTyxDQUFDdkMsUUFBUixDQUFpQjJCLENBQWpCO0FBRUE7O0FBRUQsZUFBU2EsZUFBVCxHQUEyQjtBQUMxQnJELFdBQUcsR0FBR0EsR0FBRyxHQUFHLEdBQVo7QUFDQXNCLFdBQUcsR0FBR0EsR0FBRyxHQUFHLEdBQVo7QUFDQSxPQWhGd0IsQ0FrRnpCO0FBQ0E7QUFDUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUztBQUNUO0FBQ0E7QUFDQTs7QUFHQSxLQXRHRDtBQXVHRCxXQUFPLElBQVA7QUFDQyxHQXZMc0IsQ0F5THZCO0FBQ0E7QUFDRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRztBQUNBO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQTdPdUI7O0FBZ1BUL0MsZ0ZBQWYsRTs7Ozs7Ozs7Ozs7QUM3UEEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEscUQiLCJmaWxlIjoibGVhZmxldF9kM19wb2ludF9tYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJkM1wiKSwgcmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcImxlYWZsZXRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJsZWFmbGV0X2QzX3BvaW50X21hcFwiLCBbXCJkM1wiLCBcImpRdWVyeVwiLCBcImxlYWZsZXRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibGVhZmxldF9kM19wb2ludF9tYXBcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJkM1wiKSwgcmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcImxlYWZsZXRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxlYWZsZXRfZDNfcG9pbnRfbWFwXCJdID0gZmFjdG9yeShyb290W1wiZDNcIl0sIHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJMXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbGVhZmxldF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgTGVhZmxldEQzUG9pbnRNYXAgZnJvbSAnLi92aXMuanMnO1xuLy8gZXhwb3J0IHsgTGVhZmxldEQzUG9pbnRNYXAgfTtcbmV4cG9ydCB7IExlYWZsZXREM1BvaW50TWFwIH07XG5cbiIsIi8vIExlYWZsZXREM1BvaW50TWFwXG5cbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcbmNvbnN0ICQgPSBqUXVlcnk7XG5pbXBvcnQgTCBmcm9tICdsZWFmbGV0JztcblxuXG5cbi8vIHJldXNhYmxlIGNoYXJ0IHBhdHRlcm4gaW5zcGlyZWQgYnk6XG4vLyBodHRwczovL2Jvc3Qub2Nrcy5vcmcvbWlrZS9jaGFydC9cbi8vIGFuZFxuLy8gaHR0cHM6Ly93d3cudG9wdGFsLmNvbS9kMy1qcy90b3dhcmRzLXJldXNhYmxlLWQzLWpzLWNoYXJ0c1xuY2xhc3MgTGVhZmxldEQzUG9pbnRNYXAge1xuXHRjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcblx0XHRjb25zdCBkZWZhdWx0cyA9IHtcblx0XHRcdGVsOiBudWxsLFxuXHRcdFx0ZGF0YTogbnVsbCxcblx0XHRcdHdpZHRoOiA5NjAsXG5cdFx0XHRzaXplRmllbGQ6IFwiQ09VTlRfQVVUSE9SXCIsXG5cdFx0XHRpbml0TWFwQ2VudGVyOiBbMzcuOCwgLTI2LjldLFxuXHRcdFx0aW5pdE1hcFpvb206IDEuNSxcblx0XHRcdC8vIGNvbG9yOiBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCksXG5cdFx0XHQvLyBmb3JjZVN0cmVuZ3RoOiAtMixcblx0XHR9O1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZGVmYXVsdHMsIG9wdHMpOyAgLy8gb3B0cyB3aWxsIG92ZXJ3cml0ZSBkZWZhdWx0c1xuXHRcdHRoaXMuZWwgPSB0aGlzLmluaXRFbCh0aGlzLmVsKTtcblx0XHR0aGlzLl9kYXRhID0gdGhpcy5pbml0RGF0YSh0aGlzLmRhdGEpO1xuXHRcdHRoaXMuZGF0YSA9IHRoaXMudXBkYXRlRGF0YTtcblx0XHRpZiAodHlwZW9mIHRoaXMuaGVpZ2h0ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0dGhpcy5oZWlnaHQgPSAuNjI1ICogdGhpcy53aWR0aDtcblx0XHR9XG5cdFx0dGhpcy5lbC5zdHlsZShcIndpZHRoXCIsIHRoaXMud2lkdGggKyBcInB4XCIpXG5cdFx0XHRcdC5zdHlsZShcImhlaWdodFwiLCB0aGlzLmhlaWdodCArIFwicHhcIik7XG5cdFx0dGhpcy5pbml0ID0gZmFsc2U7XG5cdFx0Y29uc29sZS5sb2codGhpcy5fZGF0YSk7XG5cdFx0aWYgKHRoaXMuZWwgIT09IG51bGwgJiYgdGhpcy5fZGF0YSAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5kcmF3KHRoaXMuZWwpO1xuXHRcdFx0dGhpcy5pbml0ID0gdHJ1ZTtcblx0XHR9XG5cdH07XG5cblx0aW5pdEVsKGVsKSB7XG5cdFx0aWYgKGVsIGluc3RhbmNlb2YgZDMuc2VsZWN0aW9uKSB7XG5cdFx0XHQvLyBpZiBpdCdzIGFscmVhZHkgYSBkMyBzZWxlY3Rpb25cblx0XHRcdHJldHVybiBlbFxuXHRcdH0gZWxzZSBpZiAoZWwgaW5zdGFuY2VvZiAkKSB7XG5cdFx0XHQvLyBpZiBpdCdzIGEganF1ZXJ5IG9iamVjdFxuXHRcdFx0cmV0dXJuIGQzLnNlbGVjdChlbFswXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHRoaXMgc2hvdWxkIGNvdmVyIGlmIGl0J3MgdGhlIGFjdHVhbCBlbGVtZW50IG9yIGEgQ1NTIHN0eWxlIHNlbGVjdGlvbiBzdHJpbmdcblx0XHRcdHJldHVybiBkMy5zZWxlY3QoZWwpO1xuXHRcdH1cblx0fTtcblxuXHRpbml0RGF0YShkYXRhKSB7XG5cdFx0Ly8gZmlsdGVyIG91dCBkYXRhIGVsZW1lbnRzIHdpdGggbm8gZ2VvbG9jYXRpb24gaW5mb1xuXHRcdHZhciBfZGF0YSA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGggOyBpKyspIHtcblx0XHRcdGlmIChkYXRhW2ldLmxhdCAhPT0gXCJcIiAmJiBkYXRhW2ldLmxhdCAhPT0gXCJOT05FXCIpIHtcblx0XHRcdFx0X2RhdGEucHVzaChkYXRhW2ldKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gX2RhdGE7XG5cdH07XG5cblx0dXBkYXRlRGF0YSh2YWx1ZSkge1xuXHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX2RhdGE7XG5cdFx0dGhpcy5fZGF0YSA9IHZhbHVlO1xuXHRcdGlmICh0aGlzLmluaXQgPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLmRyYXcodGhpcy5lbCk7XG5cdFx0XHR0aGlzLmluaXQgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyB0aGlzLnVwZGF0ZURhdGEoKTtcblx0XHRcdC8vIE5PVCBJTVBMRU1FTlRFRFxuXHRcdFx0Y29uc29sZS5sb2coXCJVUERBVElORyBEQVRBIE5PVCBZRVQgSU1QTEVNRU5URURcIik7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKHR5cGVvZiB1cGRhdGVEYXRhKTtcblx0XHQvLyBpZiAodHlwZW9mIHVwZGF0ZURhdGEgPT09ICdmdW5jdGlvbicpIHVwZGF0ZURhdGEoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRkcmF3KHNlbGVjdGlvbikge1xuXHRcdHZhciBvYmogPSB0aGlzO1xuXHRcdHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XG5cdFx0dmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuXHRcdHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0XHR2YXIgc2l6ZUZpZWxkID0gdGhpcy5zaXplRmllbGQ7XG5cdFx0dmFyIGluaXRNYXBDZW50ZXIgPSB0aGlzLmluaXRNYXBDZW50ZXI7XG5cdFx0dmFyIGluaXRNYXBab29tID0gdGhpcy5pbml0TWFwWm9vbTtcblx0XHQvLyB2YXIgZ3JhcGggPSB0aGlzLl9kYXRhO1xuXHRcdC8vIHZhciBjb2xvciA9IHRoaXMuY29sb3I7XG5cdFx0c2VsZWN0aW9uLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsSXRlbSA9IHRoaXM7XG5cdFx0XHR2YXIgbWFwID0gbmV3IEwuTWFwKHNlbEl0ZW0sIHtjZW50ZXI6IGluaXRNYXBDZW50ZXIsIHpvb206IGluaXRNYXBab29tfSlcblx0XHRcdFx0LmFkZExheWVyKG5ldyBMLlRpbGVMYXllcihcImh0dHA6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmdcIiwge1xuXHRcdFx0XHRcdGF0dHJpYnV0aW9uOiAnJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXG5cdFx0XHRcdH0pKTtcblx0XHRcdC8vIHZhciBtYXJrZXJzID0gbmV3IEwuRmVhdHVyZUdyb3VwKCk7XG5cblx0XHRcdHZhciBzdmdMYXllciA9IEwuc3ZnKCk7XG5cdFx0XHRzdmdMYXllci5hZGRUbyhtYXApO1xuXHRcdFx0dmFyIHN2ZyA9IGQzLnNlbGVjdCh0aGlzKS5zZWxlY3QoXCJzdmdcIik7XG5cdFx0XHR2YXIgZyA9IHN2Zy5zZWxlY3QoXCJnXCIpO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoIDsgaSsrKSB7XG5cdFx0XHRcdGRhdGFbaV0uTGF0TG5nID0gbmV3IEwuTGF0TG5nKGRhdGFbaV0ubGF0LCBkYXRhW2ldLmxuZylcblx0XHRcdH1cblx0XHRcdHZhciBzaXplU2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFs1LDIwXSlcblx0XHRcdFx0XHRcdFx0XHQuZG9tYWluKGQzLmV4dGVudChkYXRhLCBmdW5jdGlvbihkKSB7IHJldHVybiBkW3NpemVGaWVsZF07IH0pKTtcblxuXHRcdFx0dmFyIGZlYXR1cmUgPSBnLnNlbGVjdEFsbChcImNpcmNsZVwiKVxuXHRcdFx0LmRhdGEoZGF0YSlcblx0XHRcdC5lbnRlcigpLmFwcGVuZChcImNpcmNsZVwiKVxuXHRcdFx0LnN0eWxlKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcblx0XHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgLjYpXG5cdFx0XHQuc3R5bGUoXCJmaWxsXCIsIFwicmVkXCIpXG5cdFx0XHQvLyAuYXR0cihcInJcIiwgMjApO1xuXHRcdFx0LmF0dHIoXCJyXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNpemVTY2FsZShkW3NpemVGaWVsZF0pOyB9KVxuXHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIFwiaW5zdF9cIiArIGQuSUQ7IH0pXG5cblx0XHRtYXAub24oXCJ2aWV3cmVzZXQsIHpvb21cIiwgdXBkYXRlKTtcblx0XHR1cGRhdGUoKTtcblxuXHRcdGZ1bmN0aW9uIHVwZGF0ZSgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCd1cGRhdGUnKTtcblx0XHRcdGZlYXR1cmUuYXR0cihcInRyYW5zZm9ybVwiLFxuXHRcdFx0ZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIrXG5cdFx0XHRcdFx0bWFwLmxhdExuZ1RvTGF5ZXJQb2ludChkLkxhdExuZykueCArXCIsXCIrXG5cdFx0XHRcdFx0bWFwLmxhdExuZ1RvTGF5ZXJQb2ludChkLkxhdExuZykueSArXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHR9XG5cblxuXHRcdFx0Ly8gdmFyIHN2ZyA9IGQzLnNlbGVjdChzZWxJdGVtKS5hcHBlbmQoXCJzdmdcIikuYXR0cihcIndpZHRoXCIsIHdpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhncmFwaCk7XG5cblx0XHRcdGZ1bmN0aW9uIGFkZE1hcmtlcihsYXQsIGxuZywgZGF0YSkge1xuXHRcdFx0XHRcblx0XHRcdFx0dmFyIG9wdCA9IHt9O1xuXHRcdFx0XHRpZiAoZGF0YVsnY291bnRfaW5zdCddPjEpIHtcblx0XHRcdFx0XHRvcHRbJ3pJbmRleE9mZnNldCddID0gMTAwMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRvcHRbJ29wYWNpdHknXSA9IChkYXRhWydDT1VOVF9BVVRIT1InXSA9PSAxKSA/IC41IDogMS4wO1xuXHRcdFx0XHR2YXIgbSA9IG5ldyBMLmNpcmNsZU1hcmtlcihbbGF0LCBsbmddLCBvcHQpO1xuXG5cdFx0XHRcdHZhciBjb3VudCA9IDE7XG5cdFx0XHRcdG0ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0aWYgKGNvdW50ID09IDEpIHtcblx0XHRcdFx0XHRcdHZhciAkZGl2ID0gJCgnPGRpdiBzdHlsZT1cIndpZHRoOiAyMDBweDsgaGVpZ2h0OiAyMDBweDsgcG9pbnRlci1ldmVudHM6IG5vbmU7XCI+PC9kaXY+Jyk7XG5cdFx0XHRcdFx0XHQkZGl2LmFkZENsYXNzKCdtYXBQb3BVcCcpXG5cdFx0XHRcdFx0XHR2YXIgZGl2ID0gJGRpdlswXTtcblx0XHRcdFx0XHRcdG0uYmluZFBvcHVwKGRpdik7XG5cdFx0XHRcdFx0XHRtLm9wZW5Qb3B1cCgpO1xuXG5cdFx0XHRcdFx0XHR2YXIgJHRpdGxlID0gJCgnPGgzPjwvaDM+JykudGV4dChkYXRhLk5BTUUpO1xuXHRcdFx0XHRcdFx0JGRpdi5wcmVwZW5kKCR0aXRsZSk7XG5cdFx0XHRcdFx0XHQkZGl2LmFwcGVuZCgkKCc8cD48L3A+JykudGV4dChcIkNvdW50OiBcIiArIGRhdGFbJ0NPVU5UX0FVVEhPUiddKSk7XG5cblx0XHRcdFx0XHRcdGNvdW50ICsrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdCAgIFxuXHRcdFx0XHRtYXJrZXJzLmFkZExheWVyKG0pO1xuXG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGluY3JlbWVudExhdExuZygpIHtcblx0XHRcdFx0bGF0ID0gbGF0ICsgLjAxO1xuXHRcdFx0XHRsbmcgPSBsbmcgKyAuMDE7XG5cdFx0XHR9XG5cblx0XHRcdC8vIHZhciBsYXRsbmdzID0gW107XG5cdFx0XHQvLyBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vXG5cdFx0XHQvLyBcdGlmIChkYXRhW2ldLmxhdCAhPT0gXCJcIiAmJiBkYXRhW2ldLmxhdCAhPT0gXCJOT05FXCIpIHtcblx0XHRcdC8vIFx0XHR2YXIgbGF0ID0gK2RhdGFbaV0ubGF0O1xuXHRcdFx0Ly8gXHRcdHZhciBsbmcgPSArZGF0YVtpXS5sbmc7XG5cdFx0XHQvLyBcdFx0dmFyIGxhdGxuZ1N0ciA9IGxhdCArIFwiLFwiICsgbG5nO1xuXHRcdFx0Ly8gXHRcdHdoaWxlIChsYXRsbmdzLmluY2x1ZGVzKGxhdGxuZ1N0cikgPT09IHRydWUpIHtcblx0XHRcdC8vIFx0XHRcdGluY3JlbWVudExhdExuZygpO1xuXHRcdFx0Ly8gXHRcdFx0dmFyIGxhdGxuZ1N0ciA9IGxhdCArIFwiLFwiICsgbG5nO1xuXHRcdFx0Ly8gXHRcdFx0XG5cdFx0XHQvLyBcdFx0fVxuXHRcdFx0Ly8gXHRcdGFkZE1hcmtlcihsYXQsIGxuZywgZGF0YVtpXSk7XG5cdFx0XHQvLyBcdFx0bGF0bG5ncy5wdXNoKGxhdGxuZ1N0cik7XG4gICAgICAgICAgICAvL1xuXHRcdFx0Ly8gXHR9XG5cdFx0XHQvLyBtYXAuYWRkTGF5ZXIobWFya2Vycyk7XG5cdFx0XHQvLyB9XG5cblxuXHRcdH0pO1xuXHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8vIHVwZGF0ZURhdGEoKSB7XG5cdC8vIFx0Ly8gdXNlIEQzIHVwZGF0ZSBwYXR0ZXJuIHdpdGggZGF0YVxuICAgIC8vXG5cdC8vIFx0dmFyIGdyYXBoID0gdGhpcy5fZGF0YTtcblx0Ly8gXHRncmFwaC5ub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcblx0Ly8gXHRcdGQuaWQgPSBkLmlkLnRvU3RyaW5nKCk7XG5cdC8vIFx0fSlcblx0Ly8gXHRncmFwaC5saW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcblx0Ly8gXHRcdGQuaWQgPSBnZXRMaW5rSWQoZCwgZ3JhcGguZGlyZWN0ZWQpO1xuXHQvLyBcdH0pO1xuXHQvLyBcdHRoaXMuc2ltdWxhdGlvblxuXHQvLyBcdFx0Lm5vZGVzKGdyYXBoLm5vZGVzKVxuXHQvLyBcdFx0Lm9uKFwidGlja1wiLCB0aWNrZWQpO1xuICAgIC8vXG5cdC8vIFx0c2ltdWxhdGlvbi5mb3JjZShcImxpbmtcIilcblx0Ly8gXHRcdC5saW5rcyhncmFwaC5saW5rcyk7XG5cdC8vIFx0Y29uc29sZS5sb2coZ3JhcGgpO1xuXHQvLyBcdHNpbXVsYXRpb24uc3RvcCgpO1xuXHQvLyBcdG5vZGUgPSBub2RlLmRhdGEoZ3JhcGgubm9kZXMsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuaWQ7IH0pO1xuXHQvLyBcdHZhciBub2RlRXhpdCA9IG5vZGUuZXhpdCgpO1xuXHQvLyBcdC8vIG5vZGVFeGl0LnNlbGVjdEFsbChcImNpcmNsZVwiKS5hdHRyKFwiZmlsbFwiLCBcInJlZFwiKTtcblx0Ly8gXHR2YXIgdCA9IGQzLnRyYW5zaXRpb24oJ3VwZGF0ZURhdGEnKS5kdXJhdGlvbig1MDAwKTtcblx0Ly8gXHRub2RlRXhpdC5zZWxlY3RBbGwoXCJjaXJjbGVcIikuc3R5bGUoXCJzdHJva2VcIiwgXCJyZWRcIikudHJhbnNpdGlvbih0KS5hdHRyKFwiclwiLCAwKTtcblx0Ly8gXHRub2RlID0gZW50ZXJOb2Rlcyhub2RlLCB0KTtcblx0Ly8gXHQvLyBub2RlID0gbm9kZS5jYWxsKGVudGVyTm9kZXMsIHQpO1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuXHQvLyBcdGxpbmsgPSBsaW5rXG5cdC8vIFx0XHQuZGF0YShncmFwaC5saW5rcywgZnVuY3Rpb24oZCkge1xuXHQvLyBcdFx0XHQvLyBkLmlkID0gZ2V0TGlua0lkKGQpO1xuXHQvLyBcdFx0XHRyZXR1cm4gZC5pZDtcblx0Ly8gXHRcdH0pO1xuXHQvLyBcdHZhciBsaW5rRXhpdCA9IGxpbmsuZXhpdCgpO1xuXHQvLyBcdGxpbmtFeGl0LnN0eWxlKFwic3Ryb2tlXCIsIFwicmVkXCIpLnRyYW5zaXRpb24odCkuc3R5bGUoXCJvcGFjaXR5XCIsIDApLnJlbW92ZSgpO1xuXHQvLyBcdC8vIGxpbmtFeGl0LnJlbW92ZSgpO1xuXHQvLyBcdGxpbmsgPSBlbnRlckxpbmtzKGxpbmssIHQpO1xuXHQvLyBcdHNpbXVsYXRpb24ub24oXCJ0aWNrXCIpLmNhbGwoKTtcbiAgICAvL1xuICAgIC8vXG5cdC8vIFx0dC5lbmQoKS50aGVuKGZ1bmN0aW9uKGQpIHtcblx0Ly8gXHRcdG5vZGVFeGl0LnJlbW92ZSgpO1xuXHQvLyBcdFx0Ly8gc2ltdWxhdGlvbi5hbHBoYSgxKS5yZXN0YXJ0KCk7XG5cdC8vIFx0XHQvLyBzaW11bGF0aW9uXG5cdC8vIFx0XHRcdC8vIC5hbHBoYURlY2F5KC4wMDA1KVxuXHQvLyBcdFx0XHQvLyAudmVsb2NpdHlEZWNheSgwLjkpXG5cdC8vIFx0XHRcdC8vIC5hbHBoYSguMSlcblx0Ly8gXHRcdFx0Ly8gLnJlc3RhcnQoKTtcblx0Ly8gXHR9KTtcblx0Ly8gXHRcblx0Ly8gXHQvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHQvLyBcdC8vIH0sIDQwMDApO1xuXHQvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlYWZsZXREM1BvaW50TWFwO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9sZWFmbGV0X187Il0sInNvdXJjZVJvb3QiOiIifQ==