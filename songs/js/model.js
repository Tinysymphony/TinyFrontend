/* Owl Pictures */

var ControlDot = React.createClass({
  render: function() {
    return (
      <div className="owl-dot">
        <span></span>
      </div>
    );
  }
});

var ControlBar = React.createClass({
  render: function() {
    return (
      <div className="owl-controls">
        <ControlDot />
        <ControlDot />
        <ControlDot />
      </div>
    );
  }
});

var PicutreItem = React.createClass({
  render: function() {
    return (
      <div className="owl-item">
        <div className="item"><img src={this.props.src} /></div>
      </div>
    );
  }
});

var PicturesBar = React.createClass({
  render: function() {
    var pics = this.props.pics;
    return (
      <div className="owl-wrapper-outer">
        <div className="owl-wrapper">
          {
            pics.map(function(item){
              return <PicutreItem src={item.src} />
            })
          }
        </div>
      </div>
    );
  }
});

var OwlPictures = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div id="carousel" className="owl-carousel owl-theme">
          <PicturesBar pics={this.props.pics} />
          <ControlBar />
        </div>
      </div>
    );
  }
});

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

/* SongList */

var layzr = "http://7xjgb0.com1.z0.glb.clouddn.com/TinyPicrin.jpg";

var InfoList = React.createClass({
  render: function() {
    return (
      <div className="InfoList col-md-6">
        <div className="row">
          <a className="CDPic"><img src={layzr} data-layzr={this.props.data.pic} className="img-rounded" /></a>
          <ul className="SongInfo">
            <li><span><a className="SongName">{this.props.data.song}</a></span></li>
            <li><span><a className="Singer">{this.props.data.singer}</a></span></li>
          </ul>
        </div>
      </div>
    );
  }
});

var FunctionList = React.createClass({
  render: function() {
    return (
      <div className="FunctionList col-md-6">
        <ul>
          <li><a className="play"></a></li>
          <li><a className="notation"></a></li>
          <li><a className="like"></a></li>
          <li><a className="share"></a></li>
          <li><a className="download"></a></li>
        </ul>
      </div>
    );
  }
});

var Song = React.createClass({
  render: function() {
    return (
      <div className="Song row">
        <InfoList data={this.props.data}/>
        <FunctionList />
      </div>
    );
  }
});

var SongList = React.createClass({
  render: function() {
    var songs = this.props.songs;
    return (
      <div class="SongList">
        {
          songs.map(function(item) {
            return <Song data={item} />
          })
        }
      </div>
    );
  }
});

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

/* Footer */

var FooterMenu = React.createClass({
  render: function() {
    var items = this.props.items;
    return (
      <div className="FooterMenuDiv">
        <ul className="FooterMenu">
          {
            items.map(function(item) {
              return <li><a>{item}</a></li>
            })
          }
        </ul>
      </div>
    );
  }
});

var FooterMenus = React.createClass({
  render: function() {
    var menus = this.props.menus;
    return (
      <div className="FooterMenus">
        {
          menus.map(function(item) {
            return <FooterMenu items={item} />
          })
        }
      </div>
    );
  }
});

var list = [
  ["WyTiny", "Blog", "Projects", "Contact"],
  ["Tiny", "AABlog", "sdfasrojects", "Contact"],
  ["OTiny", "gglog", "Projets", "Contact","bbbb","fgrrr"]
];

React.render(
  <FooterMenus menus={list} />,
  document.getElementById("menusContainer")
);
