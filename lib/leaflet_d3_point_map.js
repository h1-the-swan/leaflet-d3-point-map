(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("d3"), require("jQuery"), require("leaflet"));
	else if(typeof define === 'function' && define.amd)
		define("leaflet_d3_point_map", ["d3", "jQuery", "leaflet"], factory);
	else if(typeof exports === 'object')
		exports["leaflet_d3_point_map"] = factory(require("d3"), require("jQuery"), require("leaflet"));
	else
		root["leaflet_d3_point_map"] = factory(root["d3"], root["jQuery"], root["leaflet"]);
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
      width: 960 // color: d3.scaleOrdinal(d3.schemeCategory10),
      // forceStrength: -2,

    };
    Object.assign(this, defaults, opts); // opts will overwrite defaults

    this._data = this.data;
    this.data = this.updateData;

    if (typeof this.height === 'undefined') {
      this.height = .625 * this.width;
    }

    this.manyBody = d3__WEBPACK_IMPORTED_MODULE_0__["forceManyBody"]().strength(this.forceStrength);
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
    } // console.log(typeof updateData);
    // if (typeof updateData === 'function') updateData();


    return this;
  }

  draw(selection) {
    var obj = this;
    var width = this.width;
    var height = this.height; // var graph = this._data;
    // var color = this.color;

    selection.each(function () {
      var selItem = this; // var svg = d3.select(selItem).append("svg").attr("width", width).attr("height", height);
      // console.log(graph);
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
/*!**************************!*\
  !*** external "leaflet" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_leaflet__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFmbGV0X2QzX3BvaW50X21hcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbGVhZmxldF9kM19wb2ludF9tYXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhZmxldF9kM19wb2ludF9tYXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZmxldF9kM19wb2ludF9tYXAvLi9zcmMvdmlzLmpzIiwid2VicGFjazovL2xlYWZsZXRfZDNfcG9pbnRfbWFwL2V4dGVybmFsIFwiZDNcIiIsIndlYnBhY2s6Ly9sZWFmbGV0X2QzX3BvaW50X21hcC9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL2xlYWZsZXRfZDNfcG9pbnRfbWFwL2V4dGVybmFsIFwibGVhZmxldFwiIl0sIm5hbWVzIjpbIiQiLCJqUXVlcnkiLCJMZWFmbGV0RDNQb2ludE1hcCIsImNvbnN0cnVjdG9yIiwib3B0cyIsImRlZmF1bHRzIiwiZWwiLCJkYXRhIiwid2lkdGgiLCJPYmplY3QiLCJhc3NpZ24iLCJfZGF0YSIsInVwZGF0ZURhdGEiLCJoZWlnaHQiLCJtYW55Qm9keSIsImQzIiwic3RyZW5ndGgiLCJmb3JjZVN0cmVuZ3RoIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJkcmF3IiwidmFsdWUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzZWxlY3Rpb24iLCJvYmoiLCJlYWNoIiwic2VsSXRlbSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7Q0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBLE1BQU1BLENBQUMsR0FBR0MsNkNBQVY7Q0FLQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQyxpQkFBTixDQUF3QjtBQUN2QkMsYUFBVyxDQUFDQyxJQUFJLEdBQUcsRUFBUixFQUFZO0FBQ3RCLFVBQU1DLFFBQVEsR0FBRztBQUNoQkMsUUFBRSxFQUFFLElBRFk7QUFFaEJDLFVBQUksRUFBRSxJQUZVO0FBR2hCQyxXQUFLLEVBQUUsR0FIUyxDQUloQjtBQUNBOztBQUxnQixLQUFqQjtBQU9BQyxVQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CTCxRQUFwQixFQUE4QkQsSUFBOUIsRUFSc0IsQ0FRZ0I7O0FBQ3RDLFNBQUtPLEtBQUwsR0FBYSxLQUFLSixJQUFsQjtBQUNBLFNBQUtBLElBQUwsR0FBWSxLQUFLSyxVQUFqQjs7QUFDQSxRQUFJLE9BQU8sS0FBS0MsTUFBWixLQUF1QixXQUEzQixFQUF3QztBQUN2QyxXQUFLQSxNQUFMLEdBQWMsT0FBTyxLQUFLTCxLQUExQjtBQUNBOztBQUNELFNBQUtNLFFBQUwsR0FBZ0JDLGdEQUFBLEdBQ1ZDLFFBRFUsQ0FDRCxLQUFLQyxhQURKLENBQWhCO0FBRUEsU0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS1QsS0FBakI7O0FBQ0EsUUFBSSxLQUFLTCxFQUFMLEtBQVksSUFBWixJQUFvQixLQUFLSyxLQUFMLEtBQWUsSUFBdkMsRUFBNkM7QUFDNUMsV0FBS1UsSUFBTCxDQUFVLEtBQUtmLEVBQWY7QUFDQSxXQUFLWSxJQUFMLEdBQVksSUFBWjtBQUNBO0FBQ0Q7O0FBRUROLFlBQVUsQ0FBQ1UsS0FBRCxFQUFRO0FBQ2pCLFFBQUksQ0FBQ0MsU0FBUyxDQUFDQyxNQUFmLEVBQXVCLE9BQU8sS0FBS2IsS0FBWjtBQUN2QixTQUFLQSxLQUFMLEdBQWFXLEtBQWI7O0FBQ0EsUUFBSSxLQUFLSixJQUFMLEtBQWMsS0FBbEIsRUFBeUI7QUFDeEIsV0FBS0csSUFBTCxDQUFVLEtBQUtmLEVBQWY7QUFDQSxXQUFLWSxJQUFMLEdBQVksSUFBWjtBQUNBLEtBSEQsTUFHTztBQUNOO0FBQ0E7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksbUNBQVo7QUFDQSxLQVZnQixDQVdqQjtBQUNBOzs7QUFDQSxXQUFPLElBQVA7QUFDQTs7QUFFREMsTUFBSSxDQUFDSSxTQUFELEVBQVk7QUFDZixRQUFJQyxHQUFHLEdBQUcsSUFBVjtBQUNBLFFBQUlsQixLQUFLLEdBQUcsS0FBS0EsS0FBakI7QUFDQSxRQUFJSyxNQUFNLEdBQUcsS0FBS0EsTUFBbEIsQ0FIZSxDQUlmO0FBQ0E7O0FBQ0FZLGFBQVMsQ0FBQ0UsSUFBVixDQUFlLFlBQVc7QUFDekIsVUFBSUMsT0FBTyxHQUFHLElBQWQsQ0FEeUIsQ0FHekI7QUFDQTtBQUVBLEtBTkQ7QUFPRCxXQUFPLElBQVA7QUFDQyxHQXZEc0IsQ0F5RHZCO0FBQ0E7QUFDRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRztBQUNBO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQTdHdUI7O0FBZ0hUMUIsZ0ZBQWYsRTs7Ozs7Ozs7Ozs7QUM3SEEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEscUQiLCJmaWxlIjoibGVhZmxldF9kM19wb2ludF9tYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJkM1wiKSwgcmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcImxlYWZsZXRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJsZWFmbGV0X2QzX3BvaW50X21hcFwiLCBbXCJkM1wiLCBcImpRdWVyeVwiLCBcImxlYWZsZXRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibGVhZmxldF9kM19wb2ludF9tYXBcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJkM1wiKSwgcmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcImxlYWZsZXRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxlYWZsZXRfZDNfcG9pbnRfbWFwXCJdID0gZmFjdG9yeShyb290W1wiZDNcIl0sIHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJsZWFmbGV0XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbGVhZmxldF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgTGVhZmxldEQzUG9pbnRNYXAgZnJvbSAnLi92aXMuanMnO1xuLy8gZXhwb3J0IHsgTGVhZmxldEQzUG9pbnRNYXAgfTtcbmV4cG9ydCB7IExlYWZsZXREM1BvaW50TWFwIH07XG5cbiIsIi8vIExlYWZsZXREM1BvaW50TWFwXG5cbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcbmNvbnN0ICQgPSBqUXVlcnk7XG5pbXBvcnQgTCBmcm9tICdsZWFmbGV0JztcblxuXG5cbi8vIHJldXNhYmxlIGNoYXJ0IHBhdHRlcm4gaW5zcGlyZWQgYnk6XG4vLyBodHRwczovL2Jvc3Qub2Nrcy5vcmcvbWlrZS9jaGFydC9cbi8vIGFuZFxuLy8gaHR0cHM6Ly93d3cudG9wdGFsLmNvbS9kMy1qcy90b3dhcmRzLXJldXNhYmxlLWQzLWpzLWNoYXJ0c1xuY2xhc3MgTGVhZmxldEQzUG9pbnRNYXAge1xuXHRjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcblx0XHRjb25zdCBkZWZhdWx0cyA9IHtcblx0XHRcdGVsOiBudWxsLFxuXHRcdFx0ZGF0YTogbnVsbCxcblx0XHRcdHdpZHRoOiA5NjAsXG5cdFx0XHQvLyBjb2xvcjogZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZUNhdGVnb3J5MTApLFxuXHRcdFx0Ly8gZm9yY2VTdHJlbmd0aDogLTIsXG5cdFx0fTtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGRlZmF1bHRzLCBvcHRzKTsgIC8vIG9wdHMgd2lsbCBvdmVyd3JpdGUgZGVmYXVsdHNcblx0XHR0aGlzLl9kYXRhID0gdGhpcy5kYXRhO1xuXHRcdHRoaXMuZGF0YSA9IHRoaXMudXBkYXRlRGF0YTtcblx0XHRpZiAodHlwZW9mIHRoaXMuaGVpZ2h0ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0dGhpcy5oZWlnaHQgPSAuNjI1ICogdGhpcy53aWR0aDtcblx0XHR9XG5cdFx0dGhpcy5tYW55Qm9keSA9IGQzLmZvcmNlTWFueUJvZHkoKVxuXHRcdFx0XHRcdFx0XHQuc3RyZW5ndGgodGhpcy5mb3JjZVN0cmVuZ3RoKTtcblx0XHR0aGlzLmluaXQgPSBmYWxzZTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLl9kYXRhKTtcblx0XHRpZiAodGhpcy5lbCAhPT0gbnVsbCAmJiB0aGlzLl9kYXRhICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmRyYXcodGhpcy5lbCk7XG5cdFx0XHR0aGlzLmluaXQgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZURhdGEodmFsdWUpIHtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9kYXRhO1xuXHRcdHRoaXMuX2RhdGEgPSB2YWx1ZTtcblx0XHRpZiAodGhpcy5pbml0ID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5kcmF3KHRoaXMuZWwpO1xuXHRcdFx0dGhpcy5pbml0ID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gdGhpcy51cGRhdGVEYXRhKCk7XG5cdFx0XHQvLyBOT1QgSU1QTEVNRU5URURcblx0XHRcdGNvbnNvbGUubG9nKFwiVVBEQVRJTkcgREFUQSBOT1QgWUVUIElNUExFTUVOVEVEXCIpO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZyh0eXBlb2YgdXBkYXRlRGF0YSk7XG5cdFx0Ly8gaWYgKHR5cGVvZiB1cGRhdGVEYXRhID09PSAnZnVuY3Rpb24nKSB1cGRhdGVEYXRhKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0ZHJhdyhzZWxlY3Rpb24pIHtcblx0XHR2YXIgb2JqID0gdGhpcztcblx0XHR2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xuXHRcdHZhciBoZWlnaHQgPSB0aGlzLmhlaWdodDtcblx0XHQvLyB2YXIgZ3JhcGggPSB0aGlzLl9kYXRhO1xuXHRcdC8vIHZhciBjb2xvciA9IHRoaXMuY29sb3I7XG5cdFx0c2VsZWN0aW9uLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsSXRlbSA9IHRoaXM7XG5cblx0XHRcdC8vIHZhciBzdmcgPSBkMy5zZWxlY3Qoc2VsSXRlbSkuYXBwZW5kKFwic3ZnXCIpLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCkuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coZ3JhcGgpO1xuXG5cdFx0fSk7XG5cdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Ly8gdXBkYXRlRGF0YSgpIHtcblx0Ly8gXHQvLyB1c2UgRDMgdXBkYXRlIHBhdHRlcm4gd2l0aCBkYXRhXG4gICAgLy9cblx0Ly8gXHR2YXIgZ3JhcGggPSB0aGlzLl9kYXRhO1xuXHQvLyBcdGdyYXBoLm5vZGVzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuXHQvLyBcdFx0ZC5pZCA9IGQuaWQudG9TdHJpbmcoKTtcblx0Ly8gXHR9KVxuXHQvLyBcdGdyYXBoLmxpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuXHQvLyBcdFx0ZC5pZCA9IGdldExpbmtJZChkLCBncmFwaC5kaXJlY3RlZCk7XG5cdC8vIFx0fSk7XG5cdC8vIFx0dGhpcy5zaW11bGF0aW9uXG5cdC8vIFx0XHQubm9kZXMoZ3JhcGgubm9kZXMpXG5cdC8vIFx0XHQub24oXCJ0aWNrXCIsIHRpY2tlZCk7XG4gICAgLy9cblx0Ly8gXHRzaW11bGF0aW9uLmZvcmNlKFwibGlua1wiKVxuXHQvLyBcdFx0LmxpbmtzKGdyYXBoLmxpbmtzKTtcblx0Ly8gXHRjb25zb2xlLmxvZyhncmFwaCk7XG5cdC8vIFx0c2ltdWxhdGlvbi5zdG9wKCk7XG5cdC8vIFx0bm9kZSA9IG5vZGUuZGF0YShncmFwaC5ub2RlcywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5pZDsgfSk7XG5cdC8vIFx0dmFyIG5vZGVFeGl0ID0gbm9kZS5leGl0KCk7XG5cdC8vIFx0Ly8gbm9kZUV4aXQuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLmF0dHIoXCJmaWxsXCIsIFwicmVkXCIpO1xuXHQvLyBcdHZhciB0ID0gZDMudHJhbnNpdGlvbigndXBkYXRlRGF0YScpLmR1cmF0aW9uKDUwMDApO1xuXHQvLyBcdG5vZGVFeGl0LnNlbGVjdEFsbChcImNpcmNsZVwiKS5zdHlsZShcInN0cm9rZVwiLCBcInJlZFwiKS50cmFuc2l0aW9uKHQpLmF0dHIoXCJyXCIsIDApO1xuXHQvLyBcdG5vZGUgPSBlbnRlck5vZGVzKG5vZGUsIHQpO1xuXHQvLyBcdC8vIG5vZGUgPSBub2RlLmNhbGwoZW50ZXJOb2RlcywgdCk7XG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG5cdC8vIFx0bGluayA9IGxpbmtcblx0Ly8gXHRcdC5kYXRhKGdyYXBoLmxpbmtzLCBmdW5jdGlvbihkKSB7XG5cdC8vIFx0XHRcdC8vIGQuaWQgPSBnZXRMaW5rSWQoZCk7XG5cdC8vIFx0XHRcdHJldHVybiBkLmlkO1xuXHQvLyBcdFx0fSk7XG5cdC8vIFx0dmFyIGxpbmtFeGl0ID0gbGluay5leGl0KCk7XG5cdC8vIFx0bGlua0V4aXQuc3R5bGUoXCJzdHJva2VcIiwgXCJyZWRcIikudHJhbnNpdGlvbih0KS5zdHlsZShcIm9wYWNpdHlcIiwgMCkucmVtb3ZlKCk7XG5cdC8vIFx0Ly8gbGlua0V4aXQucmVtb3ZlKCk7XG5cdC8vIFx0bGluayA9IGVudGVyTGlua3MobGluaywgdCk7XG5cdC8vIFx0c2ltdWxhdGlvbi5vbihcInRpY2tcIikuY2FsbCgpO1xuICAgIC8vXG4gICAgLy9cblx0Ly8gXHR0LmVuZCgpLnRoZW4oZnVuY3Rpb24oZCkge1xuXHQvLyBcdFx0bm9kZUV4aXQucmVtb3ZlKCk7XG5cdC8vIFx0XHQvLyBzaW11bGF0aW9uLmFscGhhKDEpLnJlc3RhcnQoKTtcblx0Ly8gXHRcdC8vIHNpbXVsYXRpb25cblx0Ly8gXHRcdFx0Ly8gLmFscGhhRGVjYXkoLjAwMDUpXG5cdC8vIFx0XHRcdC8vIC52ZWxvY2l0eURlY2F5KDAuOSlcblx0Ly8gXHRcdFx0Ly8gLmFscGhhKC4xKVxuXHQvLyBcdFx0XHQvLyAucmVzdGFydCgpO1xuXHQvLyBcdH0pO1xuXHQvLyBcdFxuXHQvLyBcdC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdC8vIFx0Ly8gfSwgNDAwMCk7XG5cdC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVhZmxldEQzUG9pbnRNYXA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2xlYWZsZXRfXzsiXSwic291cmNlUm9vdCI6IiJ9