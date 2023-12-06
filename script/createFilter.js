import CARDS from "../books.json" assert { type: "json" }; ////https://stackoverflow.com/questions/69548822/
import { getCards } from "./main.js";

export const createFilterSection = () => {
  const storeSection = document.querySelector(".store");

  const filterSection = document.createElement("section");
  filterSection.classList.add("filter");

  const filterContainer = document.createElement("div");
  filterContainer.classList.add("filter__container");
  filterSection.append(filterContainer);

  storeSection.prepend(filterSection);
};

export const createFilterCategory = () => {
  const filterContainer = document.querySelector(".filter__container");
  const uniqueBookCategories = getCards(CARDS);

  ///////костыль///////
  const categoryContainer = document.createElement("div");
  categoryContainer.classList.add("filter__category");
  filterContainer.append(categoryContainer);
  categoryContainer.innerHTML = `
    <input type="checkbox" class="checkbox" data-category="show-all">
    <span>показать все</span>
    `;
  ////////если переделать на баттон, то будет красивее///////

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
