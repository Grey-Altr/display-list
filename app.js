// import functions and grab DOM elements
import { candies } from './candies-data.js';
import { renderCandyItem } from './render-candy.js';
// initialize global state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state


const candiesListEl = document.getElementById('candies-list');

for (let candy of candies) {
    const candiesEl = renderCandyItem(candy);

    candiesListEl.append(candiesEl);

}