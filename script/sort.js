import CARDS from "../books.json" assert { type: "json" };
import { createCard, getCards } from "./createCards.js";

import {
  bookPriceSelect,
  booksPropertySelect,
  marketContainer,
} from "./main.js";
import { foundBooks } from "./search.js";
import { selectedBooksArray } from "./filter.js";

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

const sortOnLowPrice = () => {
  let booksPriceList = [];
  let lowPriceBooks = [];

  if (selectedBooksArray.length != 0 && foundBooks.length === 0) {
    //временный массив содержит объекты с позицией и значением сортировки
    booksPriceList = selectedBooksArray.map(function (book, i) {
      return { index: i, value: book.price };
    });

    //сортируем массив цен от меньшего к большему
    sortFromLowToHigh(booksPriceList);

    //контейнер для результа сортировки
    lowPriceBooks = booksPriceList.map(function (book) {
      return selectedBooksArray[book.index];
    });
  } else {
    booksPriceList = foundBooks.map(function (book, i) {
      return { index: i, value: book.price };
    });

    sortFromLowToHigh(booksPriceList);

    lowPriceBooks = booksPriceList.map(function (book) {
      return foundBooks[book.index];
    });
  }

  return lowPriceBooks;
};

//отрисовка книг, отсортированных по цене по возрастанию
const showLowPriceBooks = () => {
  let lowPriceBooks = [];

  if (selectedBooksArray.length != 0) {
    lowPriceBooks = sortOnLowPrice(selectedBooksArray);

    for (const book of lowPriceBooks) {
      createCard(book);
    }
  } else {
    lowPriceBooks = sortOnLowPrice(foundBooks);

    for (const book of lowPriceBooks) {
      createCard(book);
    }
  }
};

const sortOnHighPrice = () => {
  let booksPriceList = [];
  let topPriceBooks = [];

  if (selectedBooksArray.length != 0 && foundBooks.length === 0) {
    booksPriceList = selectedBooksArray.map(function (book, i) {
      return { index: i, value: book.price };
    });

    sortFromHighToLow(booksPriceList);

    topPriceBooks = booksPriceList.map(function (book) {
      return selectedBooksArray[book.index];
    });
  } else {
    booksPriceList = foundBooks.map(function (book, i) {
      return { index: i, value: book.price };
    });

    sortFromHighToLow(booksPriceList);

    topPriceBooks = booksPriceList.map(function (book) {
      return foundBooks[book.index];
    });
  }

  return topPriceBooks;
};

//отрисовка книг, отсортированных по цене по убыванию
const showTopPriceBooks = () => {
  let topPriceBooks = [];

  if (selectedBooksArray.length != 0) {
    topPriceBooks = sortOnHighPrice(selectedBooksArray);

    for (const book of topPriceBooks) {
      createCard(book);
    }
  } else {
    topPriceBooks = sortOnHighPrice(foundBooks);

    for (const book of topPriceBooks) {
      createCard(book);
    }
  }
};

/////////////сортировка по оценке
const sortOnLowGrade = () => {
  let booksGradeList = [];
  let lowGradeBooks = [];

  if (selectedBooksArray.length != 0 && foundBooks.length === 0) {
    //временный массив содержит объекты с позицией и значением сортировки по оценке
    booksGradeList = selectedBooksArray.map(function (book, i) {
      return { index: i, value: book.rating };
    });

    //сортируем массив оценок от меньшего к большему
    sortFromLowToHigh(booksGradeList);

    //контейнер для результа сортировки по оценке
    lowGradeBooks = booksGradeList.map(function (book) {
      return selectedBooksArray[book.index];
    });
  } else {
    //временный массив содержит объекты с позицией и значением сортировки по оценке
    booksGradeList = foundBooks.map(function (book, i) {
      return { index: i, value: book.rating };
    });

    //сортируем массив оценок от меньшего к большему
    sortFromLowToHigh(booksGradeList);

    //контейнер для результа сортировки по оценке
    lowGradeBooks = booksGradeList.map(function (book) {
      return foundBooks[book.index];
    });
  }

  return lowGradeBooks;
};

//отрисовка книг, отсортированных по оценке по возрастанию
const showLowGradeBooks = () => {
  let lowGradeBooks = [];

  if (selectedBooksArray.length != 0) {
    lowGradeBooks = sortOnLowGrade(selectedBooksArray);
    for (const book of lowGradeBooks) {
      createCard(book);
    }
  } else {
    lowGradeBooks = sortOnLowGrade(foundBooks);
    for (const book of lowGradeBooks) {
      createCard(book);
    }
  }
};

const sortOnHighGrade = () => {
  let booksGradeList = [];
  let highGradeBooks = [];

  if (selectedBooksArray.length != 0 && foundBooks.length === 0) {
    booksGradeList = selectedBooksArray.map(function (book, i) {
      return { index: i, value: book.rating };
    });

    //сортируем массив оценок от меньшего к большему
    sortFromHighToLow(booksGradeList);

    //контейнер для результа сортировки по оценке
    highGradeBooks = booksGradeList.map(function (book) {
      return selectedBooksArray[book.index];
    });
  } else {
    //временный массив содержит объекты с позицией и значением сортировки по оценке
    booksGradeList = foundBooks.map(function (book, i) {
      return { index: i, value: book.rating };
    });

    //сортируем массив оценок от меньшего к большему
    sortFromHighToLow(booksGradeList);

    //контейнер для результа сортировки по оценке
    highGradeBooks = booksGradeList.map(function (book) {
      return foundBooks[book.index];
    });
  }

  return highGradeBooks;
};

//отрисовка книг, отсортированных по цене по возрастанию
const showHighGradeBooks = () => {
  let highGradeBooks = sortOnHighGrade(foundBooks);
  for (const book of highGradeBooks) {
    createCard(book);
  }
};
///////////////

//сортировка книг по цене при выборе опции селекта
export const filterProperty = (
  lowPriceBooks,
  topPriceBooks,
  lowGradeBooks,
  highGradeBooks
) => {
  //select убывания/возрастания
  const sortSelectValue =
    bookPriceSelect.options[bookPriceSelect.selectedIndex].value;

  //select свойств (цена, оценка, остаток)
  const propertySelectValue =
    booksPropertySelect.options[booksPropertySelect.selectedIndex].value;

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

  if (propertySelectValue === "grade") {
    console.log("888");
    switch (sortSelectValue) {
      case "value1":
        marketContainer.innerHTML = "";
        getCards(CARDS);
        break;

      case "FromLowToHigh":
        marketContainer.innerHTML = "";
        showLowGradeBooks(lowGradeBooks);
        break;

      case "FromHighToLow":
        marketContainer.innerHTML = "";
        showHighGradeBooks(highGradeBooks);
        break;
    }
  }
};
