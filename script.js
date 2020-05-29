$(window).on('load', function() {
  // #back-to-topを消す
  $('#back-to-top').hide();
  
  // スクロールが十分されたら#back-to-topを表示、スクロールが戻ったら非表示
  $(window).scroll(function() {
      $('#pos').text($(this).scrollTop());
      if ($(this).scrollTop() > 60) {
          $('#back-to-top').fadeIn();
      } else {
          $('#back-to-top').fadeOut();
      }
  });
  
  // #back-to-topがクリックされたら上に戻る
  $('#back-to-top a').click(function() {
      $('html body').animate({
          scrollTop:0
      }, 500);
      return false;
  });

});
(function() {
'use strict';

var show = document.getElementById('show');
var main = document.getElementById('main');

show.addEventListener('click', function() {
// if (main.className === 'menu-open') {
//   main.className = '';
// } else {
//   main.className = 'menu-open';
// }
main.className = main.className === 'menu-open' ? '' : 'menu-open';
});

})();
