function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('app').querySelector('.target')
}

function increaseRankBy(n){
  var main = document.getElementById('app').querySelector('.ranked-list li').innerHTML
  for( let i =0; i < main.length; i++) {

      main[i]= n
  }
}
