$('#mw-head').append('\
 <div id="logo">\
    <a href="/">\
      <img src="http://bits.wikimedia.org/static-1.20wmf7/extensions/MobileFrontend/stylesheets/images/logo-copyright-en.png" class="desktop">     
      <img src="http://upload.wikimedia.org/wikipedia/commons/8/84/W_logo_for_Mobile_Frontend.gif" class="mobile">
    </a>\
  </div>\
');

$('#footer').prepend('\
 <p id="enhancement_credit">The readability of this page is enhanced by <a href="http://dcxn.com">Nick Rowe</a></li>\
');

if(window.location.href.match(/File/))
{
   $('#shared-image-desc').hide();

  $('.firstHeading').hide();

  $(document).bind('keydown.i', function() {
    $('#shared-image-desc').toggle();
  });
}

$(document).bind('keydown.a', function() { 
  $('a').toggleClass('visible-link'); 
});

var extraRemovables = [$('.infobox'), $('.vertical-navbox'), $('.navbox'), $('.succession-box'), $('.toccolours'), $('.wikitable'), $('#content .thumb')];

var hidden = false;


$(document).bind('keydown.i', function() {
  if (hidden) {
    $.each(extraRemovables, function(index, elements){
      elements.css('display', 'block');
    });
  } else {
    $.each(extraRemovables, function(index, elements){
      elements.css('display', 'none');
    });
  }
  hidden = !hidden;
});

$(document).bind('keydown.j', function() {
  window.scrollBy(0,30);
});

$(document).bind('keydown.k', function() {
  window.scrollBy(0,-30);
});