//this file needs to be loaded as require('./js/jquery/scroll-fix.js');
var $ = require('jquery');
/* fix mousewheel 1 - stops spinning the numbers up and down with mousewheel, but it also stops the page scrolling while the cursor is over the input, which is unexpectected behavior */

$('.input-fix-mousewheel1').on('focus', function (e) {
  $(this).on('mousewheel.disableScroll', function (e) {
	 	e.preventDefault();
  })
}).on('blur', function (e) {
  $(this).off('mousewheel.disableScroll')
});


/* fix mousewheel 2 - in addition to the above, this passes on the mousewheel delta to scroll the page as the user expected */

$('.input-fix-mousewheel2').on('focus', function (e) {
  $(this).on('mousewheel.disableScroll', function (e) {
    e.preventDefault();
    var scrollTo = (e.originalEvent.wheelDelta*-1) + $(document.documentElement).scrollTop();
    $(document.documentElement).scrollTop(scrollTo);
  })
}).on('blur', function (e) {
  $(this).off('mousewheel.disableScroll')
});