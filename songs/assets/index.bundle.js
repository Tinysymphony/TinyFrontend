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

	// var css = require('../css/back.css');

	var OwlPictures = __webpack_require__(1);
	var SongList = __webpack_require__(2);
	var FooterMenus = __webpack_require__(3);
	var Main = __webpack_require__(4)

	var list = [
	  {name: "HI", src:"http://7xjgb0.com1.z0.glb.clouddn.com/TinyPicll.jpg"},
	  {name: "JT", src:"http://7xjgb0.com1.z0.glb.clouddn.com/TinyPicbb.jpg"},
	  {name: "AF", src:"http://7xjgb0.com1.z0.glb.clouddn.com/TinyPicaa.jpg"},
	  {name: "CG", src:"http://7xjgb0.com1.z0.glb.clouddn.com/mongo-insert.png"},
	  {name: "ER", src:"http://7xjgb0.com1.z0.glb.clouddn.com/mongoindex.png"}
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


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ },
/* 3 */
/***/ function(module, exports) {

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


/***/ },
/* 4 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);