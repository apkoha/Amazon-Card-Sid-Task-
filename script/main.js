"use strict";

import CARDS from "../books.json" assert { type: "json" }; //https://stackoverflow.com/questions/69548822/
import { createCard, createMarketSection, marketCards } from "./createCards.js";
import { createFilterCategory, createFilterSection } from "./createFilter.js";

const createMain = () => {
  const storeMain = document.createElement("main");
  storeMain.classList.add("store");
  document.body.append(storeMain);
};

export const getCards = (CARDS) => {
  let bookCategories = [];

  for (const card of CARDS) {
    createCard(card);
    bookCategories.push(card.category);
  }

  const uniqueBookCategories = [...new Set(bookCategories)];
  return uniqueBookCategories;
};

const init = () => {
  createMain();
  createMarketSection();
  createFilterSection();
  createFilterCategory();
};

init();

function filterBooks() {
  let target = event.target;
  if (!target.closest(".checkbox")) return;
  let targetCategory = target.dataset.category;

  marketCards.forEach((marketCard) => {
    let bookCategory = marketCard.dataset;
    let { category } = bookCategory;

    marketCard.classList.add("show-card");
    if (target.checked && !marketCard.classList.contains(targetCategory)) {
      marketCard.classList.remove("show-card");
    }
  });
}

const filterCheckboxes = document.querySelector(".filter__container");
filterCheckboxes.addEventListener("click", filterBooks);

const catcher = document.querySelector(".container");

catcher.addEventListener("click", ({ target }) => {
  if (target.closest(".market__card")) {
    alert("Это не магазин, глупенький!");
  }
});

/*
Функция может вернуть результат, который будет передан в вызвавший её код.
Директива return может находиться в любом месте тела функции. Как только
выполнение доходит до этого места, функция останавливается, и значение
возвращается в вызвавший её код (присваивается переменной result выше)
 */
