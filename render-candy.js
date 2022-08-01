import { candies } from './candies-data.js';

const candiesListEl = document.getElementById('candies-list');

for (let candy of candies){
    const candiesEl = renderCandyItem();

    candiesListEl.append(candiesEl);
    
}

function renderCandyItem(candy){
    const pTag = document.createElement('p');
    pTag.textContent = candy;
    pTag.classList.add('candies-list');

    return pTag;
}