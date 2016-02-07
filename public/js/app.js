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
    $('.container').removeClass('centered-origin');
    $('.wrapper').removeClass('centered-content');

    $('#my-name').removeClass('centered-my-name');
    $('#my-title').removeClass('centered-my-title');
    $('#my-links').removeClass('centered-my-links');
    $('#my-avatar').removeClass('centered-my-avatar');
  }

  function navigateToIntro() {
    $('#my-name').addClass('centered-my-name');
    $('#my-title').addClass('centered-my-title');
    $('#my-links').addClass('centered-my-links');
    $('#my-avatar').addClass('centered-my-avatar');


    $('.wrapper').addClass('centered-content');
    $('.container').addClass('centered-origin');
  }
})();