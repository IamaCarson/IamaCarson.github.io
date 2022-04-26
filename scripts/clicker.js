const hearts = ['dev/hearts/heart.png',
'dev/hearts/heart1.png',
'dev/hearts/heart2.png',
'dev/hearts/heart3.png',
'dev/hearts/heart4.png',
'dev/hearts/heart5.png',
'dev/hearts/heart6.png',
'dev/hearts/heart7.png',
'dev/hearts/heart8.png',
'dev/hearts/heart9.png',
'dev/hearts/heart10.png']

function heart() {
    var img = document.createElement('img');
    img.src = hearts[Math.floor(Math.random()*hearts.length)];
    img.classList.add('buddyheart')
    img.style.transform = `translate(${Math.random()*250-250/2}%, ${Math.random()*300-300/2}%)`
    img.style.pointerEvents = 'none'
    var img2 = document.getElementById('header1').appendChild(img);
    
    setTimeout(() => {img2.remove();}, 1000);

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