let colorValue = '#FDAE46';
let colorSlider;


function setup() {
    createCanvas(2000, 1000);
    colorSlider = select("#slider");
    colorSlider.input(updateColorValue);

}

function draw() {
    noStroke();
    fill(colorValue,0,0);
    circle(width/3.4,height/2,80);
    circle(width/3.4,height/3,80);
    circle(width/3,height/6,80);
    circle(width/2.4,height/16,80);



}

function updateColorValue() {
    colorValue = colorSlider.value();
    if (colorValue == colorSlider.elt.max) {
        background('#181200');
    }
    if (colorValue == colorSlider.elt.min) {
        background('#FFFAF2');
    }
}


