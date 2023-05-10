function getTime() {
    const address = document.getElementById('address').value;
    const url = `https://api.sunrise-sunset.org/json?formatted=0&date=today&address=${address}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const sunsetTime = new Date(data.results.sunset);
        const sunsetTimeString = sunsetTime.toLocaleTimeString();
        const sunriseTime = new Date(data.results.sunrise);
        const sunriseTimeString = sunriseTime.toLocaleTimeString();
        document.getElementById('sunset-time').textContent = `${sunsetTimeString}`;
        document.getElementById('sunset-time').textContent = `${sunriseTimeString}`;
        console.log('sunset', sunsetTimeString);
        console.log('sunrise', sunriseTimeString);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    
    
    hideElement();
    replaceElement();
    
}

function hideElement() {
    const hideSearchBar = document.getElementById('search_bar');
    hideSearchBar.style.display = 'none';
    console.log('hide');
  }
  

function replaceElement() {
    const title = document.querySelector('h1');
    const replaceTitle = 'Sunset (UTC)';
    title.textContent = replaceTitle;
    console.log('replace');
    return false;
  }
  

//document.addEventListener('DOMContentLoaded', async () => getSunsetTime()); // the async keyword means we can make API requests