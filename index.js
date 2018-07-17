function getFirstSelector(selector){
  var element = document.querySelector(selector)
  return element
}

function nestedTarget(){
  const main = document.getElementById('app')
  const nested = main.getElementById('#')
  const target = nested.target
  return target
}
