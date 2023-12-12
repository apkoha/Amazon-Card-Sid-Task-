import CARDS from "../books.json" assert { type: "json" };

//создание section class="filter"
export const createFilterSection = () => {
  const storeSection = document.querySelector(".store");

  const filterSection = document.createElement("section");
  filterSection.classList.add("filter");

  const filterContainer = document.createElement("div");
  filterContainer.classList.add("filter__container");
  filterSection.append(filterContainer);

  const filterCategoryContainer = document.createElement("div");
  filterCategoryContainer.classList.add("filter__category-container");
  filterContainer.append(filterCategoryContainer);

  const categoryTitle = document.createElement("h3");
  categoryTitle.classList.add("filter__category_tittle");
  categoryTitle.innerText = "Категории книг:";
  filterCategoryContainer.prepend(categoryTitle);

  const filterPriceContainer = document.createElement("div");
  filterPriceContainer.classList.add("filter__price-container");
  filterContainer.append(filterPriceContainer);

  const bookPriceTitle = document.createElement("h3");
  bookPriceTitle.classList.add("filter__price_tittle");
  bookPriceTitle.innerText = "Сортировать по цене:";
  filterPriceContainer.append(bookPriceTitle);

  const bookPriceSelect = document.createElement("select");
  bookPriceSelect.classList.add("filter__select-price");
  bookPriceSelect.setAttribute("name", "price_select");
  filterPriceContainer.append(bookPriceSelect);

  //внимание! повторяющийся код
  const bookSelectOptions1 = document.createElement("option");
  bookSelectOptions1.classList.add("filter__select-options");
  bookSelectOptions1.setAttribute("value", "value1");
  bookSelectOptions1.innerText = "";
  bookPriceSelect.append(bookSelectOptions1);

  const bookSelectOptions2 = document.createElement("option");
  bookSelectOptions2.classList.add("filter__select-options");
  bookSelectOptions2.setAttribute("value", "value2");
  bookSelectOptions2.innerText = "по возрастанию";
  bookPriceSelect.append(bookSelectOptions2);

  const bookSelectOptions3 = document.createElement("option");
  bookSelectOptions3.classList.add("filter__select-options");
  bookSelectOptions3.setAttribute("value", "value3");
  bookSelectOptions3.innerText = "по убыванию";
  bookPriceSelect.append(bookSelectOptions3);

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
  const filterCategoryContainer = document.querySelector(
    ".filter__category-container"
  );
  const uniqueBookCategories = getBookCategories(CARDS);

  for (let i = 0; i < uniqueBookCategories.length; i++) {
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("filter__category");
    filterCategoryContainer.append(categoryContainer);
    categoryContainer.innerHTML = `
    <input type="checkbox" class="checkbox" data-category="${uniqueBookCategories[i]}">
    <span>${uniqueBookCategories[i]}</span>
    `;
  }
};

/* Можно обернуть input+span в label, чтобы выбор категорий был не только по нажатию на чекбокс,
 но и на наименование категории. Но тогда нужно переписывать filterBooks() */
