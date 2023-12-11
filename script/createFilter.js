import CARDS from "../books.json" assert { type: "json" };

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
  const filterContainer = document.querySelector(".filter__container");
  const uniqueBookCategories = getBookCategories(CARDS);

  for (let i = 0; i < uniqueBookCategories.length; i++) {
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("filter__category");
    filterContainer.append(categoryContainer);
    categoryContainer.innerHTML = `
    <input type="checkbox" class="checkbox" data-category="${uniqueBookCategories[i]}">
    <span>${uniqueBookCategories[i]}</span>
    `;
  }
};
