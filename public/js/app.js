'use strict';

(function() {
  let state = 0;

  window.onNavigatorClick = function() {
    if (state == 0) {
      navigateToCV();

      state = 1;
    } else {
      navigateToIntro()

      state = 0;
    }
  };

  function navigateToCV() {
    $('#navigator').addClass('flip');

    $('#my-name-container, #my-title-container').removeClass('centered-origin-left');
    $('#my-links-container, #my-avatar-container, #navigator-container').removeClass('centered-origin-right');
    $('.wrapper').removeClass('centered-content');

    $('#my-name').removeClass('centered-my-name');
    $('#my-title').removeClass('centered-my-title');
    $('#my-links').removeClass('centered-my-links');
    $('#my-avatar').removeClass('centered-my-avatar');
    $('#navigator').removeClass('centered-navigator');

    $('.link-icon').removeClass('fa-big');

    $('#about-container').removeClass('hide-about');
    $('#header-background').removeClass('hide-header-background');
  }

  function navigateToIntro() {
    $('#navigator').removeClass('flip');

    $('#header-background').addClass('hide-header-background');
    $('#about-container').addClass('hide-about');

    $('.link-icon').addClass('fa-big');

    $('#navigator').addClass('centered-navigator');
    $('#my-name').addClass('centered-my-name');
    $('#my-title').addClass('centered-my-title');
    $('#my-links').addClass('centered-my-links');
    $('#my-avatar').addClass('centered-my-avatar');

    $('.wrapper').addClass('centered-content');
    $('#my-links-container, #my-avatar-container, #navigator-container').addClass('centered-origin-right');
    $('#my-name-container, #my-title-container').addClass('centered-origin-left');
  }
})();