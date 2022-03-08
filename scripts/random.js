function randomPage(){
  pages = ['index.html','pages/projects/index.html', 'pages/projects/rollercoasters/index.html', 'dev/noel/noel.html', 'pages/projects/gadgets/coinflip/coinflip.html', 'pages/projects/graphics/index.html', 'pages/projects/rollerocoasters/rankings.html', 'pages/what/index.html']
  window.location.href = pages[Math.floor(Math.random()*pages.length)];
}