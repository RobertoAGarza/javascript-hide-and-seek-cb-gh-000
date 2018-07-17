function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('app').querySelector('.target')
}

function increaseRankBy(n){
  var main = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for( let i =0; i < main.length; i++) {

      main[i].innerHTML= parseInt(main[i].innerHTML,10) + n
  }
}

function deepestChild(){
  var main = document.getElementById('app').querySelector('.grand-node').querySelectorAll('div')
  for( let i =0; i < main.length; i++) {
    if(main.innerHTML != "boo!")
      continue
    else {
      return main.innerHTML
    }
  }
}
