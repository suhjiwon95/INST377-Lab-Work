// utility function: Math.random()
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  
  function injectHTML(list) {
    /*
  
    ## JS and HTML Injection
      There are a bunch of methods to inject text or HTML into a document using JS
      Mainly, they're considered "unsafe" because they can spoof a page pretty easily
      But they're useful for starting to understand how websites work
      the usual ones are element.innerText and element.innerHTML
      Here's an article on the differences if you want to know more:
      https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innertext
  
    ## What to do in this function
      - Accept a list of restaurant objects
      - using a .forEach method, inject a list element into your index.html for every element in the list
      - Display the name of that restaurant and what category of food it is
  */
    console.log('fired injectHTML');  
    const target = document.querySelector('#restaurant_list');
    target.innerHTML = ''; //wipe out "A list of local restaurant from an API" from the box when the restaurant list is called
    list.forEach((item) => {
      const str = `<li>${item.name}</li>`;
      target.innerHTML += str;
    });
  }
  
  function filterList(list, query) {
    return list.filter((item) => {
      const lowerCaseName = item.name.toLowerCase(); //PIZZA -> pizza
      const lowerCaseQuery = query.toLowerCase(); //Pizza -> pizza
      return lowerCaseName.includes(lowerCaseQuery);
    })
  }
  
  function cutRestaurantList(list) {
    console.log('fired cut list');
    const range = [...Array(15).keys()]; //[] - array, ...Array = makes a new array of this existing array. In this case, the array has 15 elements
    return newArray = range.map((item) => {
      const index = getRandomIntInclusive(0, list.length - 1);
      return list[index];
    }) //map returns a new array of elements given without mutating the existing data
  }
<<<<<<< HEAD

  function initMap() {
    const carto = L.map('map').setView([38.98, -76.93], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(carto);
    return carto; //returns the reference to hook up with the restaurant lists
  }
  
  function markerPlace(array, map) {
    console.log('array for markers', array);

    // Leaflet can be a bit old-fashioned.
    // Here's some code to remove map markers.
    map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
        layer.remove();
        }
    });

    array.forEach((item) => {
        console.log('marker place', item);

        const {coordinates} = item.geocoded_column_1;
        L.marker([coordinates[1], coordinates[0]]).addTo(map);
    })
  }

=======
  
>>>>>>> d72068388d951d9b9420525fa6d5bd1f9b100fd4
  async function mainEvent() { // the async keyword means we can make API requests
    const mainForm = document.querySelector('.main_form'); // This class name needs to be set on your form before you can listen for an event on it
    const filterButton = document.querySelector('#filter_button');
    const loadDataButton = document.querySelector('#load_data');
<<<<<<< HEAD
    const clearDataButton = document.querySelector('#clear_data');
=======
>>>>>>> d72068388d951d9b9420525fa6d5bd1f9b100fd4
    const generateListButton = document.querySelector('#generate_list');
    const textField = document.querySelector('#resto');

    
    const loadAnimation = document.querySelector('#data_load_animation');
    loadAnimation.style.display = 'none';
    
    let storedList = []; //stored data on a browser
    let currentList = []; 
    
    //listening for a 'submit' event
    loadDataButton.addEventListener('click', async (submitEvent) => { 
      console.log('loading data');
      loadAnimation.style.display = 'inline-block';
  
      const results = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
  
      // This changes the response from the GET into data we can use - an "object"
      storedList = await results.json();
      if(storedList.length > 0) {
            generateListButton.classList.remove('hidden');
        }
  
      loadAnimation.style.display = 'none';
      console.table(storedList); //generate a stored list from the current list without overwriting it
     
    });
  
<<<<<<< HEAD
    const carto = initMap();

=======
>>>>>>> d72068388d951d9b9420525fa6d5bd1f9b100fd4
    filterButton.addEventListener('click', (event) => {
      console.log('clicked FilterButton');
  
         // this is the preferred way to handle form data in JS in 2022
         const formData = new FormData(mainForm); // get the data from the listener target
         const formProps = Object.fromEntries(formData); // Turn it into an object
     
         // You can also access all forms in a document by using the document.forms collection
         // But this will retrieve ALL forms, not just the one that "heard" a submit event - less good
     
        console.log(formProps);
        const newList = filterList(currentList, formProps.resto);
        injectHTML(newList);
        console.log(newList);
  
    })
  
    generateListButton.addEventListener('click', (event) => {
      console.log('generate new list');
      currentList = cutRestaurantList(storedList);
      console.log(currentList);
      injectHTML(currentList);
<<<<<<< HEAD
      markerPlace(currentList, carto);
=======
>>>>>>> d72068388d951d9b9420525fa6d5bd1f9b100fd4
    });

    textField.addEventListener('input', (event)=> {
        console.log('input', event.target.value);
        const newList = filterList(currentList, event.target.value);
        console.log(newList);
        injectHTML(newList);
<<<<<<< HEAD
        markerPlace(newList, carto);
    })

    clearDataButton.addEventListener("click", (event) => {
        console.log('clear browser log');
        localStorage.clear();
        console.log('local storage check', localStorage.getItem("storedData"));
=======
>>>>>>> d72068388d951d9b9420525fa6d5bd1f9b100fd4
    })
  }
  
  
  
  /*
    This last line actually runs first!
    It's calling the 'mainEvent' function at line 57
    It runs first because the listener is set to when your HTML content has loaded
  */
  document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
  