import CARDS from "../books.json" assert { type: "json" };

import { categoryList, getCards, showFiltredBooks } from "./createCards.js";
import { marketContainer, search } from "./main.js";
import { foundBooks } from "./search.js";

//массив книг отфильтрованных по чекбоксу
export let selectedBooksArray = [];

//фильтрация книг по категориям выбранным в чекбокс
export function filterBooks() {
  const target = event.target;
  const bookCategory = target.dataset.category;

  //проверка таргета на соответствие классу чекбокс
  if (!target.closest(".checkbox")) return;

  //добавление значения категории, выбранного чекбокса, в массив. И отрисовка книг выбранной категории.
  if (target.checked) {
    categoryList.push(bookCategory);
    search.value = "";

    //получение массива книг по выбранному чекбоксу
    const getBooks = (CARDS) => {
      for (const book of CARDS) {
        if (bookCategory == book.category) {
          selectedBooksArray.push(book);
        }
      }
    };
    getBooks(CARDS);

    marketContainer.innerHTML = "";
    showFiltredBooks(CARDS);
  } else {
    //очистка поля ввода
    search.value = "";
    //удаление категории снятого чекбокса из массива
    for (let i = 0; i < categoryList.length; i++) {
      if (categoryList[i] === bookCategory) categoryList.splice(i, 1);

      marketContainer.innerHTML = "";
      showFiltredBooks(CARDS);
    }

    //удаление книг из массива по снятому чекбоксу

    for (let j = 0; j < selectedBooksArray.length; j++) {
      if (selectedBooksArray[j].category === bookCategory) {
        selectedBooksArray.splice(j);
      }
    }
  }

  //если не выбрана ни одна из категорий, то отрисовать все книги
  if (categoryList.length === 0) {
    getCards(CARDS);
  }
}
