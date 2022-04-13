let hide = -1; //state of visibility of cee

function fall() { //trigger opacity animation
  hide *= -1; //change visibility state
  if(hide == 1){
    document.getElementById('cee').classList.remove("fadeShow") //remove showing anim class
    document.getElementById('cee').classList.add("fade") //add hiding anim class
  } else {
    document.getElementById('cee').classList.remove("fade") //remove hiding anim class
    document.getElementById('cee').classList.add("fadeShow") //add showing anim class
  }

}

let r = -1; //state of visibility of cee

function remember() { //trigger opacity animation
  r *= -1; //change visibility state
  if(r == 1){
    document.getElementById('arrow').classList.add("remember") //remove hiding anim class
  } else {
    document.getElementById('arrow').classList.remove("remember") //remove hiding anim class
  }

}

let r2 = -1; //state of visibility of cee

function remember2() { //trigger opacity animation
  r2 *= -1; //change visibility state
  if(r2 == 1){
    document.getElementById('arrow2').classList.add("remember2") //remove hiding anim class
  } else {
    document.getElementById('arrow2').classList.remove("remember2") //remove hiding anim class
  }

}

function submitPass(){
  if(document.getElementById('pass').value == "beans"){
    document.getElementById('passText').innerText = "aaa";
  } else if(document.getElementById('pass').value == "???"){
    document.getElementById('passText').innerText = "!!!";
  } else if(document.getElementById('pass').value == "!!!"){
    document.getElementById('passText').innerText = "---";
  } else if(document.getElementById('pass').value == "---"){
    document.getElementById('passText').innerText = "+++";
  } else if(document.getElementById('pass').value == "+++"){
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
}
let r3 = -1;
function launch(){
  
  r3 *= -1; //change visibility state
  if(r3== 1){
    document.getElementById('launch').classList.add("launch") //remove hiding anim class
  } else {
    document.getElementById('launch').classList.remove("launch") //remove hiding anim class
  }
}

let r4 = -1;
function matrix(){
  
  r4 *= -1; //change visibility state
  if(r4 == 1){
    document.getElementById('matrix1').classList.add("matrixOn")
    document.getElementById('matrix2').classList.add("matrixOn")
    document.getElementById('matrix1').classList.remove("matrixOff")
    document.getElementById('matrix2').classList.remove("matrixOff")
    
  } else {
    document.getElementById('matrix1').classList.add("matrixOff")
    document.getElementById('matrix2').classList.add("matrixOff")
    document.getElementById('matrix1').classList.remove("matrixOn")
    document.getElementById('matrix2').classList.remove("matrixOn")
  }
}

let r5 = -1
function rain() {
  r5 *= -1; //change visibility state
  if(r5 == 1){
    document.getElementById('rain1').classList.add("rainOn")
    document.getElementById('rain2').classList.add("rainOn")
    document.getElementById('rain1').classList.remove("rainOff")
    document.getElementById('rain2').classList.remove("rainOff")
    
  } else {
    document.getElementById('rain1').classList.add("rainOff")
    document.getElementById('rain2').classList.add("rainOff")
    document.getElementById('rain1').classList.remove("rainOn")
    document.getElementById('rain2').classList.remove("rainOn")
  }
}
function bruh(){
  var audio = new Audio('dev/bruh.mp3');
  audio.play();
}
function a() {

  if(Math.floor(Math.random()*1500) == 1) {
    bruh()
  }
  setTimeout(() => {a()}, Math.floor(Math.random()*20000));
}

window.onload = a; //load splash