/* Owl Pictures */

var PictureItem = React.createClass({
  render: function() {
    return (
      <div className="item">
        <img src={this.props.src} />
      </div>
    );
  }
});

var OwlPictures = React.createClass({
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
      <div className="container">
        <div className="row">
          <div id="carousel" className="owl-carousel">
            {
              pics.map(function(item) {
                return <PictureItem src={item.src} />
              })
            }
          </div>
        </div>
      </div>
    );
  }
});

module.exports = OwlPictures;
