$.fn.extend({
  tinyClick: function () {
    return this.click(function(e) {
      console.log($(this)[0]);
    });
  },
  tingClick: function() {
    return this.click(function(e) {
      console.log("tingClick");
    });
  }
});

$.fn.how = function() {
  return this.click(function(e) {
    console.log(3);
  });
}

$("#ting").tingClick().how().tinyClick();

$(function(){

});
