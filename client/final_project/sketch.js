// for red, green, and blue color values
let r, g, b;
let sliderValue = 0;

function setup() {
    createCanvas(2000, 1000);
    // slider has a range between 0 and 255 with a starting value of 127
    slider = createSlider(0, 255, 0);
    slider.position(width/2, height - height/4);
    slider.style('width', '540px');
    // Attach a callback function to the 'input' event of the slider
    slider.input(() => {
        // Update the value of sliderValue
        sliderValue = slider.value();
    });

    // Pick colors randomly
    r = random(255);
    g = random(255);
    b = random(255);

    
}

function draw() {
    // Set the hue according to the slider
    fill(slider.value(),r, g, b);
    noStroke();
    // fill('#FDAE46');
    circle(width/3.4,height/2,80);
    circle(width/3.4,height/3,80);
    circle(width/3,height/6,80);
    circle(width/2.4,height/16,80);
    
    // Display the current value of the slider
    textSize(20);
    text("Slider Value: " + sliderValue, 10, 70);

    // If the slider is at its maximum value
    if (sliderValue == slider.elt.max) {
        // Display a message on the web page
        textSize(30);
        text("Slider is at the end!", 10, 150);
    }
    
     
   
}

