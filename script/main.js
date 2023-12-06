"use strict";

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
  const checkboxes = document.querySelectorAll(".filter__container input");
  let target = event.target;
  if (!target.closest(".checkbox") && !target.closest(".button")) return;

  for (let i = 0; i < checkboxes.length; i++) {
    marketCards.forEach((marketCard) => {
      let bookCategory = marketCard.dataset;
      let { category } = bookCategory;

      if (
        checkboxes[i].checked &&
        checkboxes[i].dataset.category === category
      ) {
        marketCard.classList.add("show-card");
      } else if (
        !checkboxes[i].checked &&
        checkboxes[i].dataset.category === category
      ) {
        marketCard.classList.remove("show-card");
      }

      if (target.dataset.category === "show-all") {
        marketCard.classList.add("show-card");
      }
    });
  }
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
