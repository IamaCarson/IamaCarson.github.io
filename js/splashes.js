//splashes
const splashList = [
'\"2!\"', 
'\"Oh boy!\"', 
'\"American Cheese\"', 
'\"Also try yugoslavia.best!\"', 
'\"I <3 Videogames!\"', 
'\"Barson\"', 
'\"amogos\"', 
'\"Arson\"', 
'\"beangs\"', 
'\"fecal funnies\"', 
'\"wed!\"', 
'\"420!\"', 
'\"cardbox was here :)\"', 
'\"9 + 10\"', 
'\"HueHueHueHue\"', 
'\"Made in Hell!\"', 
'\"1/2 Made on chromebook!\"', 
'\"deathjg\"', 
'\"I really love SHAME...\"', 
'\"chicago.mp4\"', 
'\"UKSRT!\"', 
'\"Play NotITG!\"',
'\"no daddy putin dont start a world war uwu - yasmeen\"',
'\"0/0\"',
'\"Joe Biden\"'
];
  
const isToday = (someDate) => {
    const today = new Date()
    return someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth()
  }

  //splash function
function splash() {
    if(isToday(new Date(0,2,29))){
      document.getElementById('hero-splash-id').innerText = "Happy Birthday Taronuke!";
    } else {
    document.getElementById('hero-splash-id').innerText = splashList[Math.floor(Math.random()*splashList.length)];
    }
}


window.onload = splash; //load splash