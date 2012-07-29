$('#mw-head').append('\
 <div id="logo">\
    <a href="/">\
      <img src="http://bits.wikimedia.org/static-1.20wmf7/extensions/MobileFrontend/stylesheets/images/logo-copyright-en.png">\
    </a>\
  </div>\
');

$('#footer').prepend('\
 <p id="enhancement_credit">The readability of this page is enhacemented by <a href="http://dcxn.com">Nick Rowe</a></li>\
');

if(window.location.href.match(/File/))
{
   $('#shared-image-desc').hide();

  $('.firstHeading span').text($('.description').first().text());

  $(document).bind('keydown.i', function() {
    $('#shared-image-desc').toggle();
  });
}

$(document).bind('keydown.a', function() { 
  $('a').toggleClass('visible-link'); 
});


