function getFirstSelector(selector){
  var element = document.querySelector(selector)
  return element
}

function nestedTarget(){
  const main = document.getElementById('app').querySelector('.target').innerHTML

  return main
}
