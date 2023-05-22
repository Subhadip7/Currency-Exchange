// Get elements from the DOM
const currencyOneSelect = document.getElementById("currency-one");
const currencyTwoSelect = document.getElementById("currency-two");
const amountOneInput = document.getElementById("amount-one");
const amountTwoInput = document.getElementById("amount-two");
const swapButton = document.getElementById("swap");
const rateDiv = document.getElementById("rate");

// Fetch exchange rates from API
function calculate() {
  const currencyOne = currencyOneSelect.value;
  const currencyTwo = currencyTwoSelect.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then((response) => response.json())
    .then((data) => {
      const rate = data.rates[currencyTwo];
      rateDiv.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

      amountTwoInput.value = (amountOneInput.value * rate).toFixed(2);
    });
}

// Swap currencies
function swapCurrencies() {
  const temp = currencyOneSelect.value;
  currencyOneSelect.value = currencyTwoSelect.value;
  currencyTwoSelect.value = temp;
  calculate();
}

// Event listeners
currencyOneSelect.addEventListener("change", calculate);
currencyTwoSelect.addEventListener("change", calculate);
amountOneInput.addEventListener("input", calculate);
swapButton.addEventListener("click", swapCurrencies);

// Initial calculation on page load
calculate();
