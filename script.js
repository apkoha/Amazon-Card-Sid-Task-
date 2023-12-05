"use strict";

import CARDS from "./books.json" assert { type: "json" }; //https://stackoverflow.com/questions/69548822/

const createMarketSection = () => {
  const marketSection = document.createElement("section");
  marketSection.classList.add("market");

  const marketContainer = document.createElement("div");
  marketContainer.classList.add("container");
  marketSection.append(marketContainer);

  document.body.append(marketSection);

  return marketSection;
};

function getCards() {
  for (const card of CARDS) {
    createCard(card);
  }
}

const createCard = (card) => {
  const marketContainer = document.querySelector(".container");
  const marketCard = document.createElement("div");
  marketCard.classList.add("market__card");

  marketCard.innerHTML = `
    <img class="card__image" src="${card.urlToImages[0]}" alt=""  width="200" height="220">
    <div class="card__container">
      <h2 class="card__book-title">${card.title}</h2>
      <p class="card__book-author">${card.author}</p>
      <p class="card__book-grade">${card.rating}</p>
      <p class="card__book-price">$${card.price}</p>
      <p class="card__book-balance">Amount of books in the store: ${card.amount}</p>
    </div>
  `;

  marketContainer.append(marketCard);
};

const init = () => {
  createMarketSection();
  getCards();
};

init();
