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
    $('#my-links-container, #my-avatar-container').removeClass('centered-origin-right');
    $('.wrapper').removeClass('centered-content');

    $('#my-name').removeClass('centered-my-name');
    $('#my-title').removeClass('centered-my-title');
    $('#my-links').removeClass('centered-my-links');
    $('#my-avatar').removeClass('centered-my-avatar');

    $('.link-icon').removeClass('fa-big');

    $('#profile').removeClass('hide-profile');
  }

  function navigateToIntro() {
    $('#navigator').removeClass('flip');

    $('#profile').addClass('hide-profile');

    $('.link-icon').addClass('fa-big');

    $('#my-name').addClass('centered-my-name');
    $('#my-title').addClass('centered-my-title');
    $('#my-links').addClass('centered-my-links');
    $('#my-avatar').addClass('centered-my-avatar');

    $('.wrapper').addClass('centered-content');
    $('#my-links-container, #my-avatar-container').addClass('centered-origin-right');
    $('#my-name-container, #my-title-container').addClass('centered-origin-left');
  }
})();