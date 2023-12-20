import CARDS from "../books.json" assert { type: "json" };

import { categoryList, getCards, showFiltredBooks } from "./createCards.js";
import { marketContainer, search, search_term } from "./main.js";

//массив книг отфильтрованных по чекбоксу
export let selectedBooksArray = [];

//массив книг найденных поиском
export let foundBooks = [];

//фильтрация книг по категориям выбранным в чекбокс
export function filterBooks() {
  const target = event.target;
  const bookCategory = target.dataset.category;

  //проверка таргета на соответствие классу чекбокс
  if (!target.closest(".checkbox")) return;

  //добавление значения категории выбранного чекбокса в массив. И отрисовка книг выбранной категории.
  if (target.checked) {
    categoryList.push(bookCategory);

    //очистка поля ввода
    search.value = "";
    foundBooks = [];

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
    search.value = "";
    foundBooks = [];

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

//реализация Live Search (https://codepen.io/rebelchris/pen/WNxzmeY https://daily-dev-tips.com/posts/vanilla-javascript-live-search/)

const searchOnMarket = (booksArray) => {
  //перебор книг по автору и названию с учётом текста введённого в строку поиска
  foundBooks = booksArray.filter((item) => {
    return (
      item.author.toLowerCase().includes(search_term) ||
      item.title.toLowerCase().includes(search_term)
    );
  });

  //отрисовка книг по результам booksArray.filter
  if (foundBooks.length > 0) {
    //костыль. из-за отрисовки книг даже при длинне массива 0
    foundBooks.forEach(() => {
      marketContainer.innerHTML = "";
      getCards(foundBooks);
    });
  } else {
    marketContainer.innerHTML = "";
  }
};

export const searchBooks = () => {
  if (selectedBooksArray.length != 0) {
    searchOnMarket(selectedBooksArray);
  } else {
    searchOnMarket(CARDS);
  }
};
