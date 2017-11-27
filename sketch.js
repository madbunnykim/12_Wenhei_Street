let floorplan; 
let lake;
let bathtub; 
let house; 
let house2; 
let house3; 
let house4; 
let door; 
let enter; 
let elevator; 
let kitchen; 
let diningroom; 
let livingroom; 
let stair; 
let hallway; 
let bathroom; 
let balcony;
let balcony2;
let balcony3;
let balcony4;
let closet;  
let bedroom; 
let bedroom2; 
let housekeeper; 
let swimmingpool; 
let kindergarten; 
let backyard; 
let dinner; 
let fungsui; 
let accident;
let hide; 
let intruder; 
let jealous; 
let repeat; 
let moon; 
let secret; 
let speak; 
let stories; 
let sunset; 
let ours; 
let breathe;
let laugh; 
let down; 
let walk; 
let ghost; 
let bathe; 
let up; 
let underwater; 
let kettle; 
let iron; 
let flap; 

function preload() {
  floorplan = loadImage("assets/floorplan.png"); 
  enter = loadSound('assets/door.wav'); 
  dinner = loadSound('assets/dinner.WAV');
  fungsui = loadSound('assets/fungsui.WAV');
  accident = loadSound('assets/accident.wav');
  hide = loadSound('assets/hide.WAV');
  intruder = loadSound('assets/intruder.wav');
  jealous = loadSound('assets/jealous.WAV');
  repeat = loadSound('assets/repeat.wav');
  moon = loadSound('assets/moon.WAV');
  secret = loadSound('assets/secret.WAV');
  speak = loadSound('assets/speak.WAV');
  stories = loadSound('assets/stories.WAV');
  sunset = loadSound('assets/sunset.WAV');
  ours = loadSound('assets/ours.wav');
  breathe = loadSound('assets/breathe.wav'); 
  laugh = loadSound('assets/laugh.wav');
  down = loadSound('assets/down.wav'); 
  walk = loadSound('assets/walk.wav'); 
  ghost = loadSound('assets/ghost.wav'); 
  bathe = loadSound('assets/bathe.wav');
  up = loadSound('assets/up.wav');
  underwater = loadSound('assets/underwater.wav');
  kettle = loadSound('assets/kettle.wav');
  iron = loadSound('assets/iron.wav');
  flap = loadSound('assets/flap.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  imageMode(CENTER); 
  image(floorplan,windowWidth*0.5,windowHeight*0.5, windowWidth*0.35, windowHeight*0.85); 
  
  //lakeside
  lake = createButton('lake');
  lake.position(windowWidth*0.15, windowHeight*0.3);
  lake.mousePressed(playAccident);
  
  house = createButton('house'); 
  house.position(windowWidth*0.05, windowHeight*0.9); 
  house.mousePressed(playStories); 
  
  house2 = createButton('house'); 
  house2.position(windowWidth*0.1, windowHeight*0.9); 
  house2.mousePressed(playGhost);
  
  house3 = createButton('house'); 
  house3.position(windowWidth*0.15, windowHeight*0.9);
  house3.mousePressed(playOurs);
  
  house4 = createButton('house'); 
  house4.position(windowWidth*0.2, windowHeight*0.9); 
  house4.mousePressed(playIntruder);
  
  //poolside
  swimmingpool = createButton('swimming pool'); 
  swimmingpool.position(windowWidth*0.75, windowHeight*0.37); 
  swimmingpool.mousePressed(playUnderwater); 
  
  kindergarten = createButton('kindergarten'); 
  kindergarten.position(windowWidth*0.9, windowHeight*0.1); 
  kindergarten.mousePressed(playSpeak); 
  
  backyard = createButton('backyard'); 
  backyard.position(windowWidth*0.76, windowHeight*0.65); 
  backyard.mousePressed(playHide); 
  
  //entrance
  elevator = createButton('elevator'); 
  elevator.position(windowWidth*0.38, windowHeight*0.05); 
  elevator.mousePressed(playUp); 
  
  door = createButton('door'); 
  door.position(windowWidth*0.485, windowHeight*0.09); 
  door.mousePressed(playEnter); 
  
  //dining area
  kitchen = createButton('kitchen'); 
  kitchen.position(windowWidth*0.57, windowHeight*0.16); 
  kitchen.mousePressed(playKettle);
  
  diningroom = createButton('dining room'); 
  diningroom.position(windowWidth*0.56, windowHeight*0.32); 
  diningroom.mousePressed(playDinner); 
  
  balcony3 = createButton('balcony'); 
  balcony3.position(windowWidth*0.64, windowHeight*0.32);
  balcony3.mousePressed(playLaugh); 
  
  //living room
  livingroom = createButton('living room'); 
  livingroom.position(windowWidth*0.4, windowHeight*0.3);
  livingroom.mousePressed(playSunset); 
  
  balcony = createButton('balcony'); 
  balcony.position(windowWidth*0.33, windowHeight*0.29); 
  balcony.mousePressed(playMoon); 
  
  //transition
  stair = createButton('stair'); 
  stair.position(windowWidth*0.41, windowHeight*0.48); 
  stair.mousePressed(playDown);
  
  hallway = createButton('hallway'); 
  hallway.position(windowWidth*0.5, windowHeight*0.54); 
  hallway.mousePressed(playWalk); 
  
  bathroom = createButton('bathroom'); 
  bathroom.position(windowWidth*0.43, windowHeight*0.6);
  bathroom.mousePressed(playFungsui); 
  
  //housekeeper's room
  housekeeper = createButton('housekeepers room'); 
  housekeeper.position(windowWidth*0.56, windowHeight*0.47);  
  housekeeper.mousePressed(playIron);
  
  //Christine's bedroom
  bedroom2 = createButton('bedroom'); 
  bedroom2.position(windowWidth*0.57, windowHeight*0.61);
  bedroom2.mousePressed(playJealous); 
  
  balcony2 = createButton('balcony'); 
  balcony2.position(windowWidth*0.64, windowHeight*0.63);
  balcony2.mousePressed(playFlap);
  
  //masters bedroom
  bedroom = createButton('bedroom'); 
  bedroom.position(windowWidth*0.42, windowHeight*0.8); 
  bedroom.mousePressed(playSecret); 
  
  tub = createButton('bathtub'); 
  tub.position(windowWidth*0.58, windowHeight*0.87); 
  tub.mousePressed(playBathe);
  
  closet = createButton('closet'); 
  closet.position(windowWidth*0.38, windowHeight*0.6); 
  closet.mousePressed(playBreathe); 
  
  balcony4 = createButton('balcony'); 
  balcony4.position(windowWidth*0.332, windowHeight*0.8);
  balcony4.mousePressed(playRepeat);
}

function playEnter(){
  if ( enter.isPlaying() ) { 
    enter.stop();
  } else {
    enter.play();
  }   
}

function playDinner(){
    if ( dinner.isPlaying() ) { 
    dinner.stop();
  } else {
    dinner.play();
  }  
}

function playFungsui(){
    if ( fungsui.isPlaying() ) { 
    fungsui.stop();
  } else {
    fungsui.play();
  }
}

function playAccident(){
    if ( accident.isPlaying() ) { 
    accident.stop();
  } else {
    accident.play();
  }
}

function playHide(){
    if ( hide.isPlaying() ) { 
    hide.stop();
  } else {
    hide.play();
  }
}

function playIntruder(){
    if ( intruder.isPlaying() ) { 
    intruder.stop();
  } else {
    intruder.play();
  }
}

function playJealous(){
    if ( jealous.isPlaying() ) { 
    jealous.stop();
  } else {
    jealous.play();
  }
}

function playRepeat(){
    if ( repeat.isPlaying() ) { 
    repeat.stop();
  } else {
    repeat.play();
  }
}

function playMoon(){
    if ( moon.isPlaying() ) { 
    moon.stop();
  } else {
    moon.play();
  }
}

function playSecret(){
    if ( secret.isPlaying() ) { 
    secret.stop();
  } else {
    secret.play();
  }
}

function playSpeak(){
    if ( speak.isPlaying() ) { 
    speak.stop();
  } else {
    speak.play();
  }
}

function playStories(){
    if ( stories.isPlaying() ) { 
    stories.stop();
  } else {
    stories.play();
  }
}

function playSunset(){
    if ( sunset.isPlaying() ) { 
    sunset.stop();
  } else {
    sunset.play();
  }
}

function playOurs(){
    if ( ours.isPlaying() ) { 
    ours.stop();
  } else {
    ours.play();
  }
}

function playBreathe(){
  if ( breathe.isPlaying() ) { 
    breathe.stop();
  } else {
    breathe.play();
  }   
}

function playLaugh(){
  if ( laugh.isPlaying() ) { 
    laugh.stop();
  } else {
    laugh.play();
  }  
}

function playDown(){
  if ( down.isPlaying() ) { 
    down.stop();
  } else {
    down.play();
  }  
}

function playWalk(){
  if ( walk.isPlaying() ) { 
    walk.stop();
  } else {
    walk.play();
  }  
}

function playGhost(){
    if ( ghost.isPlaying() ) { 
    ghost.stop();
  } else {
    ghost.play();
  }
}

function playBathe(){
  if ( bathe.isPlaying() ) { 
    bathe.stop();
  } else {
    bathe.play();
  }  
}

function playUp(){
    if ( up.isPlaying() ) { 
    up.stop();
  } else {
    up.play();
  }
}

function playUnderwater(){
    if ( underwater.isPlaying() ) { 
    underwater.stop();
  } else {
    underwater.play();
  }
}

function playKettle(){
    if ( kettle.isPlaying() ) { 
    kettle.stop();
  } else {
    kettle.play();
  }
}

function playIron(){
    if ( iron.isPlaying() ) { 
    iron.stop();
  } else {
    iron.play();
  }
}

function playFlap(){
    if ( flap.isPlaying() ) { 
    flap.stop();
  } else {
    flap.play();
  }
}
