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


--------------------------------------------------------------------------------------------------------------------------------

2. style.css
This is a CSS code snippet that styles a currency converter web page. Here's a brief explanation of the code:

The :root selector defines a CSS variable --primary-color for the primary color used in the page.
The * selector applies the box-sizing: border-box property to all elements, ensuring the correct sizing of elements with padding and borders.
The body styles define the background color, font family, and layout properties for the page. It uses flexbox to center the content vertically and horizontally.
The h1 and p styles define the color and alignment for heading and paragraph elements.
The .btn style defines the appearance of buttons, including background color, text color, cursor style, and padding.
The .money-img style defines the appearance of the currency image, including its maximum width, height, grayscale effect, border, box shadow, and opacity.
The .currency style defines the layout and spacing for the currency section, including padding, flexbox properties, and alignment.
The .currency select style modifies the appearance of the currency dropdown menus, including padding, border, font size, and background image.
The .currency input style modifies the appearance of the input fields for entering amounts, including background color, font size, and text alignment.
The .swap-rate-container style defines the layout and spacing for the swap button and rate section, including flexbox properties and alignment.
The .rate style defines the color, font size, and padding for the rate section.
The select:focus, input:focus, and button:focus styles remove the outline when the respective elements are focused.
The @media query applies specific styles when the screen width is below 600 pixels, adjusting the width of the currency input fields.
In summary, this CSS code provides a basic styling for the currency converter web page, including colors, layout, and appearance of various elements. 

--------------------------------------------------------------------------------------------------------------------------------

3.script.js
 This JavaScript code performs the following tasks:

It retrieves the necessary HTML elements using their respective IDs.
It defines a function called calculate() that fetches the exchange rates from the API based on the selected currencies and updates the conversion result in the second input field.
It defines a function called swapCurrencies() that swaps the selected currencies and recalculates the conversion.
It adds event listeners to the relevant elements to trigger the necessary calculations when the user interacts with the page.
It performs an initial calculation on page load to display the default conversion rate.
Note: The code uses the ExchangeRate-API (https://www.exchangerate-api.com/) to fetch the exchange rates. Make sure to sign up on their website and obtain an API key. Replace the API URL in the fetch() function with your own API endpoint, including the API key.

Remember to save the JavaScript file as script.js and include it in the HTML file using the <script src="script.js"></script> tag, as shown in your provided HTML code.
