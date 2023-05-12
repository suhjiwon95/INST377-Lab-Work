async function mainEvent() {
    const submitButton = document.getElementById('submit');
    const slider = document.getElementById("slider");
    const existingText = document.getElementById("time");
    const showSlider = document.querySelector(".hidden");

    // Use Geolocation API to get the current location's latitude and longitude
    submitButton.addEventListener("click", () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            console.log(lat);
            console.log(long);
            const sunriseSunsetUrl = `https://api.sunrise-sunset.org/json?formatted=0&lat=${lat}&lng=${long}&date=today`;
            console.log("fetching sunrise sunset API")
            
            fetch(sunriseSunsetUrl)
                .then(response => response.json())
                .then(data => {
                    const { sunrise, sunset } = data.results;
                    console.log(`Sunrise: ${sunrise}, Sunset: ${sunset}`);
                    const sunsetTime = new Date(data.results.sunset).toLocaleTimeString(); 
                    const sunriseTime = new Date(data.results.sunrise).toLocaleTimeString(); 
                    hideElement();
                    replaceElement();
                    const currentTime = document.getElementById('time').textContent = `${sunsetTime}`;
                    
                    // enable the hidden 
                    showSlider.style.display = 'block';
                    
                    slider.addEventListener("input", event => {
                        const value = event.target.value;
                        // when users move the slider to the left end, displats sunrise time
                        if (value == slider.min) {
                            replaceSunset();
                            text = document.getElementById('time').textContent = `${sunriseTime}`;
                            existingText.html(text);
                        }
                        // when users move the slider to the right end, displays sunset time
                        if (value == slider.max) {
                            replaceElement();
                            text = document.getElementById('time').textContent = `${sunsetTime}`;
                            existingText.html(text);
                        }
                      });
                    
                })
                .catch(error => console.error(error));
            
           
        });

    })
    

  
}
function hideElement() {
    const hideSearchBar = document.getElementById('submit');
    hideSearchBar.style.display = 'none';
    
}
  

function replaceElement() {
    const title = document.querySelector('h1');
    const replaceTitle = 'Sunset';
    title.textContent = replaceTitle;
}

function replaceSunset() {
const title = document.querySelector('h1');
const replaceTitle = 'Sunrise';
title.textContent = replaceTitle;
}



 
// function getTime() {
//     const address = document.getElementById('address').value;
//     const url = `https://api.sunrise-sunset.org/json?formatted=0&date=today&address=${address}`;

//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         const sunsetTime = new Date(data.results.sunset);
//         const sunsetTimeString = sunsetTime.toLocaleTimeString();
//         const sunriseTime = new Date(data.results.sunrise);
//         const sunriseTimeString = sunriseTime.toLocaleTimeString();
//         document.getElementById('sunset-time').textContent = `${sunsetTimeString}`;
//         document.getElementById('sunset-time').textContent = `${sunriseTimeString}`;
//         console.log('sunset', sunsetTimeString);
//         console.log('sunrise', sunriseTimeString);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
    
    
//     hideElement();
//     replaceElement();
 
// }





document.addEventListener('DOMContentLoaded', async () => mainEvent());