$(document).foundation()

$(".timeline-item").hover(function () {
    $(".timeline-item").removeClass("active");
    $(this).toggleClass("active");
    $(this).prev(".timeline-item").toggleClass("close");
    $(this).next(".timeline-item").toggleClass("close");
});
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

  createProjectObject() {
    return projectSummary = {
      title: '',
      pictureLocation: '',
      description: '',
      futureExpansions: '',
    }
  },

  mutantProject: function(ev) {

    console.log('made it to mutantProjects()');
    projectSummary = Mitch.createProjectObject();
    projectSummary.title = 'Mutant Project';
    // projectSummary.pictureLocations = '';
    projectSummary.description = "Mutant Office Hour Project";
    projectSummary.futureExpansions = "Future things to do ";
    console.log(projectSummary);

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
