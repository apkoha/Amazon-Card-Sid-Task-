import CARDS from "../books.json" assert { type: "json" };
import { createCard } from "./createCards.js";

import {
  bookPriceSelect,
  booksPropertySelect,
  marketContainer,
} from "./main.js";
import { selectedBooksArray, foundBooks } from "./filter.js";

export function filterProducts(cat, sortBy) {
  let filteredProducts = CARDS;
  console.log("filteredProducts: ", filteredProducts);

  // select убывания/возрастания
  const sortSelectValue =
    bookPriceSelect.options[bookPriceSelect.selectedIndex].value;

  if (sortSelectValue === "FromHighToLow") {
    console.log("1");
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortSelectValue === "FromLowToHigh") {
    console.log("2");
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  console.log("filteredProducts: ", filteredProducts);
  return filteredProducts;
}

export const showBooksOnFilterProperty = (filteredProducts) => {
  // select убывания/возрастания
  const sortSelectValue =
    bookPriceSelect.options[bookPriceSelect.selectedIndex].value;
  //select свойств (цена, оценка, остаток)
  const propertySelectValue =
    booksPropertySelect.options[booksPropertySelect.selectedIndex].value;

  //если сортируем по цене
  if (propertySelectValue === "price") {
    switch (sortSelectValue) {
      case "FromLowToHigh":
      //       marketContainer.innerHTML = "";
      //       //функция сортировки по одному из трёх массивов (все книги, найденные книги, выбранные книги)
      //       showLowPriceBooks(lowPriceBooks);
      //       break;
      //     case "FromHighToLow":
      //       marketContainer.innerHTML = "";
      //       showTopPriceBooks(topPriceBooks);
      //       break;
    }
  }
  // //если сортируем по оценке
  // if (propertySelectValue === "grade") {
  //   switch (sortSelectValue) {
  //     case "FromLowToHigh":
  //       marketContainer.innerHTML = "";
  //       showLowGradeBooks(lowGradeBooks);
  //       break;
  //     case "FromHighToLow":
  //       marketContainer.innerHTML = "";
  //       showHighGradeBooks(highGradeBooks);
  //       break;
  //   }
  // }
  // if (propertySelectValue === "amount") {
  //   switch (sortSelectValue) {
  //     case "FromLowToHigh":
  //       marketContainer.innerHTML = "";
  //       showLowAmountBooks(lowAmountBooks);
  //       break;
  //     case "FromHighToLow":
  //       marketContainer.innerHTML = "";
  //       showHighAmountBooks(highAmountBooks);
  //       break;
  //   }
  // }
};

// //функции для сортировки цены

// //сортировка массива от меньшего к большему
// const sortFromLowToHigh = (booksArray) => {
//   booksArray.sort(function (a, b) {
//     if (a.value > b.value) {
//       return 1;
//     }

//     if (a.value < b.value) {
//       return -1;
//     }

//     return 0;
//   });
// };

// //сортировка массива от от большего к меньшему
// const sortFromHighToLow = (booksArray) => {
//   booksArray.sort(function (a, b) {
//     if (a.value < b.value) {
//       return 1;
//     }

//     if (a.value > b.value) {
//       return -1;
//     }

//     return 0;
//   });
// };

// //сортировка по цене
// const sortOnLowPrice = (booksArray) => {
//   //временный массив содержит объекты с позицией и значением сортировки
//   let booksPriceList = [];
//   booksPriceList = booksArray.map(function (book, i) {
//     return { index: i, value: book.price };
//   });

//   //сортируем массив цен от меньшего к большему
//   sortFromLowToHigh(booksPriceList);

//   //контейнер для результа сортировки
//   let lowPriceBooks = booksPriceList.map(function (book) {
//     return booksArray[book.index];
//   });

//   return lowPriceBooks;
// };

// const sortOnHighPrice = (booksArray) => {
//   //временный массив содержит объекты с позицией и значением сортировки
//   let booksPriceList = [];
//   booksPriceList = booksArray.map(function (book, i) {
//     return { index: i, value: book.price };
//   });

//   //сортируем массив цен от меньшего к большему
//   sortFromHighToLow(booksPriceList);

//   //контейнер для результа сортировки
//   let topPriceBooks = booksPriceList.map(function (book) {
//     return booksArray[book.index];
//   });

//   return topPriceBooks;
// };

// const showLowPriceBooks = () => {
//   let lowPriceBooksArray = [];

//   if ((selectedBooksArray.length, foundBooks.length) === 0) {
//     lowPriceBooksArray = sortOnLowPrice(CARDS);
//   }

//   if (foundBooks.length != 0) {
//     lowPriceBooksArray = sortOnLowPrice(foundBooks);
//   }

//   if (selectedBooksArray.length != 0 && foundBooks.length === 0) {
//     lowPriceBooksArray = sortOnLowPrice(selectedBooksArray);
//   }

//   for (const book of lowPriceBooksArray) {
//     createCard(book);
//   }
// };

// const showTopPriceBooks = () => {
//   let topPriceBooksArray = [];

//   if ((selectedBooksArray.length, foundBooks.length) === 0) {
//     topPriceBooksArray = sortOnHighPrice(CARDS);
//   }

//   if (foundBooks.length != 0) {
//     topPriceBooksArray = sortOnHighPrice(foundBooks);
//   }

//   if (selectedBooksArray.length != 0 && foundBooks.length === 0) {
//     topPriceBooksArray = sortOnHighPrice(selectedBooksArray);
//   }

//   for (const book of topPriceBooksArray) {
//     createCard(book);
//   }
// };

// //сортировка по оценке
// const sortOnLowGrade = (booksArray) => {
//   //временный массив содержит объекты с позицией и значением сортировки
//   let booksPriceList = [];
//   booksPriceList = booksArray.map(function (book, i) {
//     return { index: i, value: book.rating };
//   });

//   //сортируем массив цен от меньшего к большему
//   sortFromLowToHigh(booksPriceList);

//   //контейнер для результа сортировки
//   let lowGradeBooks = booksPriceList.map(function (book) {
//     return booksArray[book.index];
//   });

//   return lowGradeBooks;
// };

// const sortOnHighGrade = (booksArray) => {
//   //временный массив содержит объекты с позицией и значением сортировки
//   let booksPriceList = [];
//   booksPriceList = booksArray.map(function (book, i) {
//     return { index: i, value: book.rating };
//   });

//   //сортируем массив цен от меньшего к большему
//   sortFromHighToLow(booksPriceList);

//   //контейнер для результа сортировки
//   let highGradeBooks = booksPriceList.map(function (book) {
//     return booksArray[book.index];
//   });

//   return highGradeBooks;
// };

// const showLowGradeBooks = () => {
//   let lowGradeBooksArray = [];

//   if ((selectedBooksArray.length, foundBooks.length) === 0) {
//     lowGradeBooksArray = sortOnLowGrade(CARDS);
//   }

//   if (foundBooks.length != 0) {
//     lowGradeBooksArray = sortOnLowGrade(foundBooks);
//   }

//   if (selectedBooksArray.length != 0 && foundBooks.length === 0) {
//     lowGradeBooksArray = sortOnLowGrade(selectedBooksArray);
//   }

//   for (const book of lowGradeBooksArray) {
//     createCard(book);
//   }
// };

// const showHighGradeBooks = () => {
//   let highGradeBooksArray = [];

//   if ((selectedBooksArray.length, foundBooks.length) === 0) {
//     highGradeBooksArray = sortOnHighGrade(CARDS);
//   }

//   if (foundBooks.length != 0) {
//     highGradeBooksArray = sortOnHighGrade(foundBooks);
//   }

//   if (selectedBooksArray.length != 0 && foundBooks.length === 0) {
//     highGradeBooksArray = sortOnHighGrade(selectedBooksArray);
//   }

//   for (const book of highGradeBooksArray) {
//     createCard(book);
//   }
// };

// //сортировка по остаткам
// const sortOnLowAmount = (booksArray) => {
//   //временный массив содержит объекты с позицией и значением сортировки
//   let booksPriceList = [];
//   booksPriceList = booksArray.map(function (book, i) {
//     return { index: i, value: book.amount };
//   });

//   //сортируем массив цен от меньшего к большему
//   sortFromLowToHigh(booksPriceList);

//   //контейнер для результа сортировки
//   let lowAmountBooks = booksPriceList.map(function (book) {
//     return booksArray[book.index];
//   });

//   return lowAmountBooks;
// };

// const sortOnHighAmount = (booksArray) => {
//   //временный массив содержит объекты с позицией и значением сортировки
//   let booksPriceList = [];
//   booksPriceList = booksArray.map(function (book, i) {
//     return { index: i, value: book.amount };
//   });

//   //сортируем массив цен от меньшего к большему
//   sortFromHighToLow(booksPriceList);

//   //контейнер для результа сортировки
//   let highAmountBooks = booksPriceList.map(function (book) {
//     return booksArray[book.index];
//   });

//   return highAmountBooks;
// };

// const showLowAmountBooks = () => {
//   let lowAmountBooksArray = [];

//   if ((selectedBooksArray.length, foundBooks.length) === 0) {
//     lowAmountBooksArray = sortOnLowAmount(CARDS);
//   }

//   if (foundBooks.length != 0) {
//     lowAmountBooksArray = sortOnLowAmount(foundBooks);
//   }

//   if (selectedBooksArray.length != 0 && foundBooks.length === 0) {
//     lowAmountBooksArray = sortOnLowAmount(selectedBooksArray);
//   }

//   for (const book of lowAmountBooksArray) {
//     createCard(book);
//   }
// };

// const showHighAmountBooks = () => {
//   let highAmountBooksArray = [];

//   if ((selectedBooksArray.length, foundBooks.length) === 0) {
//     highAmountBooksArray = sortOnHighAmount(CARDS);
//   }

//   if (foundBooks.length != 0) {
//     highAmountBooksArray = sortOnHighAmount(foundBooks);
//   }

//   if (selectedBooksArray.length != 0 && foundBooks.length === 0) {
//     highAmountBooksArray = sortOnHighAmount(selectedBooksArray);
//   }

//   for (const book of highAmountBooksArray) {
//     createCard(book);
//   }
// };

// //отрисовка книг по возрастанию/убыванию при выборе фильтров цена/оценка/остаток
// export const showBooksOnFilterProperty = (
//   lowPriceBooks,
//   topPriceBooks,
//   lowGradeBooks,
//   highGradeBooks,
//   lowAmountBooks,
//   highAmountBooks
// ) => {
//   console.log("найденые книги: ", foundBooks);
//   console.log("выбранные книги: ", selectedBooksArray);

//   //select убывания/возрастания
//   const sortSelectValue =
//     bookPriceSelect.options[bookPriceSelect.selectedIndex].value;

//   //select свойств (цена, оценка, остаток)
//   const propertySelectValue =
//     booksPropertySelect.options[booksPropertySelect.selectedIndex].value;

//   //https://learn.javascript.ru/switch
//   //если сортируем по цене
//   if (propertySelectValue === "price") {
//     switch (sortSelectValue) {
//       case "FromLowToHigh":
//         marketContainer.innerHTML = "";
//         //функция сортировки по одному из трёх массивов (все книги, найденные книги, выбранные книги)
//         showLowPriceBooks(lowPriceBooks);
//         break;

//       case "FromHighToLow":
//         marketContainer.innerHTML = "";
//         showTopPriceBooks(topPriceBooks);
//         break;
//     }
//   }

//   //если сортируем по оценке
//   if (propertySelectValue === "grade") {
//     switch (sortSelectValue) {
//       case "FromLowToHigh":
//         marketContainer.innerHTML = "";
//         showLowGradeBooks(lowGradeBooks);
//         break;

//       case "FromHighToLow":
//         marketContainer.innerHTML = "";
//         showHighGradeBooks(highGradeBooks);
//         break;
//     }
//   }

//   if (propertySelectValue === "amount") {
//     switch (sortSelectValue) {
//       case "FromLowToHigh":
//         marketContainer.innerHTML = "";
//         showLowAmountBooks(lowAmountBooks);
//         break;

//       case "FromHighToLow":
//         marketContainer.innerHTML = "";
//         showHighAmountBooks(highAmountBooks);
//         break;
//     }
//   }
// };
