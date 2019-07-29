;(function() {
  var $ = function(sel) {return document.querySelector(sel)}
  var appbar = $('#appbar')
  var header = $('.container.header')
  if(header) {
    var hidden = true
    window.addEventListener('scroll', function() {
      var rect = header.getBoundingClientRect()
      if(hidden && rect.top + rect.height < 0) {
        appbar.classList.remove('hidden')
        hidden = false
      }
      if(!hidden && rect.top + rect.height > 0) {
        appbar.classList.add('hidden')
        hidden = true
      }
    })
  }
})()
