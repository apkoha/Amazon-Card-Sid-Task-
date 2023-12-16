import CARDS from "../books.json" assert { type: "json" };
import { getCards } from "./createCards.js";
import { selectedBooksArray } from "./filter.js";
import { marketContainer, search_term } from "./main.js";

//создание HTML разметки Поиска
export const createSearchBlock = () => {
  const filterContainer = document.querySelector(".filter__container");
  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "search");
  searchInput.setAttribute("autocomplete", "off");
  searchInput.setAttribute("id", "search");
  searchInput.setAttribute("placeholder", "Поиск книги...");

  filterContainer.append(searchInput);
};

//реализация Live Search (https://codepen.io/rebelchris/pen/WNxzmeY https://daily-dev-tips.com/posts/vanilla-javascript-live-search/)

export let foundBooks = CARDS;

const search = (booksArray) => {
  //перебор книг по автору и названию с учётом введённого в строку поиска
  foundBooks = booksArray.filter((item) => {
    return (
      item.author.toLowerCase().includes(search_term) ||
      item.title.toLowerCase().includes(search_term)
    );
  });

  //отрисовка книг по результам booksArray.filter
  foundBooks.forEach(() => {
    marketContainer.innerHTML = "";
    getCards(foundBooks);
  });

  return foundBooks; // бесполезная строка
};

export const searchBooks = () => {
  if (selectedBooksArray.length != 0) {
    search(selectedBooksArray);
    console.log("foundBooks: ", foundBooks);
  } else {
    search(CARDS);
    console.log("foundBooks: ", foundBooks);
  }
};
