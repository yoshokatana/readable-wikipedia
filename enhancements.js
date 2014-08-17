document.querySelector('html').classList.add('readable');

var links = document.querySelectorAll('a');

function toggleLinks() {
  // toggle the blackout class
  for (var i=0, l=links.length; i<l; i++) {
    var link = links[i];

    if (link.classList.contains('blackout')) {
      link.classList.remove('blackout');
    } else {
      link.classList.add('blackout');
    }
  }
}

var isToggled = (localStorage.getItem('readable-wiki-blkout') && localStorage.getItem('readable-wiki-blkout') === '1') ? true : false;

// on page load, check the link toggle state
if (isToggled) {
  toggleLinks();
}

// toggle link hiding when pressing A
window.addEventListener('keydown', function(e) {
  if (e.which === 65) { // 'A' key
    toggleLinks();
    // persist this with localStorage
    if (isToggled) {
      localStorage.setItem('readable-wiki-blkout', '0');
    } else {
      localStorage.setItem('readable-wiki-blkout', '1');
    }
  } 
});
