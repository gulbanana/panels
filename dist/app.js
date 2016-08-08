/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var GameMenu_1 = __webpack_require__(3);
	var Panels_1 = __webpack_require__(19);
	var root = React.createElement("div", null, React.createElement(GameMenu_1.default, null), React.createElement(Panels_1.default, null));
	ReactDOM.render(root, document.getElementsByTagName("main")[0]);
	if (false) {
	    module.hot.accept();
	}


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var FlexPanel_1 = __webpack_require__(4);
	var BorderPanel_1 = __webpack_require__(5);
	var GameScores_1 = __webpack_require__(6);
	var GameCommands_1 = __webpack_require__(12);
	var GameMenu = (function (_super) {
	    __extends(GameMenu, _super);
	    function GameMenu(props) {
	        _super.call(this, props);
	        this.state = { text: "Metaclicker" };
	    }
	    GameMenu.prototype.render = function () {
	        var _this = this;
	        return React.createElement(FlexPanel_1.FlexPanel, {height: "80px", direction: "row", justify: "space-around"}, React.createElement(BorderPanel_1.BorderPanel, {width: "1100px", border: "0px 2px 2px 2px"}, React.createElement(FlexPanel_1.FlexPanel, {direction: "row"}, React.createElement(BorderPanel_1.BorderPanel, {width: "200px", border: "0px 2px 0px 0px"}, React.createElement(GameScores_1.Scores, {clickers: 1, clicks: 50, players: 0})), React.createElement("div", {style: { flex: 1, fontFamily: "Verdana", fontSize: "48pt", color: "#222", textAlign: "center" }}, this.state.text), React.createElement(BorderPanel_1.BorderPanel, {width: "200px", border: "0px 0px 0px 2px"}, React.createElement(GameCommands_1.Commands, {clicks: 10, onCommand: function (n) { return _this.setState({ text: n }); }})))));
	    };
	    return GameMenu;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = GameMenu;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	function FlexPanel(props) {
	    var panelStyle = {
	        width: props.width || "100%",
	        height: props.height || "100%",
	        padding: props.padding,
	        margin: props.margin,
	        position: "relative",
	        display: "flex",
	        flexDirection: props.direction || "column",
	        justifyContent: props.justify || "flex-start",
	        alignItems: props.align || "stretch",
	    };
	    return React.createElement("div", {style: panelStyle}, React.Children.map(props.children, function (c) {
	        if (props.flex) {
	            return React.createElement("div", {style: { flex: props.flex }}, c);
	        }
	        else {
	            return c;
	        }
	    }));
	}
	exports.FlexPanel = FlexPanel;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	function BorderPanel(props) {
	    var panelStyle = {
	        width: props.width || "100%",
	        height: props.height || "100%",
	        padding: props.padding,
	        margin: props.margin,
	        borderStyle: "solid",
	        borderColor: props.color || "black",
	        borderWidth: props.border || "1px 1px 1px 1px",
	    };
	    return React.createElement("div", {style: panelStyle}, props.children);
	}
	exports.BorderPanel = BorderPanel;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var FlexPanel_1 = __webpack_require__(4);
	var HeaderText_1 = __webpack_require__(7);
	function Scores(props) {
	    return React.createElement(FlexPanel_1.FlexPanel, {direction: "column", padding: "5px"}, React.createElement(HeaderText_1.HeaderText, null, "Clickers: ", props.clickers), React.createElement(HeaderText_1.HeaderText, null, "Players: ", props.players), React.createElement(HeaderText_1.HeaderText, null, "Clicks: ", props.clicks));
	}
	exports.Scores = Scores;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var styles = __webpack_require__(8);
	function HeaderText(props) {
	    return React.createElement("span", {className: styles['header']}, props.children);
	}
	exports.HeaderText = HeaderText;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules!./HeaderText.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules!./HeaderText.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "._2Kewg9YhCcRc9QFfWaPzId {\r\n    font-family: \"Verdana\";\r\n    font-size: \"12pt\";\r\n    color: #222;\r\n}", ""]);

	// exports
	exports.locals = {
		"header": "_2Kewg9YhCcRc9QFfWaPzId"
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var FlexPanel_1 = __webpack_require__(4);
	var ActionButton_1 = __webpack_require__(13);
	function Commands(props) {
	    var all = [
	        { name: "Play your own games", cost: 0 },
	        { name: "Advertise on forums", cost: 5 },
	        { name: "Develop a new game", cost: 50 },
	    ];
	    return React.createElement(FlexPanel_1.FlexPanel, {direction: "column", padding: "5px"}, all.map(function (c) { return React.createElement(ActionButton_1.ActionButton, {key: c.name, label: c.name, error: props.clicks >= c.cost ? null : "requires " + c.cost + " clicks", onClick: function () { return props.onCommand(c.name); }}); }));
	}
	exports.Commands = Commands;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var Tooltip_1 = __webpack_require__(14);
	var styles = __webpack_require__(17);
	function ActionButton(props) {
	    var c = props.error == null ? styles['button'] : styles['button'] + " " + styles['disabled'];
	    return React.createElement(Tooltip_1.Tooltip, {text: props.error}, React.createElement("button", {className: c, onClick: props.onClick, disabled: props.error != null}, props.label));
	}
	exports.ActionButton = ActionButton;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var styles = __webpack_require__(15);
	function Tooltip(props) {
	    if (props.text == null) {
	        return React.createElement("div", null, props.children);
	    }
	    else {
	        return React.createElement("div", {className: styles['target']}, props.children, React.createElement("div", {className: styles['tooltip']}, props.text));
	    }
	}
	exports.Tooltip = Tooltip;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules!./Tooltip.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules!./Tooltip.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "._1ntHiaGJ6zGubKQZlWZnKm {\r\n    visibility: hidden;\r\n    position: absolute;\r\n    right: -80px;\r\n    z-index: 1;\r\n    background-color: white;\r\n    color: black;\r\n    border: 1px solid green;\r\n    padding: 2px;\r\n}\r\n\r\n.mulEZt8LAmysldIV3nVMa:hover ._1ntHiaGJ6zGubKQZlWZnKm {\r\n    visibility: visible;\r\n}", ""]);

	// exports
	exports.locals = {
		"tooltip": "_1ntHiaGJ6zGubKQZlWZnKm",
		"target": "mulEZt8LAmysldIV3nVMa"
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules!./ActionButton.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules!./ActionButton.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "._151SOjtR_vWpkKh3Ziojfr {\r\n    font-family: Verdana;\r\n    font-size: 12pt;\r\n    text-decoration: underline;\r\n    background-color: white;\r\n    color: blue;\r\n    border: 0px;\r\n    margin: 2;\r\n    text-align: left;\r\n}\r\n\r\n._2kX2Opk8W5WsZxhtCuOIdI {\r\n    color: gray\r\n}", ""]);

	// exports
	exports.locals = {
		"button": "_151SOjtR_vWpkKh3Ziojfr",
		"disabled": "_2kX2Opk8W5WsZxhtCuOIdI"
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var PanelBox_1 = __webpack_require__(20);
	var FlexPanel_1 = __webpack_require__(4);
	var Panels = (function (_super) {
	    __extends(Panels, _super);
	    function Panels() {
	        _super.apply(this, arguments);
	    }
	    Panels.prototype.render = function () {
	        return React.createElement(FlexPanel_1.FlexPanel, {direction: "row"}, React.createElement(PanelBox_1.default, {label: "1"}), React.createElement(FlexPanel_1.FlexPanel, {direction: "column"}, React.createElement(PanelBox_1.default, {label: "2A"}), React.createElement(PanelBox_1.default, {label: "2B"})), React.createElement(FlexPanel_1.FlexPanel, {direction: "column"}, React.createElement(PanelBox_1.default, {label: "3A", height: 200}), React.createElement(PanelBox_1.default, {label: "3B"})), React.createElement(FlexPanel_1.FlexPanel, {direction: "column"}, React.createElement(PanelBox_1.default, {label: "4/5A", width: 200}), React.createElement(FlexPanel_1.FlexPanel, {direction: "row", justify: "flex-end"}, React.createElement(PanelBox_1.default, {label: "5B"}))));
	    };
	    return Panels;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Panels;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	function PanelBox(props) {
	    var containerStyle = {
	        width: props.width || 100,
	        height: props.height || 100,
	        border: "1px solid black",
	        background: "red",
	        fontWeight: "bold",
	        fontSize: "18pt",
	        textAlign: "center",
	    };
	    return React.createElement("div", {style: containerStyle}, props.label);
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = PanelBox;


/***/ }
/******/ ]);