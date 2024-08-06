import CARDS from "../books.json" with { type: "json" }; // https://stackoverflow.com/questions/69548822/
import { filterBooks, searchBooks } from "./filter.js";
import { createMarketSection, getCards } from "./createCards.js";
import {
  createFilterCategory,
  createFilterSection,
  createFilters,
} from "./createFilter.js";

//создание main
const createMain = () => {
  const storeMain = document.createElement("main");
  storeMain.classList.add("store");
  document.body.append(storeMain);
};

//создание HTML разметки Поиска
const createSearchBlock = () => {
  const filterContainer = document.querySelector(".filter__container");
  const searchInput = document.createElement("input");

  searchInput.setAttribute("type", "search");
  searchInput.setAttribute("autocomplete", "off");
  searchInput.setAttribute("id", "search");
  searchInput.setAttribute("placeholder", "Поиск книги...");

  filterContainer.append(searchInput);
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
export const bookPriceSelect = document.querySelector(".filter__select-price");
export const booksPropertySelect = document.querySelector(
  ".filter__select-property"
);
//для реализация Live Search. search.js
export const search = document.getElementById("search");
//вводимый в input запрос
export let search_term = "";

//ввод запроса в поле поиска
search.addEventListener("input", (event) => {
  search_term = event.target.value.toLowerCase();
  searchBooks();
});

//клик по чекбоксу. ./filter.js строка 18
const filterCheckboxes = document.querySelector(".filter__container");
filterCheckboxes.addEventListener("change", filterBooks);

//клик по карточке товара
const catcher = document.querySelector(".container");
catcher.addEventListener("click", ({ target }) => {
  if (target.closest(".market__card")) {
    alert("Это не магазин, глупенький!");
  }
});
