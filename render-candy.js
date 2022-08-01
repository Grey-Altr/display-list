import { candies } from './candies-data.js';

const candiesListEl = document.getElementById('candies-list');

for (let candy of candies){
    const candiesEl = renderCandyItem(candy);

    candiesListEl.append(candiesEl);
    
}

function renderCandyItem(pieceOfCandy){
    const pTag = document.createElement('div', 'p');
    pTag.textContent = pieceOfCandy;
    pTag.classList.add('candies-list');

    return pTag;
}