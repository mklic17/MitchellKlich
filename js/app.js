$(document).foundation()

$(".timeline-item").hover(function () {
    $(".timeline-item").removeClass("active");
    $(this).toggleClass("active");
    $(this).prev(".timeline-item").toggleClass("close");
    $(this).next(".timeline-item").toggleClass("close");
});

$(window).scroll(function () {
    var scrollh = $(this).scrollTop();
    if (scrollh == 0) {
        $(".navbar").css({
            'height':'75px',
            'font-size': '1.75em',
            'color': '#87d37c',
            'transition': 'all .1s ease-in-out'
        });
    } else {
        $(".navbar").css({
            'height':'50px',
            'font-size': '1.0em',
        });
    }
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
    $('.contactMe').on('click', this.contactMe);
  },

  createProjectObject() {
    return projectSummary = {
      title: '',
      pictureLocation: '',
      description: '',
      futureExpansions: '',
    }
  },
  contactMe: function(ev) {
    ev.preventDefaults;
    window.location.href = 'mailto:MitchellKlich_2017@DePauw.edu?subject=ContactMe&=Hello';
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
