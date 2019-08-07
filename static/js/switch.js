function swapInPlaceWithoutMemo(list, iA, iB){
    list[iB] = list[iA] + (list[iA] = list[iB]) - list[iB];
    return list;
  }

;(function() {
    var $ = function(sel) {return document.querySelector(sel)}
    var $$ = function(sel) {return document.querySelectorAll(sel)}
    switchButton = $('#switchPerson')
    peopleList = $$('[people]')
    for (var i = 0; i < peopleList.length; i++) {
        var x = Math.trunc(Math.random() * (peopleList.length));
        peopleList[i].hidden = true;
        [peopleList[i], peopleList[x]] = [peopleList[x], peopleList[i]];    
    }
    console.log(peopleList[0].innerText);
    peopleList[0].hidden = false;

    switchButton.onclick = function buttonOnclick(){
        peopleList[0].hidden = true;
        var x = Math.floor(Math.random()*(peopleList.length));
        
        peopleList = swapInPlaceWithoutMemo(peopleList, 0, x);

        for(let i of peopleList){
         console.log(i.innerText+'****==****');
        }

        peopleList[0].hidden = false;
        console.log(peopleList[0].innerText);
    }
    
  })()