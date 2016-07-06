$(document).foundation()

var Mitch = {

  init: function() {
    this.setupEventHandlers();
  },

  setupEventHandlers: function() {
    // $('#enter').on('submit', this.enterTransition);
    $('.mutantProject').on('click', this.mutantProject);
    $('.responderProject').on('click', this.responderProject);
    $('.pokemonProject').on('click', this.pokemonProject);
    $('.cardProject').on('click', this.cardProject);
  },

  mutantProject: function(ev) {
    console.log('made it to mutantProjects()');
  },

  responderProject: function(ev) {
    console.log('made it to responderProjects()');
  },

  pokemonProject: function(ev) {
    console.log('made it to pokemonProjects()');
  },

  cardProject: function(ev) {
    console.log('made it to cardProjects()');
  },

  enterTransition: function(ev) {
    console.log("here");
  },


}

Mitch.init();
