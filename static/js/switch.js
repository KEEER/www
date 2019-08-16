;(function() {
  var $ = function(sel) {return document.querySelector(sel)}
  var $$ = function(sel) {return document.querySelectorAll(sel)}
  switchButton = $('#switchPerson')
  peopleList = $$('.people')
  for (var i = 0; i < peopleList.length; i++) {
    peopleList[i].style.display = 'none'   
  }
  var displayNumber = Math.floor(Math.random() * (peopleList.length))
  var displayPerson = peopleList[displayNumber]
  displayPerson.style.display = 'block'    
  switchButton.onclick = function() {
    displayPerson.style.display = 'none'
    var x = Math.floor(Math.random() * (peopleList.length - 1))
    if(x >= displayNumber) x++
    // now x belongs to [0, peopleList.length), and dosen't equal to the old displayNumber.
    displayNumber = x
    displayPerson = peopleList[x]
    displayPerson.style.display = 'block'
  }
})()
