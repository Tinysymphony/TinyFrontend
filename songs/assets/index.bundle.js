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
/******/ 	__webpack_require__.p = "/assets";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/tiny/workspace/TinyFrontend/songs/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/tiny/workspace/TinyFrontend/songs/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	__webpack_require__(2);

	var OwlPictures = __webpack_require__(6);
	var SongList = __webpack_require__(7);
	var FooterMenus = __webpack_require__(8);
	var Main = __webpack_require__(9);

	var list = [
	  {name: "HI", src:"http://7xjgb0.com1.z0.glb.clouddn.com/TinyPicll.jpg"},
	  {name: "JT", src:"http://7xjgb0.com1.z0.glb.clouddn.com/TinyPicbb.jpg"},
	  {name: "AF", src:"http://7xjgb0.com1.z0.glb.clouddn.com/TinyPicaa.jpg"},
	  {name: "CG", src:"http://7xjgb0.com1.z0.glb.clouddn.com/mongo-insert.png"},
	  {name: "ER", src:"http://7xjgb0.com1.z0.glb.clouddn.com/mongoindex.png"},
	];

	React.render(
	  React.createElement(OwlPictures, {pics: list}),
	  document.getElementById("owlSection")
	);

	//data from server
	var songs = [
	  {
	    song: "Level5",
	    singer: "fripSide",
	    pic: "http://7xjgb0.com1.z0.glb.clouddn.com/TinyPicmaki.jpg"
	  },
	  {
	    song: "Reason",
	    singer: "min",
	    pic: "http://7xjgb0.com1.z0.glb.clouddn.com/TinyPicmaki.jpg"
	  },
	  {
	    song: "opersing",
	    singer: "AGT",
	    pic: "http://7xjgb0.com1.z0.glb.clouddn.com/TinyPicmaki.jpg"
	  }
	];

	React.render(
	  React.createElement(SongList, {songs: songs}),
	  document.getElementById("topList")
	);

	var list = [
	  ["WyTiny", "Blog", "Projects", "Contact"],
	  ["Tiny", "AABlog", "sdfasrojects", "Contact"],
	  ["OTiny", "gglog", "Projets", "Contact","bbbb","fgrrr"]
	];

	React.render(
	  React.createElement(FooterMenus, {menus: list}),
	  document.getElementById("menusContainer")
	);


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/tiny/workspace/TinyFrontend/songs/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./back.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./back.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\nbody, p, a, h2, h3, h4, h5, h6 {\n    font-family: 'Cuprum', sans-serif;\n    color: #333;\n}\n\nul > li {\n    list-style: none;\n    transition: 0.5s\n}\n\na {\n    text-decoration: none !important;\n    cursor: pointer;\n}\n\nh2 {\n    font-family: 'Cuprum', sans-serif !important;\n}\n\ndiv, img {\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n}\n\nnav.top {\n    height: 45px;\n    line-height: 45px;\n    background-color: #FFF;\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\nnav.top a {\n    font-size: 25px;\n    color: #CCC;\n    transition: 0.5s;\n}\n\nnav.top a:hover {\n    color: #C26969;\n}\n\nnav.top ul.clock {\n    float: right;\n    line-height: 45px;\n}\n\nul.clock > li > a {\n    font-family: 'Ubuntu Mono';\n}\n\nnav.main {\n    height: 65px;\n    background-color: #DDD;\n    padding-left: 30px;\n    border-style: solid none solid none;\n    border-width: 1px;\n    border-color: #CCC;\n}\n\nnav.main li:hover {\n    background-color: #EEE;\n    cursor: pointer;\n}\n\na#title {\n    font-family: 'Lobster', sans-serif !important;\n    font-size: 45px !important;\n    transition: 0.5s;\n}\n\na#title:after { content: '\\AE';\n    margin-left: 7px;\n    vertical-align: top;\n    font-size: 0.4em;\n}\n\n#header .right {\n    position: absolute;\n    top: 45px;\n    right: 0;\n    list-style-type: none;\n    float: right;\n    text-transform: uppercase;\n    line-height: 65px;\n    font-size: 18px;\n}\n\n#header .right li {\n    position: relative;\n    float: left;\n    border-right: 1px solid #CCC;\n    padding-left: 20px;\n    padding-right: 20px;\n    /*cursor: pointer;*/\n}\n\n#header .right li.active a {\n    font-weight: bold;\n    color: #E71646;\n}\n\n#header .right li.start:hover {\n    background-color: #DF8469;\n}\n\n#header .right li.start {\n    background-color: #EF5B2F;\n}\n\n#header .right li.start a {\n    color: #FFF;\n}\n\n.TinyRow {\n  text-align: center;\n}\n\n#owlSection {\n  margin-top: 30px;\n  padding-left: 50px;\n  padding-right: 50px;\n}\n\n#carousel .owl-item {\n  margin: 5px;\n}\n\n#carousel img {\n  display: block;\n  width: 220px;\n  height: 130px;\n}\n\n.Song {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 2px solid #EF00EF;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px;\n  font-size: 1.5em;\n  background-color: #EDEDC0;\n  transition: 0.5s;\n  width: 100%;\n}\n\n.CDPic {\n  width: 60px;\n  height: auto;\n  margin: 0;\n  padding: 0;\n}\n\n.SongInfo {\n  position: absolute;\n  top: 0;\n  left: 30px;\n}\n\n.FunctionList {\n  height: 60px;\n  width: 250px;\n  background-color: #E0D0E0;\n  float: right;\n}\n\n#topList img {\n  width: 60px;\n  height: 60px;\n}\n\n@media screen and (max-width: 1000px) {\n  #header .right li:not(.start){\n    display: none;\n  }\n}\n\n@media screen and (max-width: 750px) {\n  #header .clock {\n    display: none;\n  }\n}\n\nfooter {\n  /*opacity: 0;*/\n  padding-top: 30px;\n  padding-bottom: 30px;\n  width: 100%;\n  bottom: 0;\n  position: absolute;\n  background-color: #242424;\n}\n\nfooter a, p, h1, h2, h3 {\n  color: #BBB;\n}\n\nfooter a {\n  font-size: 1.5em;\n}\n\nfooter li {\n  position: relative;\n  /*float: left;*/\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\n.copy {\n  clear: both;\n}\n\n\n.FooterMenuDiv {\n  float: left;\n}\n", ""]);

	// exports


/***/ },
/* 4 */
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
/* 5 */
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
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

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

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
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
		var sourceMap = obj.sourceMap;

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
		var media = obj.media;
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/tiny/workspace/TinyFrontend/songs/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/tiny/workspace/TinyFrontend/songs/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	/* Owl Pictures */

	var PictureItem = React.createClass({displayName: "PictureItem",
	  render: function() {
	    return (
	      React.createElement("div", {className: "item"}, 
	        React.createElement("img", {src: this.props.src})
	      )
	    );
	  }
	});

	var OwlPictures = React.createClass({displayName: "OwlPictures",
	  componentDidMount: function() {
	    $(document).ready(function() {
	      $("#carousel").owlCarousel({
	        autoPlay: 3000, //Set AutoPlay to 3 seconds
	        items : 4,
	        itemsDesktop : [1199,3],
	        itemsDesktopSmall : [979,3]
	      });
	    });
	  },
	  render: function() {
	    var pics = this.props.pics;
	    return (
	      React.createElement("div", {className: "container"}, 
	        React.createElement("div", {className: "row"}, 
	          React.createElement("div", {id: "carousel", className: "owl-carousel"}, 
	            
	              pics.map(function(item) {
	                return React.createElement(PictureItem, {src: item.src})
	              })
	            
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = OwlPictures;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/tiny/workspace/TinyFrontend/songs/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "owlPictures.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/tiny/workspace/TinyFrontend/songs/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/tiny/workspace/TinyFrontend/songs/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	/* SongList */

	var layzr = "http://7xjgb0.com1.z0.glb.clouddn.com/TinyPicrin.jpg";

	var InfoList = React.createClass({displayName: "InfoList",
	  render: function() {
	    return (
	      React.createElement("div", {className: "InfoList col-md-6"}, 
	        React.createElement("div", {className: "row"}, 
	          React.createElement("a", {className: "CDPic"}, React.createElement("img", {src: layzr, "data-layzr": this.props.data.pic, className: "img-rounded"})), 
	          React.createElement("ul", {className: "SongInfo"}, 
	            React.createElement("li", null, React.createElement("span", null, React.createElement("a", {className: "SongName"}, this.props.data.song))), 
	            React.createElement("li", null, React.createElement("span", null, React.createElement("a", {className: "Singer"}, this.props.data.singer)))
	          )
	        )
	      )
	    );
	  }
	});

	var FunctionList = React.createClass({displayName: "FunctionList",
	  render: function() {
	    return (
	      React.createElement("div", {className: "FunctionList col-md-6"}, 
	        React.createElement("ul", null, 
	          React.createElement("li", null, React.createElement("a", {className: "play"})), 
	          React.createElement("li", null, React.createElement("a", {className: "notation"})), 
	          React.createElement("li", null, React.createElement("a", {className: "like"})), 
	          React.createElement("li", null, React.createElement("a", {className: "share"})), 
	          React.createElement("li", null, React.createElement("a", {className: "download"}))
	        )
	      )
	    );
	  }
	});

	var Song = React.createClass({displayName: "Song",
	  render: function() {
	    return (
	      React.createElement("div", {className: "Song row"}, 
	        React.createElement(InfoList, {data: this.props.data}), 
	        React.createElement(FunctionList, null)
	      )
	    );
	  }
	});

	var SongList = React.createClass({displayName: "SongList",
	  render: function() {
	    var songs = this.props.songs;
	    return (
	      React.createElement("div", {className: "container SongList"}, 
	        
	          songs.map(function(item) {
	            return React.createElement(Song, {data: item})
	          })
	        
	      )
	    );
	  }
	});

	module.exports = SongList;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/tiny/workspace/TinyFrontend/songs/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "songList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/tiny/workspace/TinyFrontend/songs/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/tiny/workspace/TinyFrontend/songs/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	/* Footer */
	var FooterMenu = React.createClass({displayName: "FooterMenu",
	  render: function() {
	    var items = this.props.items;
	    return (
	      React.createElement("div", {className: "FooterMenuDiv"}, 
	        React.createElement("ul", {className: "FooterMenu"}, 
	          
	            items.map(function(item) {
	              return React.createElement("li", null, React.createElement("a", null, item))
	            })
	          
	        )
	      )
	    );
	  }
	});

	var FooterMenus = React.createClass({displayName: "FooterMenus",
	  render: function() {
	    var menus = this.props.menus;
	    return (
	      React.createElement("div", {className: "FooterMenus"}, 
	        
	          menus.map(function(item) {
	            return React.createElement(FooterMenu, {items: item})
	          })
	        
	      )
	    );
	  }
	});

	module.exports = FooterMenus;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/tiny/workspace/TinyFrontend/songs/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "footerMenus.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/home/tiny/workspace/TinyFrontend/songs/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/home/tiny/workspace/TinyFrontend/songs/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	function syncClock() {
	    var clock = document.querySelector("#header ul.clock a");
	    var date = new Date().toLocaleDateString();
	    var time = new Date().toLocaleTimeString();
	    if(clock && time){
	        clock.innerHTML = date + "&emsp;" + time;
	        setTimeout(syncClock, 500);
	    } else {
	        console.log("cannot update clock.");
	    }
	}
	setTimeout(syncClock, 500);

	window.onload = function() {
	  var layzr = new Layzr({
	  });
	}


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/home/tiny/workspace/TinyFrontend/songs/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "main.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }
/******/ ]);