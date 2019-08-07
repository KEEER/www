function swap(arr, index1, index2) {
    arr[index1] = arr.splice(index2, 1, arr[index1])[0];
    return arr;
}


;(function() {
    var $ = function(sel) {return document.querySelector(sel)}
    var $$ = function(sel) {return document.querySelectorAll(sel)}
    switchButton = $('#switchPerson')
    peopleList = $$('[people]')
    for (var i = 0; i < peopleList.length; i++) {
        peopleList[i].style.display = "none";   
    }
    var x = Math.floor(Math.random()*(peopleList.length));
    var displayPerson = peopleList[x];

    displayPerson.style.display = "inline";    

    switchButton.onclick = function buttonOnclick(){

        displayPerson.style.display = "none";

        var x = Math.floor(Math.random()*(peopleList.length));

        displayPerson = peopleList[x];

        displayPerson.style.display = "inline";

    }
    
  })()