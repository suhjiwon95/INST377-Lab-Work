async function getData() {
    //get the lat and lng of current location
    const lat = 39.11275;
    const lng = -77.21288;
    const timezone = "EDT";
    const url=`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&timezone=${timezone}&date=today`; //https://sunrisesunset.io/api/
    const response = await fetch(url);
    const data = await response.json();

    console.log("data", data); //print data on console

    //get sunset data and display on screen
    const sunset = data.results.sunset;
    document.getElementById("sunset").innerHTML = sunset;
    console.log("sunset", sunset);

    //get sunrise data and display on screen
    const sunrise = data.results.sunrise;
    document.getElementById("sunrise").innerHTML = sunrise;
    console.log("sunrise", sunrise);

}



function clickButton() {
    //when click a button, call getData()
    const button = document.querySelector('.button');
    button.addEventListener('click', (event) => {
        console.log('clicked a button');
        getData();

    })
}

clickButton();


//getCurrentDate() : https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/

//getting a current latitude and longitude. 
//Source: https://developer.mozilla.org/en-US/docs/Web/API/GeolocationCoordinates/longitude
function getLocation() {
    let button = document.getElementById("get-location");
    let latText = document.getElementById("latitude");
    let longText = document.getElementById("longitude");

    button.addEventListener("click", () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;

            latText.innerText = lat.toFixed(2);
            longText.innerText = long.toFixed(2);
        });
    });
}

getLocation();