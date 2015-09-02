// var css = require('../css/back.css');

var OwlPictures = require('./owlPictures.js');
var SongList = require('./songList.js');
var FooterMenus = require('./footerMenus.js');
var Main = require('./main.js')

var list = [
  {name: "HI", src:"http://7xjgb0.com1.z0.glb.clouddn.com/TinyPicll.jpg"},
  {name: "JT", src:"http://7xjgb0.com1.z0.glb.clouddn.com/TinyPicbb.jpg"},
  {name: "AF", src:"http://7xjgb0.com1.z0.glb.clouddn.com/TinyPicaa.jpg"},
  {name: "CG", src:"http://7xjgb0.com1.z0.glb.clouddn.com/mongo-insert.png"},
  {name: "ER", src:"http://7xjgb0.com1.z0.glb.clouddn.com/mongoindex.png"}
];

React.render(
  <OwlPictures pics={list} />,
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
  <SongList songs={songs}/>,
  document.getElementById("topList")
);

var list = [
  ["WyTiny", "Blog", "Projects", "Contact"],
  ["Tiny", "AABlog", "sdfasrojects", "Contact"],
  ["OTiny", "gglog", "Projets", "Contact","bbbb","fgrrr"]
];

React.render(
  <FooterMenus menus={list} />,
  document.getElementById("menusContainer")
);
