import CARDS from "../books.json" assert { type: "json" }; // https://stackoverflow.com/questions/69548822/
import { filterBooks, filterPrice } from "./filter.js";

import { createMarketSection, getCards } from "./createCards.js";

import {
  createFilterCategory,
  createFilterSection,
  createFilters,
} from "./createFilter.js";
import { createSearchBlock, searchBooks } from "./search.js";

//создание main
const createMain = () => {
  const storeMain = document.createElement("main");
  storeMain.classList.add("store");
  document.body.append(storeMain);
};

const init = () => {
  createMain();
  createMarketSection();
  getCards(CARDS);
  createFilterSection();
  createSearchBlock();
  createFilters();
  createFilterCategory();
};

init();

export const marketContainer = document.querySelector(".container");

//клик по чекбоксу
const filterCheckboxes = document.querySelector(".filter__container");
filterCheckboxes.addEventListener("change", filterBooks);

//клик по select price
export const bookPriceSelect = document.querySelector(".filter__select-price");
bookPriceSelect.addEventListener("change", filterPrice);

//клик по карточке товара
const catcher = document.querySelector(".container");
catcher.addEventListener("click", ({ target }) => {
  if (target.closest(".market__card")) {
    alert("Это не магазин, глупенький!");
  }
});

//реализация Live Search
const search = document.getElementById("search");
//вводимый в input запрос
export let search_term = "";

//ввод запроса в поле поиска
search.addEventListener("input", (event) => {
  search_term = event.target.value.toLowerCase();
  searchBooks();
});

/*
Функция может вернуть результат, который будет передан в вызвавший её код.
Директива return может находиться в любом месте тела функции. Как только
выполнение доходит до этого места, функция останавливается, и значение
возвращается в вызвавший её код (присваивается переменной result выше)
 */

/* Видимость переменных в модульной системе https://learn.javascript.ru/modules-intro/ */

/* при выбранном чекбоксе сделать сброс селекта сортировки по цене на первое значение */
