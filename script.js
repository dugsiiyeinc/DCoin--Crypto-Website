const humbergur = document.querySelector('.humburger');
const mobileMenu = document.querySelector('.mobile-menu');
const icons = document.querySelectorAll('i');
const tableBody = document.querySelector('#cryptoTable tbody');
const cryptoTable_2 = document.querySelector('#cryptoTable-2 tbody');
const priceFilter = document.querySelector('#price-filter');

humbergur.addEventListener("click", function (event){
    const isVisible = mobileMenu.getAttribute('data-visible');
    // Hiding 
    if (isVisible == "true") {
        mobileMenu.setAttribute('data-visible', "false");
        icons[0].setAttribute('data-visible', "true");
        icons[1].setAttribute('data-visible', "false");

        // visibility
    }else if (isVisible == "false"){
        mobileMenu.setAttribute('data-visible', "true");
        icons[0].setAttribute('data-visible', "false");
        icons[1].setAttribute('data-visible', "true");
    }
 })

 //  Crypto currenciesn section
async function fetchCryptoData(){
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
    const data = await response.json();
    allData = data;
    console.log(data);
    displayData(data);
    displayData_2(data)
    
    
}

function displayData(data){
    tableBody.innerHTML ='';
    data.forEach(coin =>{
        const row = document.createElement('tr');
        row.innerHTML = `
         <td>${coin.market_cap_rank}</td>
        <td>${coin.name}</td>
        <td>${coin.current_price}</td>
       

            `;
        tableBody.appendChild(row);
    });


    
}

// Crypto Price Tracker
function displayData_2(data){
    cryptoTable_2 .innerHTML ='';
    data.forEach(coin =>{
        const row = document.createElement('tr');
        row.innerHTML = `
         <td>${coin.market_cap_rank}</td>
        <td>${coin.name}</td>
        <td>${coin.current_price}</td>
        

            `;
            cryptoTable_2 .appendChild(row);
    });


    
}priceFilter.addEventListener('change', () => {
    let filterData;
    
    if (priceFilter.value === 'all') {
        filterData = allData;
    } else {
        filterData = allData.filter(coin => {
            const price = coin.current_price;
            if (priceFilter.value === 'below1') return price <= 1;
            if (priceFilter.value === 'below5') return price > 1 && price <= 5;
            if (priceFilter.value === 'below10') return price > 5 && price <= 10;
            if (priceFilter.value === 'below100') return price > 10 && price <= 100;
            if (priceFilter.value === 'below500') return price > 100 && price <= 500;
            if (priceFilter.value === 'below1000') return price > 500 && price <= 1000;
            if (priceFilter.value === 'above-1k') return price >1000;
            
        });
    }

    
    displayData_2(filterData);
});

fetchCryptoData()
