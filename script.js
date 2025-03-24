const humbergur = document.querySelector('.humburger');
const mobileMenu = document.querySelector('.mobile-menu');
const icons = document.querySelectorAll('i');
const cryptoTable_2 = document.querySelector('#cryptoTable-2 tbody');
const priceFilter = document.querySelector('#price-filter');
const accordion = document.querySelector('.accordion')

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

 
async function fetchCryptoData(){
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
    const data = await response.json();
    allData = data;
    console.log(data);
    displayData_2(data)
    
    
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


    
}
priceFilter.addEventListener('change', () => {
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


// FAQs Section

const faqs = [
    {
      question: "What is cryptocurrency?",
      answer:
        "Cryptocurrency is a digital or virtual currency that uses cryptography for security. It operates on decentralized networks, typically based on blockchain technology.",
    },
    {
      question: "How does cryptocurrency work?",
      answer:
        "Cryptocurrencies use a distributed ledger called blockchain to record transactions. Transactions are verified by network participants using cryptographic techniques, ensuring security and transparency.",
    },
    {
      question: "What is blockchain?",
      answer:
        "Blockchain is a decentralized and immutable ledger that records transactions across multiple computers. It ensures security, transparency, and prevents tampering",
    },
    {
      question: "What is Bitcoin?",
      answer:
        "Bitcoin is the first and most well-known cryptocurrency, created in 2009 by an anonymous person or group known as Satoshi Nakamoto. It operates on a decentralized network without a central authority.",
    },
    {
        question: "What are altcoins?",
        answer:
          "Altcoins (alternative coins) are any cryptocurrencies other than Bitcoin, such as Ethereum, Ripple, Litecoin, and Cardano. They may have different functionalities and use cases.",
      },

      {
        question: "Is cryptocurrency legal?",
        answer:
          "Cryptocurrency legality varies by country. Some nations fully support it, while others impose restrictions or outright bans. Always check your local regulations.",
      },
  ];

 
  faqs.forEach((faq) => {
    const accordionItem = document.createElement('div');
    accordionItem.classList.add('accordion-item');
    accordionItem.innerHTML = `
    <h3 class="accordion-question">${faq.question}</h3>
    <p class="accordion-content" style="display:none">${faq.answer}</p>
    `;

    const accordionQuestion = accordionItem.querySelector('.accordion-question');
    const accordionContent = accordionItem.querySelector('.accordion-content');
    accordionQuestion.addEventListener("click", () => {
        // Close all other open answers before opening the clicked one
        document.querySelectorAll('.accordion-content').forEach(content => {
            content.style.display = "none";
        });

        // Toggle display for the clicked question
        accordionContent.style.display = "block";
    });

    accordion.appendChild(accordionItem);
});

