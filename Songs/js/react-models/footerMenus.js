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

module.exports = FooterMenus;
