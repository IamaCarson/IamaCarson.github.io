function heart() {
    var img = document.createElement('img');
    img.src = 
'dev/heart.png';
    img.classList.add('buddyheart')
document.getElementById('header1').appendChild(img);

} 
function fart(){
    var audio = new Audio('dev/fart.mp3');
    audio.play();
  }
function point(){
    if (parseInt(localStorage.getItem('counter'))){
    c = localStorage.getItem('counter')
    c = parseInt(c) + 1
    localStorage.setItem('counter', c)
    document.getElementById('counter').innerText = "Pet Counter: " + c
    } else {
        localStorage.setItem('counter', 1)
    }
    heart()
    if(Math.floor(Math.random()*3000) == 1) {
        fart()
      }
    }
//window.onload = function(){localStorage.removeItem('counter')};