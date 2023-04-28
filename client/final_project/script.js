async function mainEvent() {
    const loadDataButton = document.querySelector('#load_data');
    loadDataButton.addEventListener('click', async (event) => {
        console.log('loading data');
        const results = await fetch('https://api.sunrisesunset.io/json?lat=38.907192&lng=-77.036873&timezone=UTC&date=today');
    });
    loadDataButton();
}
