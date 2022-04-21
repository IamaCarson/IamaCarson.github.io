function randomPage(){
  pages = [
  'index.html',
  'school/ecology/energy brochure/index.html',
  'pages/projects/index.html', 
  'pages/notitg/index.html',
  'pages/projects/index.html',
  'pages/projects/gadgets/index.html',
  'pages/projects/gadgets/coinflip/coinflip.html',
  'pages/projects/graphics/index.html',
  'pages/projects/modcharts/index.html',
  'pages/projects/rollercoasters/index.html', 
  'dev/noel/noel.html', 
  'pages/projects/rollercoasters/rankings.html', 
  'pages/what/index.html'
]
  window.location.href = pages[Math.floor(Math.random()*pages.length)];
}
 r6 = -1
function randomGadget(){
  gadgets = [
    'pages/projects/gadgets/index.html#mcideagen',
    'pages/projects/gadgets/index.html#drawideagen',
    'pages/projects/gadgets/coinflip/coinflip.html',
    'pages/projects/graphics/index.html#fireworksProj',
    'pages/projects/graphics/index.html#matrixProj',
    'pages/projects/graphics/index.html#rainProj',
    'pages/projects/graphics/index.html#stars1Proj',
    'pages/projects/graphics/index.html#wavesProj',
    'pages/projects/graphics/index.html#everProj',
    'pages/projects/graphics/index.html#tornadoProj',
    'pages/projects/graphics/index.html#eyeProj',
    'pages/projects/graphics/index.html#valProj',
    'pages/projects/graphics/index.html#pulleyProj',
    'pages/projects/graphics/index.html#asterProj',
    'pages/projects/graphics/index.html#voidProj',
    'pages/projects/graphics/index.html#pictureProj',
    'pages/projects/graphics/index.html#webstarsProj',
    'pages/projects/graphics/index.html#paintstarsProj',
    'pages/projects/graphics/index.html#sortProj',
    'pages/projects/graphics/index.html#dabProj',
    'pages/projects/graphics/index.html#hypnoProj',
    'pages/projects/graphics/index.html#clockProj',
    'pages/projects/graphics/index.html#chal3Proj',
    'pages/projects/graphics/index.html#chal4Proj',
    'pages/projects/modcharts/index.html#memoryProj',
    'pages/projects/modcharts/index.html#gametightProj',
  ]
  r6 *= -1; //change visibility state
  if(r6== 1){
    document.getElementById('random').classList.add("random") //remove hiding anim class
    r6 *= -1
  } 
  setTimeout(() => { window.location.href = gadgets[Math.floor(Math.random()*gadgets.length)] }, 1000);
}
