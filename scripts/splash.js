const splashList = [ '\"2!\"', 
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
  '\"Joe Biden\"',
  '\"Jackson says hi!\"',
  '\"One Train Ops\"',
  '\"I hardley knew her\"',
  '\"fof\"',
  '\"Sbeve\"',
  '\"fastcarman\"',
  '\"Tis\' but a scratch!\"',
  '\"moron template\"',
  '\"Live Evil\"',
  '\"The Jeoligon\"',
  '\"Ready Or Not\"',
  '\"My body is Regu!\"',
  '\"Skill Tissue\"',
  '\"Cool Story Bro\"',
  '\"PK FIRE!\"',
  '\"Filled With secrets!\"',
  '\"-_-\"',
  '\"WEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE\"',
  '\"chair\"',
  '\"ot enough memory\"',
  '\"???\"',
  '\"Minceraft\"',
  '\"Marco\"',
  '\"Polo\"',
  '\"Is This a Loss refrence?\"',
  '\"Life is Soup and I am fork\"',
  '\"he thought\"',
  '\"chicago craigslist\"',
  '\"Ohio will be eliminated\"',
  '\"hotcheeto\"',
  '\"How many of deez do i have?\"',
  '\"<3\"',
  '\"i own beans\"',
  '\"Meet Without Feet\"',
  '\"\u0D9E\"',
  '\"Lego Starwars\"',
  '\"Smile!\"',
  '\"What\'s a splash screen?\"',
  '\"Shout out to HeySora\"',
  '\"Grocery\"',
  '\"Jpeg\"',
  '\"8ball\"',
  '\"Flying Butter\"',
  '\"?\"',
  '\"Sussy\"',
  '\"Meat Without Feet\"',
  '\"Can I order a number 2 combo with a large sprite\"',
  '\"Not in color\"',
  '\"Why?\"',
  '\"A Crisis!\"',
  '\"1 Fish.\"',
  '\"Lazy Daisy\"',
  '\"What year is it?\"',
  '\"Dayum Daniel\"',
  '\"-_-\"',
  '\"How many of these do i have?\"',
  '\"Made With Insanity\"',
  '\"Help Im Stuck in the splash quote! AHHHHHHHH\"',
  '\"No Escape!\"',
  '\"sink\"',
  '\"sync\"',
  '\"arsons gadgets\"',
  '\"Pet The Cat\"',
  '\"Secrets!\"',
  '\"STEVE\"',
  '\"Maxx Force\"',
  '\"Cedar Point\"',
  '\"DDRILLINI\"',
  '\"RIP12\"',
  '\"Mods\"',
  '\"Minceraft\"',
  '\"Im tired of writing these splashes\"',
  '\"The Show must go on!\"',
  '\"Wordle\"',
  '\"100th Quote!\"'
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
    document.getElementById('hero-splash-id').classList.add("splashs")
}


  


