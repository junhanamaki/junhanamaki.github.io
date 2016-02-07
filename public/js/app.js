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

    $('#my-name').removeClass('positioned-my-name');
    $('#my-title').removeClass('positioned-my-title');
    $('#my-links').removeClass('positioned-my-links');
    $('#my-avatar').removeClass('positioned-my-avatar');
  }

  function navigateToIntro() {
    $('#my-name').addClass('positioned-my-name');
    $('#my-title').addClass('positioned-my-title');
    $('#my-links').addClass('positioned-my-links');
    $('#my-avatar').addClass('positioned-my-avatar');


    $('.wrapper').addClass('centered-content');
    $('.container').addClass('centered-origin');
  }
})();