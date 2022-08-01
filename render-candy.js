export function renderCandyItem(pieceOfCandy){
    const pTag = document.createElement('div', 'p');
    pTag.textContent = pieceOfCandy;
    pTag.classList.add('candies-list');

    return pTag;
}