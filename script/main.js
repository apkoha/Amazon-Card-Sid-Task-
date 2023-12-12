import CARDS from "../books.json" assert { type: "json" }; // https://stackoverflow.com/questions/69548822/

import {
  createMarketSection,
  categoryList,
  showFiltredBooks,
  getCards,
  showLowPriceBooks,
  showTopPriceBooks,
  lowPriceBooks,
  topPriceBooks,
} from "./createCards.js";

import { createFilterCategory, createFilterSection } from "./createFilter.js";

//создание main
const createMain = () => {
  const storeMain = document.createElement("main");
  storeMain.classList.add("store");
  document.body.append(storeMain);
};

const init = () => {
  createMain();
  createMarketSection();
  getCards(CARDS);
  createFilterSection();
  createFilterCategory();
};

init();

const marketContainer = document.querySelector(".container");

//фильтрация книг по категориям выбранным в чекбокс
function filterBooks() {
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

//клик по чекбоксу
const filterCheckboxes = document.querySelector(".filter__container");
filterCheckboxes.addEventListener("change", filterBooks);

//сортировка книг по цене при выборе опции селекта
const filterPrice = () => {
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

//клик по select price
const bookPriceSelect = document.querySelector(".filter__select-price");
bookPriceSelect.addEventListener("change", filterPrice);

//клик по карточке товара
const catcher = document.querySelector(".container");
catcher.addEventListener("click", ({ target }) => {
  if (target.closest(".market__card")) {
    alert("Это не магазин, глупенький!");
  }
});

/*
Функция может вернуть результат, который будет передан в вызвавший её код.
Директива return может находиться в любом месте тела функции. Как только
выполнение доходит до этого места, функция останавливается, и значение
возвращается в вызвавший её код (присваивается переменной result выше)
 */

/* Видимость переменных в модульной системе https://learn.javascript.ru/modules-intro/ */

/* при выбранном чекбоксе сделать сброс селекта сортировки по цене на первое значение */
