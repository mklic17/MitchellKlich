$(document).foundation()

var Mitch = {

init: function() {
  this.setupEventHandlers();
},

setupEventHandlers: function() {
  $('#enter').on('submit', this.enterTransition);
},

enterTransition: function(ev) {
  console.log("here");
},


}

Mitch.init();
