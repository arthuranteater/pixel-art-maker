//console.log('hello')
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


document.addEventListener("DOMContentLoaded", function(event) {
  var button = document.querySelectorAll('button')
  var col = document.querySelectorAll('.col-xs-auto')
  var clear = document.querySelector('#clear')
  var picker = document.querySelector('.picker')
//  var draw = document.querySelector('#draw')
  for (let i = 0; i < button.length; i++) {
    button[i].style.backgroundColor = getRandomColor()
    button[i].style.color = button[i].style.backgroundColor
  }

  // draw.style.backgroundColor = 'white'
  // draw.style.color = 'black'

  clear.style.backgroundColor = 'white'
  clear.style.color = 'black'

  clear.addEventListener('click', function() {
    for (let i = 0; i < button.length; i++) {
    button[i].style.backgroundColor = 'white'
    button[i].style.color = 'white'
  }})


  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {
      button[i].style.backgroundColor = picker.value
      button[i].style.color = button[i].style.backgroundColor
//      draw.style.backgroundColor = 'white'
//      draw.style.color = 'black'
      clear.style.backgroundColor = 'white'
      clear.style.color = 'black'
    })
  }

});
