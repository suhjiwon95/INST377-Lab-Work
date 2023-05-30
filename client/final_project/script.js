const address = document.getElementById('address');
const submit = document.getElementById('submit');
const slider = document.getElementById('slider');

async function loadData() {
    const strAdd = address.value;
    const formattedAdd = strAdd.replaceAll(' ', '+');
    
    //get location
    const nominatimUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${formattedAdd}`
    const response = await fetch(nominatimUrl);
    const data = await response.json();
    const lat = data[0].lat;
    const lon = data[0].lon;
    
    //get sunrise and sunset time 
    const sunriseSunsetUrl = `https://api.sunrise-sunset.org/json?formatted=0&lat=${lat}&lng=${lon}&date=today`;
    const sunriseResponse = await fetch(sunriseSunsetUrl);
    const sunriseData = await sunriseResponse.json();
    const sunset = new Date(sunriseData.results.sunset).toLocaleTimeString(); 
    const sunrise = new Date(sunriseData.results.sunrise).toLocaleTimeString(); 
    
    //hide form elements
    hideForm();

    //replace the title to "Sunrise"
    replaceToSunrise();

    //display the sunrise time
    document.getElementById('time').textContent = `${sunrise}`;

    //enable the slider
    slider.style.display = 'block';

    slider.addEventListener('input', (e) => {
        const sliderValue = e.target.value;
        if (sliderValue === slider.min) {
            replaceToSunrise();
            document.getElementById('time').textContent = `${sunrise}`;
        } 
        if (sliderValue === slider.max) {
            replaceToSunset();
            document.getElementById('time').textContent = `${sunset}`;
        } 
       
    })
    
}

function hideForm() {
    const hideSearchBar = document.querySelector('form');
    hideSearchBar.style.display = 'none';
    
}

function replaceToSunset() {
    const title = document.querySelector('h1');
    const replaceTitle = 'Sunset';
    title.textContent = replaceTitle;
}

function replaceToSunrise() {
const title = document.querySelector('h1');
const replaceTitle = 'Sunrise';
title.textContent = replaceTitle;
}

async function mainEvent() {
   submit.addEventListener('click', async () => loadData());
   

}

document.addEventListener('DOMContentLoaded', async () => mainEvent());