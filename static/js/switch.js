;(function () {
  var $ = function (sel) { return document.querySelector(sel) }
  switchButton = $('#switch-person')
  peopleList = $('#team-members').querySelectorAll('.reveal')
  for (var i = 0; i < peopleList.length; i++) {
    peopleList[i].classList.add('hidden')
    peopleList[i].classList.add('nodelay')
    peopleList[i].classList.remove('reveal--show')
  }
  var displayNumber = Math.floor(Math.random() * (peopleList.length))
  var displayPerson = peopleList[displayNumber]
  displayPerson.classList.remove('hidden')
  var switching = false
  switchButton.onclick = function () {
    if (switching) return
    switching = true
    var oldPerson = displayPerson
    oldPerson.classList.remove('reveal--show')
    oldPerson.classList.add('ghost')
    var x = Math.floor(Math.random() * (peopleList.length - 1))
    if (x >= displayNumber) x++
    // now x belongs to [0, peopleList.length), and doesn't equal to the old displayNumber.
    displayNumber = x
    displayPerson = peopleList[x]
    displayPerson.classList.remove('reveal--show')
    displayPerson.classList.remove('hidden')
    setTimeout(function () { displayPerson.classList.add('reveal--show') }, 50)
    setTimeout(function () {
      oldPerson.classList.remove('ghost')
      oldPerson.classList.add('hidden')
      switching = false
    }, 250)
  }
})()
