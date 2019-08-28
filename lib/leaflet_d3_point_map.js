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
      sizeScale: [1, 20],
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

    if (this.sizeScale instanceof Array && this.sizeScale.length === 2) {
      this.sizeScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range(this.sizeScale);
    }

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
      var g = this.el.select("svg g");
      var circle = g.selectAll("circle").data(this._data, function (d) {
        return d.ID;
      });
      var dur = 500;
      circle.exit().transition().duration(dur).attr("r", 0).remove();
      g.enter().append("circle");
      g.each(function (d) {
        console.log(d);
      });
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
    var sizeScale = this.sizeScale;
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

      sizeScale.domain(d3__WEBPACK_IMPORTED_MODULE_0__["extent"](data, function (d) {
        return d[sizeField];
      }));
      var feature = g.selectAll("circle").data(data, function (d) {
        return d.ID;
      }).enter().append("circle").style("stroke", "black").style("opacity", .6).style("fill", "red") // .attr("r", 20);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFmbGV0X2QzX3BvaW50X21hcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbGVhZmxldF9kM19wb2ludF9tYXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhZmxldF9kM19wb2ludF9tYXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZmxldF9kM19wb2ludF9tYXAvLi9zcmMvdmlzLmpzIiwid2VicGFjazovL2xlYWZsZXRfZDNfcG9pbnRfbWFwL2V4dGVybmFsIFwiZDNcIiIsIndlYnBhY2s6Ly9sZWFmbGV0X2QzX3BvaW50X21hcC9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL2xlYWZsZXRfZDNfcG9pbnRfbWFwL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJsZWFmbGV0XCIsXCJjb21tb25qczJcIjpcImxlYWZsZXRcIixcImFtZFwiOlwibGVhZmxldFwiLFwicm9vdFwiOlwiTFwifSJdLCJuYW1lcyI6WyIkIiwialF1ZXJ5IiwiTGVhZmxldEQzUG9pbnRNYXAiLCJjb25zdHJ1Y3RvciIsIm9wdHMiLCJkZWZhdWx0cyIsImVsIiwiZGF0YSIsIndpZHRoIiwic2l6ZUZpZWxkIiwic2l6ZVNjYWxlIiwiaW5pdE1hcENlbnRlciIsImluaXRNYXBab29tIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5pdEVsIiwiX2RhdGEiLCJpbml0RGF0YSIsInVwZGF0ZURhdGEiLCJoZWlnaHQiLCJzdHlsZSIsIkFycmF5IiwibGVuZ3RoIiwiZDMiLCJyYW5nZSIsImluaXQiLCJjb25zb2xlIiwibG9nIiwiZHJhdyIsImkiLCJsYXQiLCJwdXNoIiwidmFsdWUiLCJhcmd1bWVudHMiLCJnIiwic2VsZWN0IiwiY2lyY2xlIiwic2VsZWN0QWxsIiwiZCIsIklEIiwiZHVyIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImF0dHIiLCJyZW1vdmUiLCJlbnRlciIsImFwcGVuZCIsImVhY2giLCJzZWxlY3Rpb24iLCJvYmoiLCJzZWxJdGVtIiwibWFwIiwiTCIsIk1hcCIsImNlbnRlciIsInpvb20iLCJhZGRMYXllciIsIlRpbGVMYXllciIsImF0dHJpYnV0aW9uIiwic3ZnTGF5ZXIiLCJzdmciLCJhZGRUbyIsIkxhdExuZyIsImxuZyIsImRvbWFpbiIsImZlYXR1cmUiLCJvbiIsInVwZGF0ZSIsImxhdExuZ1RvTGF5ZXJQb2ludCIsIngiLCJ5IiwiYWRkTWFya2VyIiwib3B0IiwibSIsImNpcmNsZU1hcmtlciIsImNvdW50IiwiJGRpdiIsImFkZENsYXNzIiwiZGl2IiwiYmluZFBvcHVwIiwib3BlblBvcHVwIiwiJHRpdGxlIiwidGV4dCIsIk5BTUUiLCJwcmVwZW5kIiwibWFya2VycyIsImluY3JlbWVudExhdExuZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FB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TCxDQUFhSCxNQUFiO0FBQ0FMLGdCQUFJLENBQUM5QixNQUFMLENBQVkvQyxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFtRixJQUFiLENBQWtCLFlBQVk1RSxJQUFJLENBQUMsY0FBRCxDQUFsQyxDQUFaO0FBRUFxRSxpQkFBSztBQUNMO0FBQ0QsU0FkRDtBQWdCQVUsZUFBTyxDQUFDN0IsUUFBUixDQUFpQmlCLENBQWpCO0FBRUE7O0FBRUQsZUFBU2EsZUFBVCxHQUEyQjtBQUMxQnpELFdBQUcsR0FBR0EsR0FBRyxHQUFHLEdBQVo7QUFDQWtDLFdBQUcsR0FBR0EsR0FBRyxHQUFHLEdBQVo7QUFDQSxPQS9Fd0IsQ0FpRnpCO0FBQ0E7QUFDUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUztBQUNUO0FBQ0E7QUFDQTs7QUFHQSxLQXJHRDtBQXNHRCxXQUFPLElBQVA7QUFDQyxHQXhNc0IsQ0EwTXZCO0FBQ0E7QUFDRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRztBQUNBO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQTlQdUI7O0FBaVFUOUQsZ0ZBQWYsRTs7Ozs7Ozs7Ozs7QUM5UUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEscUQiLCJmaWxlIjoibGVhZmxldF9kM19wb2ludF9tYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJkM1wiKSwgcmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcImxlYWZsZXRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJsZWFmbGV0X2QzX3BvaW50X21hcFwiLCBbXCJkM1wiLCBcImpRdWVyeVwiLCBcImxlYWZsZXRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibGVhZmxldF9kM19wb2ludF9tYXBcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJkM1wiKSwgcmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcImxlYWZsZXRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxlYWZsZXRfZDNfcG9pbnRfbWFwXCJdID0gZmFjdG9yeShyb290W1wiZDNcIl0sIHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJMXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbGVhZmxldF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgTGVhZmxldEQzUG9pbnRNYXAgZnJvbSAnLi92aXMuanMnO1xuLy8gZXhwb3J0IHsgTGVhZmxldEQzUG9pbnRNYXAgfTtcbmV4cG9ydCB7IExlYWZsZXREM1BvaW50TWFwIH07XG5cbiIsIi8vIExlYWZsZXREM1BvaW50TWFwXG5cbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcbmNvbnN0ICQgPSBqUXVlcnk7XG5pbXBvcnQgTCBmcm9tICdsZWFmbGV0JztcblxuXG5cbi8vIHJldXNhYmxlIGNoYXJ0IHBhdHRlcm4gaW5zcGlyZWQgYnk6XG4vLyBodHRwczovL2Jvc3Qub2Nrcy5vcmcvbWlrZS9jaGFydC9cbi8vIGFuZFxuLy8gaHR0cHM6Ly93d3cudG9wdGFsLmNvbS9kMy1qcy90b3dhcmRzLXJldXNhYmxlLWQzLWpzLWNoYXJ0c1xuY2xhc3MgTGVhZmxldEQzUG9pbnRNYXAge1xuXHRjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcblx0XHRjb25zdCBkZWZhdWx0cyA9IHtcblx0XHRcdGVsOiBudWxsLFxuXHRcdFx0ZGF0YTogbnVsbCxcblx0XHRcdHdpZHRoOiA5NjAsXG5cdFx0XHRzaXplRmllbGQ6IFwiQ09VTlRfQVVUSE9SXCIsXG5cdFx0XHRzaXplU2NhbGU6IFsxLDIwXSxcblx0XHRcdGluaXRNYXBDZW50ZXI6IFszNy44LCAtMjYuOV0sXG5cdFx0XHRpbml0TWFwWm9vbTogMS41LFxuXHRcdFx0Ly8gY29sb3I6IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKSxcblx0XHRcdC8vIGZvcmNlU3RyZW5ndGg6IC0yLFxuXHRcdH07XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0cywgb3B0cyk7ICAvLyBvcHRzIHdpbGwgb3ZlcndyaXRlIGRlZmF1bHRzXG5cdFx0dGhpcy5lbCA9IHRoaXMuaW5pdEVsKHRoaXMuZWwpO1xuXHRcdHRoaXMuX2RhdGEgPSB0aGlzLmluaXREYXRhKHRoaXMuZGF0YSk7XG5cdFx0dGhpcy5kYXRhID0gdGhpcy51cGRhdGVEYXRhO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5oZWlnaHQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR0aGlzLmhlaWdodCA9IC42MjUgKiB0aGlzLndpZHRoO1xuXHRcdH1cblx0XHR0aGlzLmVsLnN0eWxlKFwid2lkdGhcIiwgdGhpcy53aWR0aCArIFwicHhcIilcblx0XHRcdFx0LnN0eWxlKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0ICsgXCJweFwiKTtcblx0XHRpZiAoKHRoaXMuc2l6ZVNjYWxlIGluc3RhbmNlb2YgQXJyYXkpICYmICh0aGlzLnNpemVTY2FsZS5sZW5ndGggPT09IDIpKSB7XG5cdFx0XHR0aGlzLnNpemVTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UodGhpcy5zaXplU2NhbGUpO1xuXHRcdH1cblx0XHR0aGlzLmluaXQgPSBmYWxzZTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLl9kYXRhKTtcblx0XHRpZiAodGhpcy5lbCAhPT0gbnVsbCAmJiB0aGlzLl9kYXRhICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmRyYXcodGhpcy5lbCk7XG5cdFx0XHR0aGlzLmluaXQgPSB0cnVlO1xuXHRcdH1cblx0fTtcblxuXHRpbml0RWwoZWwpIHtcblx0XHRpZiAoZWwgaW5zdGFuY2VvZiBkMy5zZWxlY3Rpb24pIHtcblx0XHRcdC8vIGlmIGl0J3MgYWxyZWFkeSBhIGQzIHNlbGVjdGlvblxuXHRcdFx0cmV0dXJuIGVsXG5cdFx0fSBlbHNlIGlmIChlbCBpbnN0YW5jZW9mICQpIHtcblx0XHRcdC8vIGlmIGl0J3MgYSBqcXVlcnkgb2JqZWN0XG5cdFx0XHRyZXR1cm4gZDMuc2VsZWN0KGVsWzBdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gdGhpcyBzaG91bGQgY292ZXIgaWYgaXQncyB0aGUgYWN0dWFsIGVsZW1lbnQgb3IgYSBDU1Mgc3R5bGUgc2VsZWN0aW9uIHN0cmluZ1xuXHRcdFx0cmV0dXJuIGQzLnNlbGVjdChlbCk7XG5cdFx0fVxuXHR9O1xuXG5cdGluaXREYXRhKGRhdGEpIHtcblx0XHQvLyBmaWx0ZXIgb3V0IGRhdGEgZWxlbWVudHMgd2l0aCBubyBnZW9sb2NhdGlvbiBpbmZvXG5cdFx0dmFyIF9kYXRhID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aCA7IGkrKykge1xuXHRcdFx0aWYgKGRhdGFbaV0ubGF0ICE9PSBcIlwiICYmIGRhdGFbaV0ubGF0ICE9PSBcIk5PTkVcIikge1xuXHRcdFx0XHRfZGF0YS5wdXNoKGRhdGFbaV0pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBfZGF0YTtcblx0fTtcblxuXHR1cGRhdGVEYXRhKHZhbHVlKSB7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fZGF0YTtcblx0XHR0aGlzLl9kYXRhID0gdmFsdWU7XG5cdFx0aWYgKHRoaXMuaW5pdCA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMuZHJhdyh0aGlzLmVsKTtcblx0XHRcdHRoaXMuaW5pdCA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHRoaXMudXBkYXRlRGF0YSgpO1xuXHRcdFx0Ly8gTk9UIElNUExFTUVOVEVEXG5cdFx0XHRjb25zb2xlLmxvZyhcIlVQREFUSU5HIERBVEEgTk9UIFlFVCBJTVBMRU1FTlRFRFwiKTtcblxuXHRcdFx0dmFyIGcgPSB0aGlzLmVsLnNlbGVjdChcInN2ZyBnXCIpO1xuXHRcdFx0dmFyIGNpcmNsZSA9IGcuc2VsZWN0QWxsKFwiY2lyY2xlXCIpXG5cdFx0XHRcdC5kYXRhKHRoaXMuX2RhdGEsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuSUQ7IH0pO1xuXHRcdFx0dmFyIGR1ciA9IDUwMDtcblx0XHRcdGNpcmNsZS5leGl0KClcblx0XHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0XHQuZHVyYXRpb24oZHVyKVxuXHRcdFx0XHQuYXR0cihcInJcIiwgMClcblx0XHRcdFx0LnJlbW92ZSgpO1xuXG5cdFx0XHRnLmVudGVyKCkuYXBwZW5kKFwiY2lyY2xlXCIpO1xuXHRcdFx0Zy5lYWNoKGZ1bmN0aW9uKGQpIHsgY29uc29sZS5sb2coZCk7IH0pO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZyh0eXBlb2YgdXBkYXRlRGF0YSk7XG5cdFx0Ly8gaWYgKHR5cGVvZiB1cGRhdGVEYXRhID09PSAnZnVuY3Rpb24nKSB1cGRhdGVEYXRhKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0ZHJhdyhzZWxlY3Rpb24pIHtcblx0XHR2YXIgb2JqID0gdGhpcztcblx0XHR2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xuXHRcdHZhciBoZWlnaHQgPSB0aGlzLmhlaWdodDtcblx0XHR2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XG5cdFx0dmFyIHNpemVGaWVsZCA9IHRoaXMuc2l6ZUZpZWxkO1xuXHRcdHZhciBzaXplU2NhbGUgPSB0aGlzLnNpemVTY2FsZTtcblx0XHR2YXIgaW5pdE1hcENlbnRlciA9IHRoaXMuaW5pdE1hcENlbnRlcjtcblx0XHR2YXIgaW5pdE1hcFpvb20gPSB0aGlzLmluaXRNYXBab29tO1xuXHRcdC8vIHZhciBncmFwaCA9IHRoaXMuX2RhdGE7XG5cdFx0Ly8gdmFyIGNvbG9yID0gdGhpcy5jb2xvcjtcblx0XHRzZWxlY3Rpb24uZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxJdGVtID0gdGhpcztcblx0XHRcdHZhciBtYXAgPSBuZXcgTC5NYXAoc2VsSXRlbSwge2NlbnRlcjogaW5pdE1hcENlbnRlciwgem9vbTogaW5pdE1hcFpvb219KVxuXHRcdFx0XHQuYWRkTGF5ZXIobmV3IEwuVGlsZUxheWVyKFwiaHR0cDovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZ1wiLCB7XG5cdFx0XHRcdFx0YXR0cmlidXRpb246ICcmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcblx0XHRcdFx0fSkpO1xuXHRcdFx0Ly8gdmFyIG1hcmtlcnMgPSBuZXcgTC5GZWF0dXJlR3JvdXAoKTtcblxuXHRcdFx0dmFyIHN2Z0xheWVyID0gTC5zdmcoKTtcblx0XHRcdHN2Z0xheWVyLmFkZFRvKG1hcCk7XG5cdFx0XHR2YXIgc3ZnID0gZDMuc2VsZWN0KHRoaXMpLnNlbGVjdChcInN2Z1wiKTtcblx0XHRcdHZhciBnID0gc3ZnLnNlbGVjdChcImdcIik7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGggOyBpKyspIHtcblx0XHRcdFx0ZGF0YVtpXS5MYXRMbmcgPSBuZXcgTC5MYXRMbmcoZGF0YVtpXS5sYXQsIGRhdGFbaV0ubG5nKVxuXHRcdFx0fVxuXHRcdFx0c2l6ZVNjYWxlLmRvbWFpbihkMy5leHRlbnQoZGF0YSwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZFtzaXplRmllbGRdOyB9KSk7XG5cblx0XHRcdHZhciBmZWF0dXJlID0gZy5zZWxlY3RBbGwoXCJjaXJjbGVcIilcblx0XHRcdC5kYXRhKGRhdGEsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuSUQ7IH0pXG5cdFx0XHQuZW50ZXIoKS5hcHBlbmQoXCJjaXJjbGVcIilcblx0XHRcdC5zdHlsZShcInN0cm9rZVwiLCBcImJsYWNrXCIpXG5cdFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIC42KVxuXHRcdFx0LnN0eWxlKFwiZmlsbFwiLCBcInJlZFwiKVxuXHRcdFx0Ly8gLmF0dHIoXCJyXCIsIDIwKTtcblx0XHRcdC5hdHRyKFwiclwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzaXplU2NhbGUoZFtzaXplRmllbGRdKTsgfSlcblx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbihkKSB7IHJldHVybiBcImluc3RfXCIgKyBkLklEOyB9KVxuXG5cdFx0bWFwLm9uKFwidmlld3Jlc2V0LCB6b29tXCIsIHVwZGF0ZSk7XG5cdFx0dXBkYXRlKCk7XG5cblx0XHRmdW5jdGlvbiB1cGRhdGUoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygndXBkYXRlJyk7XG5cdFx0XHRmZWF0dXJlLmF0dHIoXCJ0cmFuc2Zvcm1cIixcblx0XHRcdGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0cmV0dXJuIFwidHJhbnNsYXRlKFwiK1xuXHRcdFx0XHRcdG1hcC5sYXRMbmdUb0xheWVyUG9pbnQoZC5MYXRMbmcpLnggK1wiLFwiK1xuXHRcdFx0XHRcdG1hcC5sYXRMbmdUb0xheWVyUG9pbnQoZC5MYXRMbmcpLnkgK1wiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0fVxuXG5cblx0XHRcdC8vIHZhciBzdmcgPSBkMy5zZWxlY3Qoc2VsSXRlbSkuYXBwZW5kKFwic3ZnXCIpLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCkuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coZ3JhcGgpO1xuXG5cdFx0XHRmdW5jdGlvbiBhZGRNYXJrZXIobGF0LCBsbmcsIGRhdGEpIHtcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBvcHQgPSB7fTtcblx0XHRcdFx0aWYgKGRhdGFbJ2NvdW50X2luc3QnXT4xKSB7XG5cdFx0XHRcdFx0b3B0Wyd6SW5kZXhPZmZzZXQnXSA9IDEwMDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0b3B0WydvcGFjaXR5J10gPSAoZGF0YVsnQ09VTlRfQVVUSE9SJ10gPT0gMSkgPyAuNSA6IDEuMDtcblx0XHRcdFx0dmFyIG0gPSBuZXcgTC5jaXJjbGVNYXJrZXIoW2xhdCwgbG5nXSwgb3B0KTtcblxuXHRcdFx0XHR2YXIgY291bnQgPSAxO1xuXHRcdFx0XHRtLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGlmIChjb3VudCA9PSAxKSB7XG5cdFx0XHRcdFx0XHR2YXIgJGRpdiA9ICQoJzxkaXYgc3R5bGU9XCJ3aWR0aDogMjAwcHg7IGhlaWdodDogMjAwcHg7IHBvaW50ZXItZXZlbnRzOiBub25lO1wiPjwvZGl2PicpO1xuXHRcdFx0XHRcdFx0JGRpdi5hZGRDbGFzcygnbWFwUG9wVXAnKVxuXHRcdFx0XHRcdFx0dmFyIGRpdiA9ICRkaXZbMF07XG5cdFx0XHRcdFx0XHRtLmJpbmRQb3B1cChkaXYpO1xuXHRcdFx0XHRcdFx0bS5vcGVuUG9wdXAoKTtcblxuXHRcdFx0XHRcdFx0dmFyICR0aXRsZSA9ICQoJzxoMz48L2gzPicpLnRleHQoZGF0YS5OQU1FKTtcblx0XHRcdFx0XHRcdCRkaXYucHJlcGVuZCgkdGl0bGUpO1xuXHRcdFx0XHRcdFx0JGRpdi5hcHBlbmQoJCgnPHA+PC9wPicpLnRleHQoXCJDb3VudDogXCIgKyBkYXRhWydDT1VOVF9BVVRIT1InXSkpO1xuXG5cdFx0XHRcdFx0XHRjb3VudCArK1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHQgICBcblx0XHRcdFx0bWFya2Vycy5hZGRMYXllcihtKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBpbmNyZW1lbnRMYXRMbmcoKSB7XG5cdFx0XHRcdGxhdCA9IGxhdCArIC4wMTtcblx0XHRcdFx0bG5nID0gbG5nICsgLjAxO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyB2YXIgbGF0bG5ncyA9IFtdO1xuXHRcdFx0Ly8gZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvL1xuXHRcdFx0Ly8gXHRpZiAoZGF0YVtpXS5sYXQgIT09IFwiXCIgJiYgZGF0YVtpXS5sYXQgIT09IFwiTk9ORVwiKSB7XG5cdFx0XHQvLyBcdFx0dmFyIGxhdCA9ICtkYXRhW2ldLmxhdDtcblx0XHRcdC8vIFx0XHR2YXIgbG5nID0gK2RhdGFbaV0ubG5nO1xuXHRcdFx0Ly8gXHRcdHZhciBsYXRsbmdTdHIgPSBsYXQgKyBcIixcIiArIGxuZztcblx0XHRcdC8vIFx0XHR3aGlsZSAobGF0bG5ncy5pbmNsdWRlcyhsYXRsbmdTdHIpID09PSB0cnVlKSB7XG5cdFx0XHQvLyBcdFx0XHRpbmNyZW1lbnRMYXRMbmcoKTtcblx0XHRcdC8vIFx0XHRcdHZhciBsYXRsbmdTdHIgPSBsYXQgKyBcIixcIiArIGxuZztcblx0XHRcdC8vIFx0XHRcdFxuXHRcdFx0Ly8gXHRcdH1cblx0XHRcdC8vIFx0XHRhZGRNYXJrZXIobGF0LCBsbmcsIGRhdGFbaV0pO1xuXHRcdFx0Ly8gXHRcdGxhdGxuZ3MucHVzaChsYXRsbmdTdHIpO1xuICAgICAgICAgICAgLy9cblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gbWFwLmFkZExheWVyKG1hcmtlcnMpO1xuXHRcdFx0Ly8gfVxuXG5cblx0XHR9KTtcblx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvLyB1cGRhdGVEYXRhKCkge1xuXHQvLyBcdC8vIHVzZSBEMyB1cGRhdGUgcGF0dGVybiB3aXRoIGRhdGFcbiAgICAvL1xuXHQvLyBcdHZhciBncmFwaCA9IHRoaXMuX2RhdGE7XG5cdC8vIFx0Z3JhcGgubm9kZXMuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRkLmlkID0gZC5pZC50b1N0cmluZygpO1xuXHQvLyBcdH0pXG5cdC8vIFx0Z3JhcGgubGlua3MuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRkLmlkID0gZ2V0TGlua0lkKGQsIGdyYXBoLmRpcmVjdGVkKTtcblx0Ly8gXHR9KTtcblx0Ly8gXHR0aGlzLnNpbXVsYXRpb25cblx0Ly8gXHRcdC5ub2RlcyhncmFwaC5ub2Rlcylcblx0Ly8gXHRcdC5vbihcInRpY2tcIiwgdGlja2VkKTtcbiAgICAvL1xuXHQvLyBcdHNpbXVsYXRpb24uZm9yY2UoXCJsaW5rXCIpXG5cdC8vIFx0XHQubGlua3MoZ3JhcGgubGlua3MpO1xuXHQvLyBcdGNvbnNvbGUubG9nKGdyYXBoKTtcblx0Ly8gXHRzaW11bGF0aW9uLnN0b3AoKTtcblx0Ly8gXHRub2RlID0gbm9kZS5kYXRhKGdyYXBoLm5vZGVzLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLmlkOyB9KTtcblx0Ly8gXHR2YXIgbm9kZUV4aXQgPSBub2RlLmV4aXQoKTtcblx0Ly8gXHQvLyBub2RlRXhpdC5zZWxlY3RBbGwoXCJjaXJjbGVcIikuYXR0cihcImZpbGxcIiwgXCJyZWRcIik7XG5cdC8vIFx0dmFyIHQgPSBkMy50cmFuc2l0aW9uKCd1cGRhdGVEYXRhJykuZHVyYXRpb24oNTAwMCk7XG5cdC8vIFx0bm9kZUV4aXQuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLnN0eWxlKFwic3Ryb2tlXCIsIFwicmVkXCIpLnRyYW5zaXRpb24odCkuYXR0cihcInJcIiwgMCk7XG5cdC8vIFx0bm9kZSA9IGVudGVyTm9kZXMobm9kZSwgdCk7XG5cdC8vIFx0Ly8gbm9kZSA9IG5vZGUuY2FsbChlbnRlck5vZGVzLCB0KTtcbiAgICAvL1xuICAgIC8vXG4gICAgLy9cblx0Ly8gXHRsaW5rID0gbGlua1xuXHQvLyBcdFx0LmRhdGEoZ3JhcGgubGlua3MsIGZ1bmN0aW9uKGQpIHtcblx0Ly8gXHRcdFx0Ly8gZC5pZCA9IGdldExpbmtJZChkKTtcblx0Ly8gXHRcdFx0cmV0dXJuIGQuaWQ7XG5cdC8vIFx0XHR9KTtcblx0Ly8gXHR2YXIgbGlua0V4aXQgPSBsaW5rLmV4aXQoKTtcblx0Ly8gXHRsaW5rRXhpdC5zdHlsZShcInN0cm9rZVwiLCBcInJlZFwiKS50cmFuc2l0aW9uKHQpLnN0eWxlKFwib3BhY2l0eVwiLCAwKS5yZW1vdmUoKTtcblx0Ly8gXHQvLyBsaW5rRXhpdC5yZW1vdmUoKTtcblx0Ly8gXHRsaW5rID0gZW50ZXJMaW5rcyhsaW5rLCB0KTtcblx0Ly8gXHRzaW11bGF0aW9uLm9uKFwidGlja1wiKS5jYWxsKCk7XG4gICAgLy9cbiAgICAvL1xuXHQvLyBcdHQuZW5kKCkudGhlbihmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRub2RlRXhpdC5yZW1vdmUoKTtcblx0Ly8gXHRcdC8vIHNpbXVsYXRpb24uYWxwaGEoMSkucmVzdGFydCgpO1xuXHQvLyBcdFx0Ly8gc2ltdWxhdGlvblxuXHQvLyBcdFx0XHQvLyAuYWxwaGFEZWNheSguMDAwNSlcblx0Ly8gXHRcdFx0Ly8gLnZlbG9jaXR5RGVjYXkoMC45KVxuXHQvLyBcdFx0XHQvLyAuYWxwaGEoLjEpXG5cdC8vIFx0XHRcdC8vIC5yZXN0YXJ0KCk7XG5cdC8vIFx0fSk7XG5cdC8vIFx0XG5cdC8vIFx0Ly8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0Ly8gXHQvLyB9LCA0MDAwKTtcblx0Ly8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZWFmbGV0RDNQb2ludE1hcDtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbGVhZmxldF9fOyJdLCJzb3VyY2VSb290IjoiIn0=