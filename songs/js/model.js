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

/////////////////////////////////////////////

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
