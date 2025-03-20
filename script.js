const humbergur = document.querySelector('.humburger');
const mobileMenu = document.querySelector('.mobile-menu');
const icons = document.querySelectorAll('i');
const tableBody = document.querySelector('#cryptoTable tbody');

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


