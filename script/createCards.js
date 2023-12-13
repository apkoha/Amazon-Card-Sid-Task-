import CARDS from "../books.json" assert { type: "json" };

//создание section class="market"
export const createMarketSection = () => {
  const storeSection = document.querySelector(".store");

  const marketSection = document.createElement("section");
  marketSection.classList.add("market");

  const marketContainer = document.createElement("div");
  marketContainer.classList.add("container");
  marketSection.append(marketContainer);

  storeSection.append(marketSection);
};

//создание карточки товара
export const createCard = (card) => {
  const marketContainer = document.querySelector(".container");
  const marketCard = document.createElement("div");
  marketCard.classList.add("market__card");
  // marketCard.classList.add(card.category);
  // marketCard.dataset.category = card.category;

  marketCard.innerHTML = `
  <img class="card__image" src="${card.urlToImages[0]}" alt=""  width="200" height="220">
  <div class="card__container">
    <h2 class="card__book-title">${card.title}</h2>
    <p class="card__book-author">${card.author}</p>
    <div class="book__grade_container">
      <svg class="star">
        <use xlink:href="./img/sprite.svg#star"></use>
      </svg>
    <p class="card__book-grade">${card.rating}</p>
    </div>
    <p class="card__book-price">$${card.price}</p>
    <p class="card__book-balance">Amount of books in the store: ${card.amount}</p>
  </div>
  `;

  marketContainer.append(marketCard);
};

//отрисовка карточек товара
export const getCards = (cards) => {
  for (const card of cards) {
    createCard(card);
  }
};

//по клику на чекбокс. получаем из него категорию книги и записываем в массив "categoryList"
export let categoryList = [];

//создание карточек отфильтрованных книг
const createFiltredBooks = (card) => {
  for (let i = 0; i < categoryList.length; i++) {
    if (categoryList[i] == card.category) {
      createCard(card);
    }
  }
};

//отрисовка отфильтрованных книг
export const showFiltredBooks = (cards) => {
  for (const card of cards) {
    createFiltredBooks(card);
  }
};

//функции для сортировки цены

//временный массив содержит объекты с позицией и значением сортировки
let booksPriceList = CARDS.map(function (card, i) {
  return { index: i, value: card.price };
});

//сортируем массив от меньшего к большему
booksPriceList.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }

  if (a.value < b.value) {
    return -1;
  }

  return 0;
});

//контейнер для результа сортировки
export let lowPriceBooks = booksPriceList.map(function (card) {
  return CARDS[card.index];
});

//сортируем массив от большего к меньшему
booksPriceList.sort(function (a, b) {
  if (a.value < b.value) {
    return 1;
  }

  if (a.value > b.value) {
    return -1;
  }

  return 0;
});

//контейнер для результа сортировки
export let topPriceBooks = booksPriceList.map(function (card) {
  return CARDS[card.index];
});

//отрисовка книг, отсортированных по цене по возрастанию
export const showLowPriceBooks = (lowPriceBooks) => {
  for (const book of lowPriceBooks) {
    createCard(book);
  }
};

//отрисовка книг, отсортированных по цене по убыванию
export const showTopPriceBooks = (topPriceBooks) => {
  for (const book of topPriceBooks) {
    createCard(book);
  }
};

/* arr.reverce() - возвращает ссылку, а не новый массив */
/* переделать сортировку на уже отрисованные книги, а не объекты json */
