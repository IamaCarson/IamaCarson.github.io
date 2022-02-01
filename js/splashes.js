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

//splash function
function splash() {
    document.getElementById('splash').innerText = splashList[Math.floor(Math.random()*splashList.length)];
}

window.onload = splash; //load splash