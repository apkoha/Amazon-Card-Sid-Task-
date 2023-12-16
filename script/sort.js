import CARDS from "../books.json" assert { type: "json" };
import { createCard } from "./createCards.js";

import {
  bookPriceSelect,
  booksPropertySelect,
  marketContainer,
} from "./main.js";
import { foundBooks } from "./search.js";

//функции для сортировки цены

//сортировка массива от меньшего к большему
const sortFromLowToHigh = (booksArray) => {
  booksArray.sort(function (a, b) {
    if (a.value > b.value) {
      return 1;
    }

    if (a.value < b.value) {
      return -1;
    }

    return 0;
  });
};

//сортировка массива от от большего к меньшему
const sortFromHighToLow = (booksArray) => {
  booksArray.sort(function (a, b) {
    if (a.value < b.value) {
      return 1;
    }

    if (a.value > b.value) {
      return -1;
    }

    return 0;
  });
};

const sortOnLowPrice = (foundBooks) => {
  //временный массив содержит объекты с позицией и значением сортировки
  let booksPriceList = foundBooks.map(function (book, i) {
    return { index: i, value: book.price };
  });

  //сортируем массив цен от меньшего к большему
  sortFromLowToHigh(booksPriceList);

  //контейнер для результа сортировки
  let lowPriceBooks = booksPriceList.map(function (book) {
    return foundBooks[book.index];
  });

  return lowPriceBooks;
};

const sortOnHighPrice = (foundBooks) => {
  let booksPriceList = foundBooks.map(function (book, i) {
    return { index: i, value: book.price };
  });

  //сортируем массив цен от большего к меньшему
  sortFromHighToLow(booksPriceList);

  //контейнер для результа сортировки
  let topPriceBooks = booksPriceList.map(function (book) {
    return foundBooks[book.index];
  });

  return topPriceBooks;
};

//отрисовка книг, отсортированных по цене по возрастанию
const showLowPriceBooks = () => {
  let lowPriceBooks = sortOnLowPrice(foundBooks);
  for (const book of lowPriceBooks) {
    createCard(book);
  }
};

//отрисовка книг, отсортированных по цене по убыванию
const showTopPriceBooks = () => {
  let topPriceBooks = sortOnHighPrice(foundBooks);
  for (const book of topPriceBooks) {
    createCard(book);
  }
};

//сортировка книг по цене при выборе опции селекта
export const filterPrice = (lowPriceBooks, topPriceBooks) => {
  console.log("777");
  const sortSelectValue =
    bookPriceSelect.options[bookPriceSelect.selectedIndex].value;

  const propertySelectValue =
    booksPropertySelect.options[booksPropertySelect.selectedIndex].value;
  console.log("propertySelectValue: ", propertySelectValue);

  //https://learn.javascript.ru/switch

  if (propertySelectValue === "price") {
    switch (sortSelectValue) {
      case "value1":
        marketContainer.innerHTML = "";
        getCards(CARDS);
        break;

      case "FromLowToHigh":
        marketContainer.innerHTML = "";
        showLowPriceBooks(lowPriceBooks);
        break;

      case "FromHighToLow":
        marketContainer.innerHTML = "";
        showTopPriceBooks(topPriceBooks);
        break;
    }
  }
};
