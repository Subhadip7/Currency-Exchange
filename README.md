# Currency-Exchange


The aim of a currency exchange project is to provide a tool or application that allows users to convert between different currencies. The project typically involves fetching exchange rates from reliable sources, such as financial APIs or databases, and providing a user-friendly interface for users to input the amount in one currency and obtain the equivalent amount in another currency based on the current exchange rate.

it consists of three parts. 
1.Index html
2.style.css
3.script.js


1.Index html
This is a simplified HTML code for a currency converter web page. It consists of a form with two dropdown menus for selecting currencies, two input fields for entering amounts, and a swap button to interchange the selected currencies. The page also includes a rate section for displaying the exchange rate.

The HTML code includes the necessary meta tags for character encoding and viewport settings. It references an external CSS file for styling and an external JavaScript file for functionality. The page includes a title and an image related to currency conversion. The selected default currencies are USD and INR.

Overall, this code sets up the basic structure and elements required for a currency converter web page, allowing users to select currencies and enter amounts for conversion.

2.


3.script.js
 This JavaScript code performs the following tasks:

It retrieves the necessary HTML elements using their respective IDs.
It defines a function called calculate() that fetches the exchange rates from the API based on the selected currencies and updates the conversion result in the second input field.
It defines a function called swapCurrencies() that swaps the selected currencies and recalculates the conversion.
It adds event listeners to the relevant elements to trigger the necessary calculations when the user interacts with the page.
It performs an initial calculation on page load to display the default conversion rate.
Note: The code uses the ExchangeRate-API (https://www.exchangerate-api.com/) to fetch the exchange rates. Make sure to sign up on their website and obtain an API key. Replace the API URL in the fetch() function with your own API endpoint, including the API key.

Remember to save the JavaScript file as script.js and include it in the HTML file using the <script src="script.js"></script> tag, as shown in your provided HTML code.
