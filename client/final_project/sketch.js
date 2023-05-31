let colorValue;
let colorSlider;
let counter = 0; // Variable to count number of frames
let myColour; //Keep track of our random colour.

function setup() {
    createCanvas(2000, 1000);
    colorSlider = select("#slider");
    colorSlider.input(updateColorValue); //changes the bg color as moving the slider to each ends
   
    myColour = color(random(255), random(255), random(255)); //Set myColour to be a random colour
    
    frameRate(20);//If you want more control, set the framerate to a specific amount of frames per second
}

function draw() {
    
    noStroke();
    fill(myColour);

    //when the counter reaches 30,  
    if (counter > 19) {
        //switch the colour to a new random colour:
        myColour = color(random(255), random(255), random(255));
    
        //and reset the counter to zero:
        counter = 0;
      }
      //At the end of each frame increase the counter
      counter = counter + 1;

    circle(width/3.4,height/2,80);
    circle(width/3.4,height/3,80);
    circle(width/3,height/6,80);
    circle(width/2.4,height/16,80);
    

}

function updateColorValue() {
    colorValue = colorSlider.value();
    myColour = color(random(255), random(255), random(255));
    if (colorValue == colorSlider.elt.max) {
        background('#181200');
    }
    if (colorValue == colorSlider.elt.min) {
        background('#FFFAF2');
    }  
    if (colorValue != colorSlider.elt.min && colorValue != colorSlider.elt.max ){
        background(myColour);
    }

}

