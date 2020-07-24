;(function () {
  var arrayFrom = function (arrayLike) {
    var array = []
    for (var i = 0; i < arrayLike.length; i++) array[i] = arrayLike[i]
    return array
  }
  var $ = function (sel) { return document.querySelector(sel) }
  var $$ = function (sel) { return document.querySelectorAll(sel) }
  var throttle = function (ms, func) {
    var lastFire = -1
    return function () {
      if (Date.now() - lastFire > ms) {
        lastFire = Date.now()
        func()
      }
    }
  }
  var appbar = $('#appbar')
  var header = $('.container.header')
  var revealEls = [].concat(arrayFrom($$('.container'))).concat(arrayFrom($$('.reveal')))
  var revealed = []
  if (header) {
    var hidden = true
    var nohide = header.classList.contains('nohide')
    var clazz = nohide ? 'opaque' : 'header--hidden'
    var onscroll = throttle(200, function () {
      var rect = header.getBoundingClientRect()
      var height = window.innerHeight
      if (hidden && rect.top + rect.height - 64 < 0) {
        appbar.classList.remove(clazz)
        hidden = false
      }
      if (!hidden && rect.top + rect.height - 64 > 0) {
        appbar.classList.add(clazz)
        hidden = true
      }
      for (var i = 0; i < revealEls.length; i++) {
        if (revealed[i]) continue
        if (revealEls[i].getBoundingClientRect().top < height) {
          revealed[i] = true
          revealEls[i].classList.add('reveal--show')
        }
      }
    })
    window.addEventListener('scroll', onscroll)
    setTimeout(onscroll, 1)
    setTimeout(onscroll, 320)
    if (nohide) {
      appbar.classList.remove('header--hidden')
      appbar.classList.add('opaque')
    }
  } else {
    appbar.classList.remove('header--hidden')
  }

  setTimeout(function () {
    var el = document.createElement('script')
    el.src = 'https://idframe.keeer.net/js/appbar.js'
    el.async = el.defer = true
    document.head.appendChild(el)
  }, 50)
  var intervalId = setInterval(function () {
    if ('idFrame' in window && idFrame && idFrame.AppBarFrame) {
      clearInterval(intervalId)
      new idFrame.AppBarFrame({ container: '#idframe' })
    }
  }, 200)

  var rippleIntervalId = setInterval(function () {
    if ('mdc' in window && 'ripple' in window.mdc) {
      clearInterval(rippleIntervalId)
      var ripples = [].concat(arrayFrom($$('[data-ripple]')), arrayFrom($$('.mdc-button')), arrayFrom($$('.mdc-icon-button')))
      for (var i = 0; i < ripples.length; i++) {
        var ripple = mdc.ripple.MDCRipple.attachTo(ripples[i])
        if (ripples[i].classList.contains('mdc-icon-button')) ripple.unbounded = true
      }
    }
  })

  window.GoogleAnalyticsObject = 'ga'
  window.ga = window.ga || function () { ;(window.ga.q = window.ga.q || []).push(arguments) }
  window.ga.l = Date.now()
  ga('create', 'UA-135036985-1', 'auto')
  ga('send', 'pageview')
})()
