
//flags
var oFlag = 1;
var rFlag = 0;
var mFlag = 0;
var gFlag = 0;
var mfFlag = 0;
var wFlag = 0;
var sFlag = 0;



//medalFill varialbles
var medal;
var medalX = 3;
var medalY = 10;

//wave vars
let yoff = 0.0; 
var filler = 800;


//runner vars

var usha;


   
   
function setup() {
   createCanvas(700,480);
   medal = loadImage("medal.png");
   
       usha = createImg("usha.gif");
      
       
       
   }


//medalFlood Variables
var drawI = 0;
var floodI = 0;


draw =function() {
   noStroke();
   usha.position(-300,150);
   
   
      
   background(100,0,0);
   
//   rect(0,0,100,100);
   
   if(rFlag){
   background(64);
   }
   
   if (oFlag) {
      o(width/2, height/2, ww, hh, 2, 2);
      }
   
   if(rFlag) {
   release();
   }
   
   
   if(mFlag) {
       for( var medalNo = 0; medalNo < 10; medalNo++){
   medalFill(medalX, medalY);
       }
   
       
   }
   
   if (gFlag){
      goldenGirl();
      }
   
   if(mfFlag) {
      
      for(floodI = 0; floodI < drawI; floodI++) {
      medalFlood();
      
      }
   
      if (drawI < 800)
         drawI = drawI+20;
      if(drawI > 460)
         wFlag = 1;
   }
   
  
   if (wFlag) {
      
      wave();
      }
   
   
   if (sFlag){
      background(200);
      
      runner();
      header();      
      }
   
   
   
   
    
    
    
       
      
   

   
   }
   
   
   
   
   
   
//starting width and height of opening circ
var ww = 10;
var hh = 10;



function o(x,y,w,h,wSpeed,hSpeed) {
   
   if ( ww == 1000 && hh==1000){
      rFlag = 1;
//      oFlag = 0;
      }
   if (!rFlag){
      fill(250,250,0);
      ellipse(x,y,w,h);
      if (ww < 1000 )
         ww += wSpeed;
      if (hh < 1000 )
         hh += hSpeed;
         }
//   else 
//      rFlag = 0;
      
   }
   
   
//starting coordinates of lft release rect
var leftX = 0;
var leftY = 0;
//starting cordinates of rt release rect
var rightX = 350;
var rightY = 0;

function release() {
   fill(250,250,0)
   //left
   rect(leftX, leftY, width/2, height);
   //right
   rect(rightX, rightY, width/2, height);
   if(leftX > -width/2 + 1)
      leftX -= 2;
   if(rightX < width +1)
      rightX += 2;
   if( (leftX < -width/2 + 1) && rightX > width+1) {
      mFlag = 1;
      }
   }


//timer
var medalI = 0;

function medalFill(medalX, medalY){
     
     medalX = random(0, width);
     medalY = random(0, height);
     image(medal,medalX,medalY,medal.width/15,medal.height/15);
     fr = 3 ;
     frameRate(fr);
     
     if( medalI < 100){
      medalI++;
      }
      
     if (medalI == 100){
      gFlag = 1;
      }
  
  }
  
  
  //timer
  var goldenI = 0;
  
function goldenGirl(){
       
   if (goldenI<5 || goldenI == 6 || goldenI>7){
   
      strokeWeight(0);
      textSize(70);
      text('THE GOLDEN', 150, 200);
      text('G I R L', 270, 300);
      }
   
   if (goldenI < 10){
      goldenI ++
      }
   if (goldenI == 10){
      mfFlag = 1;
      }
   }
   
   
 
   
function medalFlood() {

   xPos = random(0, width);
   yPos = random(0, height);
   
   
   
      image(medal, random(0,width), random(0,height), medal.width/15, medal.height/15);
      
   frameRate(fr);
   
//   if (drawI = 1000){
//      wFlag = 1;
//      }
         
   }
   
   
   
function wave(){
   
   fr = 200;
   frameRate(fr);
   fill(200);
  
  beginShape();

  let xoff = 0.0; 
  for (let x = 0; x <= width; x += 20) {
    
    let y = map(noise(xoff, yoff), 0, 1, filler, 300);

    
    vertex(x, y);
    
    xoff += 0.05;
  }
  
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  if(filler>-500){
     filler = filler-15;
     }
  
  if (filler == -505){
     oFlag = 0;
     rFlag = 0;
     mFlag = 0;
     gFlag = 0;
     mfFlag = 0;
     wFlag = 0;
     
     sFlag = 1;
     }
   }
   
   
//usha vars
var ushaStart = -200;
var ushaEnd = 150;


//header vars
var headerStart = 700;
var headerEnd = -11000;


function runner(){
   usha.position(ushaStart,150);
   
   
   if (ushaStart < ushaEnd)
      ushaStart++;
  }
   
   


function header(){
   fill(0);
   textSize(60);
   text('ONE-THOUSAND-PLUS AWARDS          101 INTERNATIONAL MEDALS            PADMASHREE AWARDEE            THE YOUNGEST SPRINTER EVER TO ENTER 1980 OLYMPICS AT THE AGE OF 16            TRACK RECORDS STILL UNBEATEN BY ANY ASIAN MAN OR WOMAN            PRODUCED TWO-OLYMPIANS AND EIGHT-INTERNATIONAL-ATHELETES AFTER RETIREMENT            THE PAYYOLI EXPRESS OF INDIA...                         P.T USHA!!',headerStart,100);
   if(headerStart > headerEnd)
      headerStart = headerStart-3;
   
   }