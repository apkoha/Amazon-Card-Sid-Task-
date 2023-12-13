import CARDS from "../books.json" assert { type: "json" };

import {
  categoryList,
  getCards,
  lowPriceBooks,
  showFiltredBooks,
  showLowPriceBooks,
  showTopPriceBooks,
  topPriceBooks,
} from "./createCards.js";
import { bookPriceSelect, marketContainer } from "./main.js";

//фильтрация книг по категориям выбранным в чекбокс
export function filterBooks() {
  const target = event.target;
  const bookCategory = target.dataset.category;

  //проверка таргета на соответствие классу чекбокс
  if (!target.closest(".checkbox")) return;

  //добавление значения категории, выбранного чекбокса, в массив. И отрисовка книг выбранной категории.
  if (target.checked) {
    categoryList.push(bookCategory);

    marketContainer.innerHTML = "";
    showFiltredBooks(CARDS);
  } else {
    //удаление категории снятого чекбокса из массива
    for (let i = 0; i < categoryList.length; i++) {
      if (categoryList[i] === bookCategory) categoryList.splice(i, 1);

      marketContainer.innerHTML = "";
      showFiltredBooks(CARDS);
    }
  }

  //если не выбрана ни одна из категорий, то отрисовать все книги
  if (categoryList.length === 0) {
    getCards(CARDS);
  }
}

//сортировка книг по цене при выборе опции селекта
export const filterPrice = () => {
  const selectValue =
    bookPriceSelect.options[bookPriceSelect.selectedIndex].value;

  //https://learn.javascript.ru/switch
  switch (selectValue) {
    case "value1":
      marketContainer.innerHTML = "";
      getCards(CARDS);
      break;

    case "value2":
      marketContainer.innerHTML = "";
      showLowPriceBooks(lowPriceBooks);
      break;

    case "value3":
      marketContainer.innerHTML = "";
      showTopPriceBooks(topPriceBooks);
      break;
  }
};
