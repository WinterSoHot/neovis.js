(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@babel/runtime-corejs3/core-js-stable/array/is-array"), require("@babel/runtime-corejs3/core-js-stable/instance/concat"), require("@babel/runtime-corejs3/core-js-stable/instance/filter"), require("@babel/runtime-corejs3/core-js-stable/instance/for-each"), require("@babel/runtime-corejs3/core-js-stable/instance/map"), require("@babel/runtime-corejs3/core-js-stable/object/define-properties"), require("@babel/runtime-corejs3/core-js-stable/object/define-property"), require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"), require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"), require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"), require("@babel/runtime-corejs3/core-js-stable/object/keys"), require("@babel/runtime-corejs3/core-js-stable/object/values"), require("@babel/runtime-corejs3/core-js-stable/promise"), require("@babel/runtime-corejs3/core-js-stable/set-timeout"), require("@babel/runtime-corejs3/core-js-stable/symbol"), require("@babel/runtime-corejs3/core-js/get-iterator"), require("@babel/runtime-corejs3/helpers/asyncToGenerator"), require("@babel/runtime-corejs3/helpers/classCallCheck"), require("@babel/runtime-corejs3/helpers/createClass"), require("@babel/runtime-corejs3/helpers/defineProperty"), require("@babel/runtime-corejs3/helpers/typeof"), require("@babel/runtime-corejs3/regenerator"), require("neo4j-driver"), require("vis-network/dist/vis-network.min"), require("vis-network/dist/vis-network.min.css"));
	else if(typeof define === 'function' && define.amd)
		define(["@babel/runtime-corejs3/core-js-stable/array/is-array", "@babel/runtime-corejs3/core-js-stable/instance/concat", "@babel/runtime-corejs3/core-js-stable/instance/filter", "@babel/runtime-corejs3/core-js-stable/instance/for-each", "@babel/runtime-corejs3/core-js-stable/instance/map", "@babel/runtime-corejs3/core-js-stable/object/define-properties", "@babel/runtime-corejs3/core-js-stable/object/define-property", "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor", "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors", "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols", "@babel/runtime-corejs3/core-js-stable/object/keys", "@babel/runtime-corejs3/core-js-stable/object/values", "@babel/runtime-corejs3/core-js-stable/promise", "@babel/runtime-corejs3/core-js-stable/set-timeout", "@babel/runtime-corejs3/core-js-stable/symbol", "@babel/runtime-corejs3/core-js/get-iterator", "@babel/runtime-corejs3/helpers/asyncToGenerator", "@babel/runtime-corejs3/helpers/classCallCheck", "@babel/runtime-corejs3/helpers/createClass", "@babel/runtime-corejs3/helpers/defineProperty", "@babel/runtime-corejs3/helpers/typeof", "@babel/runtime-corejs3/regenerator", "neo4j-driver", "vis-network/dist/vis-network.min", "vis-network/dist/vis-network.min.css"], factory);
	else if(typeof exports === 'object')
		exports["NeoVis"] = factory(require("@babel/runtime-corejs3/core-js-stable/array/is-array"), require("@babel/runtime-corejs3/core-js-stable/instance/concat"), require("@babel/runtime-corejs3/core-js-stable/instance/filter"), require("@babel/runtime-corejs3/core-js-stable/instance/for-each"), require("@babel/runtime-corejs3/core-js-stable/instance/map"), require("@babel/runtime-corejs3/core-js-stable/object/define-properties"), require("@babel/runtime-corejs3/core-js-stable/object/define-property"), require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"), require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"), require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"), require("@babel/runtime-corejs3/core-js-stable/object/keys"), require("@babel/runtime-corejs3/core-js-stable/object/values"), require("@babel/runtime-corejs3/core-js-stable/promise"), require("@babel/runtime-corejs3/core-js-stable/set-timeout"), require("@babel/runtime-corejs3/core-js-stable/symbol"), require("@babel/runtime-corejs3/core-js/get-iterator"), require("@babel/runtime-corejs3/helpers/asyncToGenerator"), require("@babel/runtime-corejs3/helpers/classCallCheck"), require("@babel/runtime-corejs3/helpers/createClass"), require("@babel/runtime-corejs3/helpers/defineProperty"), require("@babel/runtime-corejs3/helpers/typeof"), require("@babel/runtime-corejs3/regenerator"), require("neo4j-driver"), require("vis-network/dist/vis-network.min"), require("vis-network/dist/vis-network.min.css"));
	else
		root["NeoVis"] = factory(root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined], root[undefined]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_array_is_array__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_instance_concat__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_instance_filter__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_instance_for_each__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_instance_map__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_define_properties__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_define_property__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_keys__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_values__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_promise__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_set_timeout__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_symbol__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_get_iterator__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_helpers_asyncToGenerator__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_helpers_classCallCheck__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_helpers_createClass__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_helpers_defineProperty__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_helpers_typeof__, __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_regenerator__, __WEBPACK_EXTERNAL_MODULE_neo4j_driver__, __WEBPACK_EXTERNAL_MODULE_vis_network_dist_vis_network_min__, __WEBPACK_EXTERNAL_MODULE_vis_network_dist_vis_network_min_css__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/neovis.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/defaults.js":
/*!*************************!*\
  !*** ./src/defaults.js ***!
  \*************************/
/*! exports provided: defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
var defaults = {
  neo4j: {
    initialQuery: "MATCH (n) WHERE exists(n.pagerank)\n                        WITH (n), RAND() AS random\n                        ORDER BY random LIMIT 3000\n                        OPTIONAL MATCH (n)-[r]-(m)\n                        //WITH n,r,m WHERE exists(n.pagerank) AND exists(m.pagerank) AND exists(m.community)\n                        RETURN n, r, m;",
    neo4jUri: 'bolt://localhost:7687',
    neo4jUser: 'neo4j',
    neo4jPassword: 'neo4j',
    encrypted: 'ENCRYPTION_OFF',
    trust: 'TRUST_ALL_CERTIFICATES'
  },
  visjs: {
    interaction: {
      hover: true,
      hoverConnectedEdges: true,
      selectConnectedEdges: false,
      //        multiselect: true,
      multiselect: 'alwaysOn',
      zoomView: false,
      experimental: {}
    },
    physics: {
      barnesHut: {
        damping: 0.1
      }
    },
    nodes: {
      mass: 4,
      shape: 'neo',
      labelHighlightBold: false,
      widthConstraint: {
        maximum: 40
      },
      heightConstraint: {
        maximum: 40
      }
    },
    edges: {
      hoverWidth: 0,
      selectionWidth: 0,
      smooth: {
        type: 'continuous',
        roundness: 0.15
      },
      font: {
        size: 9,
        strokeWidth: 0,
        align: 'top'
      },
      color: {
        inherit: false
      },
      arrows: {
        to: {
          enabled: true,
          type: 'arrow',
          scaleFactor: 0.5
        }
      }
    }
  }
};


/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! exports provided: CompletionEvent, ClickNodeEvent, ClickEdgeEvent, ErrorEvent, EventController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionEvent", function() { return CompletionEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickNodeEvent", function() { return ClickNodeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickEdgeEvent", function() { return ClickEdgeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorEvent", function() { return ErrorEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventController", function() { return EventController; });
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator */ "@babel/runtime-corejs3/core-js/get-iterator");
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "@babel/runtime-corejs3/helpers/defineProperty");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "@babel/runtime-corejs3/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "@babel/runtime-corejs3/helpers/createClass");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);




var CompletionEvent = 'completed';
var ClickNodeEvent = 'clickNode';
var ClickEdgeEvent = 'clickEdge';
var ErrorEvent = 'error';
var EventController =
/*#__PURE__*/
function () {
  function EventController() {
    var _this$_handlers;

    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, EventController);

    this._handlers = (_this$_handlers = {}, _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_this$_handlers, CompletionEvent, []), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_this$_handlers, ErrorEvent, []), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_this$_handlers, ClickNodeEvent, []), _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_this$_handlers, ClickEdgeEvent, []), _this$_handlers);
  }
  /**
   *
   * @param {string} eventType - Type of the event to be handled
   * @param {callback} handler - Handler to manage the event
   */


  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(EventController, [{
    key: "register",
    value: function register(eventType, handler) {
      if (this._handlers[eventType] === undefined) {
        throw new Error('Unknown event: ' + eventType);
      }

      this._handlers[eventType].push(handler);
    }
    /**
     *
     * @param {string} eventType - Type of the event generated
     * @param {object} values - Values associated to the event
     */

  }, {
    key: "generateEvent",
    value: function generateEvent(eventType, values) {
      if (this._handlers[eventType] === undefined) {
        throw new Error('Unknown event: ' + eventType);
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(this._handlers[eventType]), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var handler = _step.value;
          handler(values);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return EventController;
}();

/***/ }),

/***/ "./src/neovis.js":
/*!***********************!*\
  !*** ./src/neovis.js ***!
  \***********************/
/*! exports provided: NEOVIS_DEFAULT_CONFIG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEOVIS_DEFAULT_CONFIG", function() { return NEOVIS_DEFAULT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NeoVis; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "@babel/runtime-corejs3/core-js-stable/object/define-property");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ "@babel/runtime-corejs3/core-js-stable/object/define-properties");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "@babel/runtime-corejs3/core-js-stable/instance/filter");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set-timeout */ "@babel/runtime-corejs3/core-js-stable/set-timeout");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ "@babel/runtime-corejs3/core-js-stable/promise");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/values */ "@babel/runtime-corejs3/core-js-stable/object/values");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "@babel/runtime-corejs3/core-js-stable/instance/map");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "@babel/runtime-corejs3/core-js-stable/instance/concat");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/array/is-array */ "@babel/runtime-corejs3/core-js-stable/array/is-array");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "@babel/runtime-corejs3/regenerator");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_corejs3_helpers_typeof__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/typeof */ "@babel/runtime-corejs3/helpers/typeof");
/* harmony import */ var _babel_runtime_corejs3_helpers_typeof__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_typeof__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "@babel/runtime-corejs3/core-js-stable/instance/for-each");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator */ "@babel/runtime-corejs3/core-js/get-iterator");
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "@babel/runtime-corejs3/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "@babel/runtime-corejs3/core-js-stable/object/keys");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "@babel/runtime-corejs3/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "@babel/runtime-corejs3/helpers/createClass");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "@babel/runtime-corejs3/helpers/defineProperty");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/symbol */ "@babel/runtime-corejs3/core-js-stable/symbol");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var neo4j_driver__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! neo4j-driver */ "neo4j-driver");
/* harmony import */ var neo4j_driver__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(neo4j_driver__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var vis_network_dist_vis_network_min__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! vis-network/dist/vis-network.min */ "vis-network/dist/vis-network.min");
/* harmony import */ var vis_network_dist_vis_network_min__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(vis_network_dist_vis_network_min__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var vis_network_dist_vis_network_min_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! vis-network/dist/vis-network.min.css */ "vis-network/dist/vis-network.min.css");
/* harmony import */ var vis_network_dist_vis_network_min_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(vis_network_dist_vis_network_min_css__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./defaults */ "./src/defaults.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./events */ "./src/events.js");

























function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_17___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context9; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_14___default()(_context9 = ownKeys(Object(source), true)).call(_context9, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_20___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { var _context10; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_14___default()(_context10 = ownKeys(Object(source))).call(_context10, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






var NEOVIS_DEFAULT_CONFIG = _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_21___default()();

var NeoVis =
/*#__PURE__*/
function () {
  /**
   *
   * @constructor
   * @param {object} config - configures the visualization and Neo4j server connection
   *  {
   *    container:
   *    server_url:
   *    server_password?:
   *    server_username?:
   *    labels:
   *
   *  }
   *
   */
  function NeoVis(config) {
    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_18___default()(this, NeoVis);

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_20___default()(this, "_nodes", {});

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_20___default()(this, "_edges", {});

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_20___default()(this, "_data", {});

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_20___default()(this, "_network", null);

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_20___default()(this, "_events", new _events__WEBPACK_IMPORTED_MODULE_26__["EventController"]());

    this._init(config);

    this._consoleLog(config);

    this._consoleLog(_defaults__WEBPACK_IMPORTED_MODULE_25__["defaults"]);
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_19___default()(NeoVis, [{
    key: "_consoleLog",
    value: function _consoleLog(message) {
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'log';

      if (level !== 'log' || this._config.console_debug) {
        // eslint-disable-next-line no-console
        console[level](message);
      }
    }
  }, {
    key: "_init",
    value: function _init(config) {
      if (config.labels && config.labels[NEOVIS_DEFAULT_CONFIG]) {
        for (var _i = 0, _Object$keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_17___default()(config.labels); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];
          // getting out of my for not changing the original config object
          config = _objectSpread({}, config, {
            labels: _objectSpread({}, config.labels, _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_20___default()({}, key, _objectSpread({}, config.labels[NEOVIS_DEFAULT_CONFIG], {}, config.labels[key])))
          });
        }
      }

      if (config.relationships && config.relationships[NEOVIS_DEFAULT_CONFIG]) {
        // getting out of my for not changing the original config object
        for (var _i2 = 0, _Object$keys3 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_17___default()(config.relationships); _i2 < _Object$keys3.length; _i2++) {
          var _key = _Object$keys3[_i2];
          config = _objectSpread({}, config, {
            relationships: _objectSpread({}, config.relationships, _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_20___default()({}, _key, _objectSpread({}, config.relationships[NEOVIS_DEFAULT_CONFIG], {}, config.relationships[_key])))
          });
        }
      }

      this._config = config;
      this._encrypted = config.encrypted || _defaults__WEBPACK_IMPORTED_MODULE_25__["defaults"].neo4j.encrypted;
      this._trust = config.trust || _defaults__WEBPACK_IMPORTED_MODULE_25__["defaults"].neo4j.trust;
      this._driver = neo4j_driver__WEBPACK_IMPORTED_MODULE_22___default.a.driver(config.server_url || _defaults__WEBPACK_IMPORTED_MODULE_25__["defaults"].neo4j.neo4jUri, neo4j_driver__WEBPACK_IMPORTED_MODULE_22___default.a.auth.basic(config.server_user || _defaults__WEBPACK_IMPORTED_MODULE_25__["defaults"].neo4j.neo4jUser, config.server_password || _defaults__WEBPACK_IMPORTED_MODULE_25__["defaults"].neo4j.neo4jPassword), {
        encrypted: this._encrypted,
        trust: this._trust
      });
      this._query = config.initial_cypher || _defaults__WEBPACK_IMPORTED_MODULE_25__["defaults"].neo4j.initialQuery;
      this._container = document.getElementById(config.container_id);
    }
  }, {
    key: "_addNode",
    value: function _addNode(node) {
      this._nodes[node.id] = node;
    }
  }, {
    key: "_addEdge",
    value: function _addEdge(edge) {
      this._edges[edge.id] = edge;
    }
    /**
     * Build node object for vis from a neo4j Node
     * FIXME: use config
     * FIXME: move to private api
     * @param neo4jNode
     * @param session
     * @returns {{}}
     */

  }, {
    key: "buildNodeVisObject",
    value: function () {
      var _buildNodeVisObject = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_16___default()(
      /*#__PURE__*/
      _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.mark(function _callee(neo4jNode) {
        var session,
            node,
            label,
            labelConfig,
            captionKey,
            sizeKey,
            sizeCypher,
            communityKey,
            title_properties,
            result,
            _iteratorNormalCompletion,
            _didIteratorError,
            _iteratorError,
            _iterator,
            _step,
            record,
            sizeProp,
            _iteratorNormalCompletion2,
            _didIteratorError2,
            _iteratorError2,
            _iterator2,
            _step2,
            key,
            _args = arguments;

        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                session = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
                node = {};
                label = neo4jNode.labels[0];
                labelConfig = this._config && this._config.labels && (this._config.labels[label] || this._config.labels[NEOVIS_DEFAULT_CONFIG]);
                captionKey = labelConfig && labelConfig['caption'];
                sizeKey = labelConfig && labelConfig['size'];
                sizeCypher = labelConfig && labelConfig['sizeCypher'];
                communityKey = labelConfig && labelConfig['community'];
                title_properties = labelConfig && labelConfig.title_properties || _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_17___default()(neo4jNode.properties);
                node.id = neo4jNode.identity.toInt(); // node size

                if (!sizeCypher) {
                  _context.next = 36;
                  break;
                }

                // use a cypher statement to determine the size of the node
                // the cypher statement will be passed a parameter {id} with the value
                // of the internal node id
                session = session || this._driver.session();
                _context.next = 14;
                return session.run(sizeCypher, {
                  id: neo4j_driver__WEBPACK_IMPORTED_MODULE_22___default.a["int"](node.id)
                });

              case 14:
                result = _context.sent;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 18;

                for (_iterator = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_15___default()(result.records); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  record = _step.value;

                  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_14___default()(record).call(record, function (v) {
                    if (typeof v === 'number') {
                      node.value = v;
                    } else if (neo4j_driver__WEBPACK_IMPORTED_MODULE_22___default.a.isInt(v)) {
                      node.value = v.toNumber();
                    }
                  });
                }

                _context.next = 26;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](18);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 26:
                _context.prev = 26;
                _context.prev = 27;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 29:
                _context.prev = 29;

                if (!_didIteratorError) {
                  _context.next = 32;
                  break;
                }

                throw _iteratorError;

              case 32:
                return _context.finish(29);

              case 33:
                return _context.finish(26);

              case 34:
                _context.next = 37;
                break;

              case 36:
                if (typeof sizeKey === 'number') {
                  node.value = sizeKey;
                } else {
                  sizeProp = neo4jNode.properties[sizeKey];

                  if (sizeProp && typeof sizeProp === 'number') {
                    // property value is a number, OK to use
                    node.value = sizeProp;
                  } else if (sizeProp && _babel_runtime_corejs3_helpers_typeof__WEBPACK_IMPORTED_MODULE_13___default()(sizeProp) === 'object' && neo4j_driver__WEBPACK_IMPORTED_MODULE_22___default.a.isInt(sizeProp)) {
                    // property value might be a Neo4j Integer, check if we can call toNumber on it:
                    if (sizeProp.inSafeRange()) {
                      node.value = sizeProp.toNumber();
                    } else {
                      // couldn't convert to Number, use default
                      node.value = 1.0;
                    }
                  } else {
                    node.value = 1.0;
                  }
                }

              case 37:
                // node caption
                if (typeof captionKey === 'function') {
                  node.label = captionKey(neo4jNode);
                } else {
                  node.label = neo4jNode.properties[captionKey] || label || '';

                  if (label == "grid_ods_equ_m_t_sb_znyc_dz") {
                    node['label'] = neo4jNode.properties['bdzmc'];
                  }

                  if (label == "grid_ods_equ_m_t_sb_znyc_zbyq") {
                    node['label'] = neo4jNode.properties['sbmc'];
                  }

                  if (label == "grid_ods_equ_m_t_dw_bzzx_sccj_hbsj_temp") {
                    node['label'] = neo4jNode.properties['sccjmc'];
                  }

                  if (label == "grid_ods_equ_t_t_zh_ztjx_syjl") {
                    node['label'] = "试验记录";
                  }

                  if (label == "grid_ods_equ_t_t_yj_dwyj_xs_znxsjl") {
                    node['label'] = "巡视记录";
                  }

                  if (label == "grid_ods_equ_t_t_yj_dwyj_yhjl") {
                    node['label'] = "隐患记录";
                  }

                  if (label == "grid_ods_equ_t_t_yj_dwyj_xsjl") {
                    node['label'] = "修试记录";
                  }

                  if (label == "grid_ods_equ_t_t_yj_dwyj_qxjl") {
                    node['label'] = "缺陷记录";
                  }
                } // community
                // behavior: color by value of community property (if set in config), then color by label


                if (!communityKey) {
                  node.group = label;
                } else {
                  try {
                    if (neo4jNode.properties[communityKey]) {
                      node.group = neo4jNode.properties[communityKey].toNumber() || label || 0; // FIXME: cast to Integer
                    } else {
                      node.group = 0;
                    }
                  } catch (e) {
                    node.group = 0;
                  }
                } // set configured/all properties as tooltip


                node.title = '';
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context.prev = 43;

                for (_iterator2 = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_15___default()(title_properties); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  key = _step2.value;

                  if (neo4jNode.properties.hasOwnProperty(key)) {
                    node.title += this.propertyToString(key, neo4jNode.properties[key]);
                  }
                }

                _context.next = 51;
                break;

              case 47:
                _context.prev = 47;
                _context.t1 = _context["catch"](43);
                _didIteratorError2 = true;
                _iteratorError2 = _context.t1;

              case 51:
                _context.prev = 51;
                _context.prev = 52;

                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }

              case 54:
                _context.prev = 54;

                if (!_didIteratorError2) {
                  _context.next = 57;
                  break;
                }

                throw _iteratorError2;

              case 57:
                return _context.finish(54);

              case 58:
                return _context.finish(51);

              case 59:
                return _context.abrupt("return", node);

              case 60:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[18, 22, 26, 34], [27,, 29, 33], [43, 47, 51, 59], [52,, 54, 58]]);
      }));

      function buildNodeVisObject(_x) {
        return _buildNodeVisObject.apply(this, arguments);
      }

      return buildNodeVisObject;
    }()
    /**
     * Build edge object for vis from a neo4j Relationship
     * @param r
     * @returns {{}}
     */

  }, {
    key: "buildEdgeVisObject",
    value: function buildEdgeVisObject(r) {
      var nodeTypeConfig = this._config && this._config.relationships && (this._config.relationships[r.type] || this._config.relationships[NEOVIS_DEFAULT_CONFIG]);
      var weightKey = nodeTypeConfig && nodeTypeConfig.thickness,
          captionKey = nodeTypeConfig && nodeTypeConfig.caption;
      var edge = {};
      edge.id = r.identity.toInt();
      edge.from = r.start.toInt();
      edge.to = r.end.toInt(); // hover tooltip. show all properties in the format <strong>key:</strong> value

      edge.title = '';

      for (var key in r.properties) {
        if (r.properties.hasOwnProperty(key)) {
          edge['title'] += this.propertyToString(key, r.properties[key]);
        }
      } // set relationship thickness


      if (weightKey && typeof weightKey === 'string') {
        edge.value = r.properties[weightKey];
      } else if (weightKey && typeof weightKey === 'number') {
        edge.value = weightKey;
      } else {
        edge.value = 1.0;
      } // set caption


      if (typeof captionKey === 'boolean') {
        if (!captionKey) {
          edge.label = '';
        } else {
          edge.label = r.type;
        }
      } else if (captionKey && typeof captionKey === 'string') {
        edge.label = r.properties[captionKey] || '';
      } else {
        edge.label = r.type;
      }

      return edge;
    }
  }, {
    key: "propertyToString",
    value: function propertyToString(key, value) {
      var _context2;

      var key2value = {
        zz: "站址",
        bdzmc: "变电站",
        ywdwmc: "运维单位",
        yxztmc: "设备状态",
        ssdsmc: "所属地市",
        dydjmc: '电压等级',
        whbzmc: '维护班组',
        sbmc: '设备名称',
        mc: '试验名称',
        sydw: '试验单位',
        sydd: '试验地点',
        qxzt: '缺陷状态',
        qxzsbmc: '缺陷主设备名称',
        djbzmc: '登记班组名称',
        wcqk: '完成情况',
        xsnr: '巡视内容',
        yhms: '隐患描述',
        yhzt: '隐患状态'
      };

      if (key2value[key] == undefined || value == "\\N" || value == "none") {
        return "";
      }

      if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_11___default()(value) && value.length > 1) {
        // let out = `<strong>${key}:</strong><br /><ul>`;
        var out = "<strong>".concat(key2value[key], ":</strong><br /><ul>");
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_15___default()(value), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var val = _step3.value;
            out += "<li>".concat(val, "</li>");
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        return out + '</ul>';
      } // return  `<strong>${key}:</strong> ${value}<br>`;


      return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10___default()(_context2 = "<strong>".concat(key2value[key], ":</strong> ")).call(_context2, value, "<br>");
    } // public API

  }, {
    key: "render",
    value: function render() {
      var _this = this;

      // connect to Neo4j instance
      // run query
      var recordCount = 0;

      var session = this._driver.session();

      var dataBuildPromises = [];
      session.run(this._query, {
        limit: 30
      }).subscribe({
        onNext: function onNext(record) {
          var _context3;

          recordCount++;

          _this._consoleLog('CLASS NAME');

          _this._consoleLog(record && record.constructor.name);

          _this._consoleLog(record);

          var dataPromises = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default()(_context3 = _babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_8___default()(record.toObject())).call(_context3,
          /*#__PURE__*/
          function () {
            var _ref = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_16___default()(
            /*#__PURE__*/
            _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.mark(function _callee2(v) {
              var node, _edge, startNode, endNode, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, obj, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, _obj, _node, _edge2;

              return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.wrap(function _callee2$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _this._consoleLog('Constructor:');

                      _this._consoleLog(v && v.constructor.name);

                      if (!(v instanceof neo4j_driver__WEBPACK_IMPORTED_MODULE_22___default.a.types.Node)) {
                        _context4.next = 9;
                        break;
                      }

                      _context4.next = 5;
                      return _this.buildNodeVisObject(v, session);

                    case 5:
                      node = _context4.sent;

                      try {
                        _this._addNode(node);
                      } catch (e) {
                        _this._consoleLog(e, 'error');
                      }

                      _context4.next = 97;
                      break;

                    case 9:
                      if (!(v instanceof neo4j_driver__WEBPACK_IMPORTED_MODULE_22___default.a.types.Relationship)) {
                        _context4.next = 14;
                        break;
                      }

                      _edge = _this.buildEdgeVisObject(v);

                      _this._addEdge(_edge);

                      _context4.next = 97;
                      break;

                    case 14:
                      if (!(v instanceof neo4j_driver__WEBPACK_IMPORTED_MODULE_22___default.a.types.Path)) {
                        _context4.next = 62;
                        break;
                      }

                      _this._consoleLog('PATH');

                      _this._consoleLog(v);

                      _context4.next = 19;
                      return _this.buildNodeVisObject(v.start, session);

                    case 19:
                      startNode = _context4.sent;
                      _context4.next = 22;
                      return _this.buildNodeVisObject(v.end, session);

                    case 22:
                      endNode = _context4.sent;

                      _this._addNode(startNode);

                      _this._addNode(endNode);

                      _iteratorNormalCompletion4 = true;
                      _didIteratorError4 = false;
                      _iteratorError4 = undefined;
                      _context4.prev = 28;
                      _iterator4 = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_15___default()(v.segments);

                    case 30:
                      if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                        _context4.next = 46;
                        break;
                      }

                      obj = _step4.value;
                      _context4.t0 = _this;
                      _context4.next = 35;
                      return _this.buildNodeVisObject(obj.start, session);

                    case 35:
                      _context4.t1 = _context4.sent;

                      _context4.t0._addNode.call(_context4.t0, _context4.t1);

                      _context4.t2 = _this;
                      _context4.next = 40;
                      return _this.buildNodeVisObject(obj.end, session);

                    case 40:
                      _context4.t3 = _context4.sent;

                      _context4.t2._addNode.call(_context4.t2, _context4.t3);

                      _this._addEdge(_this.buildEdgeVisObject(obj.relationship));

                    case 43:
                      _iteratorNormalCompletion4 = true;
                      _context4.next = 30;
                      break;

                    case 46:
                      _context4.next = 52;
                      break;

                    case 48:
                      _context4.prev = 48;
                      _context4.t4 = _context4["catch"](28);
                      _didIteratorError4 = true;
                      _iteratorError4 = _context4.t4;

                    case 52:
                      _context4.prev = 52;
                      _context4.prev = 53;

                      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                        _iterator4["return"]();
                      }

                    case 55:
                      _context4.prev = 55;

                      if (!_didIteratorError4) {
                        _context4.next = 58;
                        break;
                      }

                      throw _iteratorError4;

                    case 58:
                      return _context4.finish(55);

                    case 59:
                      return _context4.finish(52);

                    case 60:
                      _context4.next = 97;
                      break;

                    case 62:
                      if (!(v instanceof Array)) {
                        _context4.next = 97;
                        break;
                      }

                      _iteratorNormalCompletion5 = true;
                      _didIteratorError5 = false;
                      _iteratorError5 = undefined;
                      _context4.prev = 66;
                      _iterator5 = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_15___default()(v);

                    case 68:
                      if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                        _context4.next = 83;
                        break;
                      }

                      _obj = _step5.value;

                      _this._consoleLog('Array element constructor:');

                      _this._consoleLog(_obj && _obj.constructor.name);

                      if (!(_obj instanceof neo4j_driver__WEBPACK_IMPORTED_MODULE_22___default.a.types.Node)) {
                        _context4.next = 79;
                        break;
                      }

                      _context4.next = 75;
                      return _this.buildNodeVisObject(_obj, session);

                    case 75:
                      _node = _context4.sent;

                      _this._addNode(_node);

                      _context4.next = 80;
                      break;

                    case 79:
                      if (_obj instanceof neo4j_driver__WEBPACK_IMPORTED_MODULE_22___default.a.types.Relationship) {
                        _edge2 = _this.buildEdgeVisObject(_obj);

                        _this._addEdge(_edge2);
                      }

                    case 80:
                      _iteratorNormalCompletion5 = true;
                      _context4.next = 68;
                      break;

                    case 83:
                      _context4.next = 89;
                      break;

                    case 85:
                      _context4.prev = 85;
                      _context4.t5 = _context4["catch"](66);
                      _didIteratorError5 = true;
                      _iteratorError5 = _context4.t5;

                    case 89:
                      _context4.prev = 89;
                      _context4.prev = 90;

                      if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                        _iterator5["return"]();
                      }

                    case 92:
                      _context4.prev = 92;

                      if (!_didIteratorError5) {
                        _context4.next = 95;
                        break;
                      }

                      throw _iteratorError5;

                    case 95:
                      return _context4.finish(92);

                    case 96:
                      return _context4.finish(89);

                    case 97:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee2, null, [[28, 48, 52, 60], [53,, 55, 59], [66, 85, 89, 97], [90,, 92, 96]]);
            }));

            return function (_x2) {
              return _ref.apply(this, arguments);
            };
          }());

          dataBuildPromises.push(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_7___default.a.all(dataPromises));
        },
        onCompleted: function () {
          var _onCompleted = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_16___default()(
          /*#__PURE__*/
          _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.mark(function _callee3() {
            var options, container, neoVis;
            return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.wrap(function _callee3$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_7___default.a.all(dataBuildPromises);

                  case 2:
                    session.close();
                    options = {
                      nodes: {
                        shape: 'dot',
                        font: {
                          size: 26,
                          strokeWidth: 7
                        },
                        scaling: {}
                      },
                      edges: {
                        arrows: {
                          to: {
                            enabled: _this._config.arrows || false
                          } // FIXME: handle default value

                        },
                        length: 200
                      },
                      layout: {
                        improvedLayout: false,
                        hierarchical: {
                          enabled: _this._config.hierarchical || false,
                          sortMethod: _this._config.hierarchical_sort_method || 'hubsize'
                        }
                      },
                      physics: {
                        // TODO: adaptive physics settings based on size of graph rendered
                        // enabled: true,
                        // timestep: 0.5,
                        // stabilization: {
                        //     iterations: 10
                        // }
                        adaptiveTimestep: true,
                        // barnesHut: {
                        //     gravitationalConstant: -8000,
                        //     springConstant: 0.04,
                        //     springLength: 95
                        // },
                        stabilization: {
                          iterations: 200,
                          fit: true
                        }
                      }
                    };
                    container = _this._container;
                    _this._data = {
                      nodes: new vis_network_dist_vis_network_min__WEBPACK_IMPORTED_MODULE_23__["DataSet"](_babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_8___default()(_this._nodes)),
                      edges: new vis_network_dist_vis_network_min__WEBPACK_IMPORTED_MODULE_23__["DataSet"](_babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_8___default()(_this._edges))
                    };

                    _this._consoleLog(_this._data.nodes);

                    _this._consoleLog(_this._data.edges); // Create duplicate node for any this reference relationships
                    // NOTE: Is this only useful for data model type data
                    // this._data.edges = this._data.edges.map(
                    //     function (item) {
                    //          if (item.from == item.to) {
                    //             const newNode = this._data.nodes.get(item.from)
                    //             delete newNode.id;
                    //             const newNodeIds = this._data.nodes.add(newNode);
                    //             this._consoleLog("Adding new node and changing this-ref to node: " + item.to);
                    //             item.to = newNodeIds[0];
                    //          }
                    //          return item;
                    //     }
                    // );


                    _this._network = new vis_network_dist_vis_network_min__WEBPACK_IMPORTED_MODULE_23__["Network"](container, _this._data, options);

                    _this._consoleLog('completed');

                    _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_6___default()(function () {
                      _this._network.stopSimulation();
                    }, 10000);

                    _this._events.generateEvent(_events__WEBPACK_IMPORTED_MODULE_26__["CompletionEvent"], {
                      record_count: recordCount
                    });

                    neoVis = _this;

                    _this._network.on('click', function (params) {
                      if (params.nodes.length > 0) {
                        var nodeId = this.getNodeAt(params.pointer.DOM);

                        neoVis._events.generateEvent(_events__WEBPACK_IMPORTED_MODULE_26__["ClickNodeEvent"], {
                          nodeId: nodeId,
                          node: neoVis._nodes[nodeId]
                        });
                      } else if (params.edges.length > 0) {
                        var edgeId = this.getEdgeAt(params.pointer.DOM);

                        neoVis._events.generateEvent(_events__WEBPACK_IMPORTED_MODULE_26__["ClickEdgeEvent"], {
                          edgeId: edgeId,
                          edge: neoVis._edges[edgeId]
                        });
                      }
                    });

                  case 14:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee3);
          }));

          function onCompleted() {
            return _onCompleted.apply(this, arguments);
          }

          return onCompleted;
        }(),
        onError: function onError(error) {
          _this._consoleLog(error, 'error');

          _this._events.generateEvent(_events__WEBPACK_IMPORTED_MODULE_26__["ErrorEvent"], {
            error_msg: error
          });
        }
      });
    }
    /**
     * 增加节点数据
     */

  }, {
    key: "addDataByCypher",
    value: function addDataByCypher(cypher) {
      var _this2 = this;

      var recordCount = 0;

      var session = this._driver.session();

      var dataBuildPromises = [];
      var new_nodes = {};
      var new_edges = {};
      session.run(cypher).subscribe({
        onNext: function onNext(record) {
          var _context6;

          recordCount++;

          _this2._consoleLog('CLASS NAME');

          _this2._consoleLog(record && record.constructor.name);

          _this2._consoleLog(record);

          var dataPromises = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default()(_context6 = _babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_8___default()(record.toObject())).call(_context6,
          /*#__PURE__*/
          function () {
            var _ref2 = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_16___default()(
            /*#__PURE__*/
            _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.mark(function _callee4(v) {
              var node, _edge3, startNode, endNode, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, obj, _startNode, _endNode, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, _obj2, _node2, _edge4;

              return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.wrap(function _callee4$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _this2._consoleLog('Constructor:');

                      _this2._consoleLog(v && v.constructor.name);

                      if (!(v instanceof neo4j_driver__WEBPACK_IMPORTED_MODULE_22___default.a.types.Node)) {
                        _context7.next = 9;
                        break;
                      }

                      _context7.next = 5;
                      return _this2.buildNodeVisObject(v, session);

                    case 5:
                      node = _context7.sent;

                      try {
                        if (!_this2._nodes.hasOwnProperty(node.id)) {
                          _this2._nodes[node.id] = node;
                          new_nodes[node.id] = node;
                        }
                      } catch (e) {
                        _this2._consoleLog(e, 'error');
                      }

                      _context7.next = 96;
                      break;

                    case 9:
                      if (!(v instanceof neo4j_driver__WEBPACK_IMPORTED_MODULE_22___default.a.types.Relationship)) {
                        _context7.next = 14;
                        break;
                      }

                      _edge3 = _this2.buildEdgeVisObject(v);

                      if (!_this2._edges.hasOwnProperty(_edge3.id)) {
                        _this2._edges[_edge3.id] = _edge3;
                        new_edges[_edge3.id] = _edge3;
                      }

                      _context7.next = 96;
                      break;

                    case 14:
                      if (!(v instanceof neo4j_driver__WEBPACK_IMPORTED_MODULE_22___default.a.types.Path)) {
                        _context7.next = 61;
                        break;
                      }

                      _this2._consoleLog('PATH');

                      _this2._consoleLog(v);

                      _context7.next = 19;
                      return _this2.buildNodeVisObject(v.start, session);

                    case 19:
                      startNode = _context7.sent;
                      _context7.next = 22;
                      return _this2.buildNodeVisObject(v.end, session);

                    case 22:
                      endNode = _context7.sent;

                      if (!_this2._nodes.hasOwnProperty(startNode.id)) {
                        new_nodes[startNode.id] = startNode;
                        _this2._nodes[startNode.id] = startNode;
                      }

                      if (!_this2._nodes.hasOwnProperty(endNode.id)) {
                        new_nodes[endNode.id] = endNode;
                        _this2._nodes[endNode.id] = endNode;
                      }

                      _iteratorNormalCompletion6 = true;
                      _didIteratorError6 = false;
                      _iteratorError6 = undefined;
                      _context7.prev = 28;
                      _iterator6 = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_15___default()(v.segments);

                    case 30:
                      if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
                        _context7.next = 45;
                        break;
                      }

                      obj = _step6.value;
                      _context7.next = 34;
                      return _this2.buildNodeVisObject(obj.start, session);

                    case 34:
                      _startNode = _context7.sent;
                      _context7.next = 37;
                      return _this2.buildNodeVisObject(obj.end, session);

                    case 37:
                      _endNode = _context7.sent;

                      if (!_this2._nodes.hasOwnProperty(_startNode.id)) {
                        new_nodes[_startNode.id] = _startNode;
                        _this2._nodes[_startNode.id] = _startNode;
                      }

                      if (!_this2._nodes.hasOwnProperty(_endNode.id)) {
                        new_nodes[_endNode.id] = _endNode;
                        _this2._nodes[_endNode.id] = _endNode;
                      }

                      edge = _this2.buildEdgeVisObject(obj.relationship);

                      if (!_this2._edges.hasOwnProperty(edge.id)) {
                        new_edges[edge.id] = edge;
                        _this2._edges[edge.id] = edge;
                      }

                    case 42:
                      _iteratorNormalCompletion6 = true;
                      _context7.next = 30;
                      break;

                    case 45:
                      _context7.next = 51;
                      break;

                    case 47:
                      _context7.prev = 47;
                      _context7.t0 = _context7["catch"](28);
                      _didIteratorError6 = true;
                      _iteratorError6 = _context7.t0;

                    case 51:
                      _context7.prev = 51;
                      _context7.prev = 52;

                      if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
                        _iterator6["return"]();
                      }

                    case 54:
                      _context7.prev = 54;

                      if (!_didIteratorError6) {
                        _context7.next = 57;
                        break;
                      }

                      throw _iteratorError6;

                    case 57:
                      return _context7.finish(54);

                    case 58:
                      return _context7.finish(51);

                    case 59:
                      _context7.next = 96;
                      break;

                    case 61:
                      if (!(v instanceof Array)) {
                        _context7.next = 96;
                        break;
                      }

                      _iteratorNormalCompletion7 = true;
                      _didIteratorError7 = false;
                      _iteratorError7 = undefined;
                      _context7.prev = 65;
                      _iterator7 = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_15___default()(v);

                    case 67:
                      if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
                        _context7.next = 82;
                        break;
                      }

                      _obj2 = _step7.value;

                      _this2._consoleLog('Array element constructor:');

                      _this2._consoleLog(_obj2 && _obj2.constructor.name);

                      if (!(_obj2 instanceof neo4j_driver__WEBPACK_IMPORTED_MODULE_22___default.a.types.Node)) {
                        _context7.next = 78;
                        break;
                      }

                      _context7.next = 74;
                      return _this2.buildNodeVisObject(_obj2, session);

                    case 74:
                      _node2 = _context7.sent;
                      if (!_this2._nodes.hasOwnProperty(_node2.id)) new_nodes[_node2.id] = _node2;
                      _context7.next = 79;
                      break;

                    case 78:
                      if (_obj2 instanceof neo4j_driver__WEBPACK_IMPORTED_MODULE_22___default.a.types.Relationship) {
                        _edge4 = _this2.buildEdgeVisObject(_obj2);
                        if (!_this2._edges.hasOwnProperty(_edge4.id)) new_edges[_edge4.id] = _edge4;
                      }

                    case 79:
                      _iteratorNormalCompletion7 = true;
                      _context7.next = 67;
                      break;

                    case 82:
                      _context7.next = 88;
                      break;

                    case 84:
                      _context7.prev = 84;
                      _context7.t1 = _context7["catch"](65);
                      _didIteratorError7 = true;
                      _iteratorError7 = _context7.t1;

                    case 88:
                      _context7.prev = 88;
                      _context7.prev = 89;

                      if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
                        _iterator7["return"]();
                      }

                    case 91:
                      _context7.prev = 91;

                      if (!_didIteratorError7) {
                        _context7.next = 94;
                        break;
                      }

                      throw _iteratorError7;

                    case 94:
                      return _context7.finish(91);

                    case 95:
                      return _context7.finish(88);

                    case 96:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee4, null, [[28, 47, 51, 59], [52,, 54, 58], [65, 84, 88, 96], [89,, 91, 95]]);
            }));

            return function (_x3) {
              return _ref2.apply(this, arguments);
            };
          }());

          dataBuildPromises.push(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_7___default.a.all(dataPromises));
        },
        onCompleted: function () {
          var _onCompleted2 = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_16___default()(
          /*#__PURE__*/
          _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.mark(function _callee5() {
            return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.wrap(function _callee5$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_7___default.a.all(dataBuildPromises);

                  case 2:
                    session.close();

                    _this2._data.nodes.add(_babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_8___default()(new_nodes));

                    _this2._data.edges.add(_babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_8___default()(new_edges)); // Create duplicate node for any this reference relationships
                    // NOTE: Is this only useful for data model type data
                    // this._data.edges = this._data.edges.map(
                    //     function (item) {
                    //          if (item.from == item.to) {
                    //             const newNode = this._data.nodes.get(item.from)
                    //             delete newNode.id;
                    //             const newNodeIds = this._data.nodes.add(newNode);
                    //             this._consoleLog("Adding new node and changing this-ref to node: " + item.to);
                    //             item.to = newNodeIds[0];
                    //          }
                    //          return item;
                    //     }
                    // );


                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee5);
          }));

          function onCompleted() {
            return _onCompleted2.apply(this, arguments);
          }

          return onCompleted;
        }(),
        onError: function onError(error) {
          _this2._consoleLog(error, 'error');

          _this2._events.generateEvent(_events__WEBPACK_IMPORTED_MODULE_26__["ErrorEvent"], {
            error_msg: error
          });
        }
      });
    }
    /**
     * Clear the data for the visualization
     */

  }, {
    key: "clearNetwork",
    value: function clearNetwork() {
      this._nodes = {};
      this._edges = {};

      this._network.setData([]);
    }
    /**
     *
     * @param {string} eventType Event type to be handled
     * @param {callback} handler Handler to manage the event
     */

  }, {
    key: "registerOnEvent",
    value: function registerOnEvent(eventType, handler) {
      this._events.register(eventType, handler);
    }
    /**
     * Reset the config object and reload data
     * @param config
     */

  }, {
    key: "reinit",
    value: function reinit(config) {
      this._init(config);

      this.render();
    }
    /**
     * Fetch live data form the server and reload the visualization
     */

  }, {
    key: "reload",
    value: function reload() {
      this.clearNetwork();
      this.render();
    }
    /**
     * Stabilize the visuzliation
     */

  }, {
    key: "stabilize",
    value: function stabilize() {
      this._network.stopSimulation();

      this._consoleLog('Calling stopSimulation');
    }
    /**
     * Execute an arbitrary Cypher query and re-render the visualization
     * @param query
     */

  }, {
    key: "renderWithCypher",
    value: function renderWithCypher(query) {
      // this._config.initial_cypher = query;
      this.clearNetwork();
      this._query = query;
      this.render();
    } // configure exports based on environment (ie Node.js or browser)
    //if (typeof exports === 'object') {
    //    module.exports = NeoVis;
    //} else {
    //    define (function () {return NeoVis;})
    //}

  }]);

  return NeoVis;
}();



/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/array/is-array":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/array/is-array","commonjs2":"@babel/runtime-corejs3/core-js-stable/array/is-array","amd":"@babel/runtime-corejs3/core-js-stable/array/is-array"} ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_array_is_array__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/concat":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/instance/concat","commonjs2":"@babel/runtime-corejs3/core-js-stable/instance/concat","amd":"@babel/runtime-corejs3/core-js-stable/instance/concat"} ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_instance_concat__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/filter":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/instance/filter","commonjs2":"@babel/runtime-corejs3/core-js-stable/instance/filter","amd":"@babel/runtime-corejs3/core-js-stable/instance/filter"} ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_instance_filter__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/for-each":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/instance/for-each","commonjs2":"@babel/runtime-corejs3/core-js-stable/instance/for-each","amd":"@babel/runtime-corejs3/core-js-stable/instance/for-each"} ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_instance_for_each__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/map":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/instance/map","commonjs2":"@babel/runtime-corejs3/core-js-stable/instance/map","amd":"@babel/runtime-corejs3/core-js-stable/instance/map"} ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_instance_map__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/define-properties":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/object/define-properties","commonjs2":"@babel/runtime-corejs3/core-js-stable/object/define-properties","amd":"@babel/runtime-corejs3/core-js-stable/object/define-properties"} ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_define_properties__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/define-property":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/object/define-property","commonjs2":"@babel/runtime-corejs3/core-js-stable/object/define-property","amd":"@babel/runtime-corejs3/core-js-stable/object/define-property"} ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_define_property__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor","commonjs2":"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor","amd":"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"} ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors","commonjs2":"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors","amd":"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"} ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols","commonjs2":"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols","amd":"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"} ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/keys":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/object/keys","commonjs2":"@babel/runtime-corejs3/core-js-stable/object/keys","amd":"@babel/runtime-corejs3/core-js-stable/object/keys"} ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_keys__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/values":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/object/values","commonjs2":"@babel/runtime-corejs3/core-js-stable/object/values","amd":"@babel/runtime-corejs3/core-js-stable/object/values"} ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_object_values__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/promise":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/promise","commonjs2":"@babel/runtime-corejs3/core-js-stable/promise","amd":"@babel/runtime-corejs3/core-js-stable/promise"} ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_promise__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/set-timeout":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/set-timeout","commonjs2":"@babel/runtime-corejs3/core-js-stable/set-timeout","amd":"@babel/runtime-corejs3/core-js-stable/set-timeout"} ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_set_timeout__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/symbol":
/*!********************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js-stable/symbol","commonjs2":"@babel/runtime-corejs3/core-js-stable/symbol","amd":"@babel/runtime-corejs3/core-js-stable/symbol"} ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_stable_symbol__;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js/get-iterator":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/core-js/get-iterator","commonjs2":"@babel/runtime-corejs3/core-js/get-iterator","amd":"@babel/runtime-corejs3/core-js/get-iterator"} ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_core_js_get_iterator__;

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/asyncToGenerator":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/helpers/asyncToGenerator","commonjs2":"@babel/runtime-corejs3/helpers/asyncToGenerator","amd":"@babel/runtime-corejs3/helpers/asyncToGenerator"} ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_helpers_asyncToGenerator__;

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/classCallCheck":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/helpers/classCallCheck","commonjs2":"@babel/runtime-corejs3/helpers/classCallCheck","amd":"@babel/runtime-corejs3/helpers/classCallCheck"} ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_helpers_classCallCheck__;

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/createClass":
/*!**************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/helpers/createClass","commonjs2":"@babel/runtime-corejs3/helpers/createClass","amd":"@babel/runtime-corejs3/helpers/createClass"} ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_helpers_createClass__;

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/defineProperty":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/helpers/defineProperty","commonjs2":"@babel/runtime-corejs3/helpers/defineProperty","amd":"@babel/runtime-corejs3/helpers/defineProperty"} ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_helpers_defineProperty__;

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/typeof":
/*!***********************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/helpers/typeof","commonjs2":"@babel/runtime-corejs3/helpers/typeof","amd":"@babel/runtime-corejs3/helpers/typeof"} ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_helpers_typeof__;

/***/ }),

/***/ "@babel/runtime-corejs3/regenerator":
/*!**************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@babel/runtime-corejs3/regenerator","commonjs2":"@babel/runtime-corejs3/regenerator","amd":"@babel/runtime-corejs3/regenerator"} ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__babel_runtime_corejs3_regenerator__;

/***/ }),

/***/ "neo4j-driver":
/*!********************************************************************************************!*\
  !*** external {"commonjs":"neo4j-driver","commonjs2":"neo4j-driver","amd":"neo4j-driver"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_neo4j_driver__;

/***/ }),

/***/ "vis-network/dist/vis-network.min":
/*!********************************************************************************************************************************************************!*\
  !*** external {"commonjs":"vis-network/dist/vis-network.min","commonjs2":"vis-network/dist/vis-network.min","amd":"vis-network/dist/vis-network.min"} ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vis_network_dist_vis_network_min__;

/***/ }),

/***/ "vis-network/dist/vis-network.min.css":
/*!********************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"vis-network/dist/vis-network.min.css","commonjs2":"vis-network/dist/vis-network.min.css","amd":"vis-network/dist/vis-network.min.css"} ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vis_network_dist_vis_network_min_css__;

/***/ })

/******/ });
});
//# sourceMappingURL=neovis-without-dependencies.js.map