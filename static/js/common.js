;(function () {
  var $ = function (sel) {return document.querySelector(sel)}
  var $$ = function (sel) {return document.querySelectorAll(sel)}
  var appbar = $('#appbar')
  var header = $('.container.header')
  if (header) {
    var hidden = true
    var nohide = header.classList.contains('nohide')
    var clazz = nohide ? 'opaque' : 'hidden'
    var onscroll = function () {
      var rect = header.getBoundingClientRect()
      if (hidden && rect.top + rect.height - 64 < 0) {
        appbar.classList.remove(clazz)
        hidden = false
      }
      if (!hidden && rect.top + rect.height - 64 > 0) {
        appbar.classList.add(clazz)
        hidden = true
      }
    }
    window.addEventListener('scroll', onscroll)
    setTimeout(onscroll, 1)
    if (nohide) {
      appbar.classList.remove('hidden')
      appbar.classList.add('opaque')
    }
  } else {
    appbar.classList.remove('hidden')
  }

  var ripples = [].concat(Array.from($$('[data-ripple]')), Array.from($$('.mdc-button')), Array.from($$('.mdc-icon-button')))
  for (var i = 0; i < ripples.length; i++) {
    var ripple = mdc.ripple.MDCRipple.attachTo(ripples[i])
    if (ripples[i].classList.contains('mdc-icon-button')) ripple.unbounded = true
  }
})()
