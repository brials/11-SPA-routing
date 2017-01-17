'use strict';

(function(module) {
  const articleController = {};
  //Done: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  articleController.init = function(){
    Article.fetchAll(articleView.initIndexPage); //eslint-disable-line
    $('.tab-content').hide();
    $('#articles').fadeIn();
  }

  module.articleController = articleController;
})(window);
