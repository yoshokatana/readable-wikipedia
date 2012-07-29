$('#mw-head').append('\
 <div id="logo">\
    <a href="/">\
      <img src="http://bits.wikimedia.org/static-1.20wmf7/extensions/MobileFrontend/stylesheets/images/logo-copyright-en.png">\
    </a>\
  </div>\
');

if(window.location.href.match(/File/))
{
  $('.firstHeading span').text($('.description').first().text());
}
