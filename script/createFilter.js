import CARDS from "../books.json" assert { type: "json" };
// import { showBooksOnFilterProperty } from "./sort.js";
import { filterProducts } from "./sort.js";

//создание section class="filter"
export const createFilterSection = () => {
  const storeSection = document.querySelector(".store");

  const filterSection = document.createElement("section");
  filterSection.classList.add("filter");

  const filterContainer = document.createElement("div");
  filterContainer.classList.add("filter__container");
  filterSection.append(filterContainer);

  storeSection.prepend(filterSection);
};

export const createFilters = () => {
  const marketSection = document.querySelector(".market");

  const filterContainer = document.querySelector(".filter__container");
  const filterCategoryContainer = document.createElement("div");
  filterCategoryContainer.classList.add("filter__category-container");
  filterContainer.append(filterCategoryContainer);

  const categoryTitle = document.createElement("h3");
  categoryTitle.classList.add("filter__category_tittle");
  categoryTitle.innerText = "Категории книг:";
  filterCategoryContainer.prepend(categoryTitle);

  const filterPriceContainer = document.createElement("div");
  filterPriceContainer.classList.add("filter__price-container");
  marketSection.prepend(filterPriceContainer);

  const booksPropertySelect = document.createElement("select");
  booksPropertySelect.classList.add("filter__select-property");
  booksPropertySelect.setAttribute("name", "books_select");
  filterPriceContainer.append(booksPropertySelect);
  // booksPropertySelect.addEventListener("change", showBooksOnFilterProperty);
  booksPropertySelect.addEventListener("change", filterProducts);

  // <option class="filter__select-options" value="value2">
  // </option>;
  booksPropertySelect.innerHTML = `
  <option class="filter__select-options" value="price">
    цена
  </option>;
  <option class="filter__select-options" value="grade">
    рейтинг
  </option>;
  <option class="filter__select-options" value="amount">
    остаток
  </option>;
  // `;

  const bookPriceSelect = document.createElement("select");
  // bookPriceSelect.addEventListener("change", showBooksOnFilterProperty);
  bookPriceSelect.addEventListener("change", filterProducts);
  bookPriceSelect.classList.add("filter__select-price");
  bookPriceSelect.setAttribute("name", "price_select");
  filterPriceContainer.append(bookPriceSelect);

  // <option class="filter__select-options" value="value1">
  // </option>;
  bookPriceSelect.innerHTML = `
  <option class="filter__select-options" value="FromLowToHigh">
  по возрастанию
  </option>;
  <option class="filter__select-options" value="FromHighToLow">
  по убыванию
  </option>;
  `;
};

//получение уникальных категорий книг
const getBookCategories = (cards) => {
  let bookCategories = [];
  for (const card of cards) {
    bookCategories.push(card.category);
  }

  const uniqueBookCategories = [...new Set(bookCategories)];
  return uniqueBookCategories;
};

//отрисовка фильтров категорий книг
export const createFilterCategory = () => {
  const filterCategoryContainer = document.querySelector(
    ".filter__category-container"
  );

  const uniqueBookCategories = getBookCategories(CARDS);

  //перебор массива с уникальными категориями книг и создание по ним чекбоксов в контейнерах
  for (let i = 0; i < uniqueBookCategories.length; i++) {
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("filter__category");
    filterCategoryContainer.append(categoryContainer);

    const categoryCheckbox = document.createElement("input");
    categoryCheckbox.classList.add("checkbox");
    categoryCheckbox.setAttribute("type", "checkbox");
    categoryCheckbox.setAttribute("data-category", uniqueBookCategories[i]);
    categoryContainer.append(categoryCheckbox);

    const categorySpan = document.createElement("span");
    categorySpan.innerText = `${uniqueBookCategories[i]}`;
    categoryContainer.append(categorySpan);
  }
};
