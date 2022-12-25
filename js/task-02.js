const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector("#ingredients");

ingredientsList.append(
  ...ingredients.map((item) => {
    let itemList = document.createElement("li");
    itemList.textContent = item;
    return itemList;
  })
); 


// const ingredientsList = document.querySelector('#ingredients');

// const ingredient = ingredients.map(elem => {
//   const liEl = document.createElement('li');
//   liEl.textContent = elem;
//   return liEl;
// });

// ingredientsList.append(...ingredient);





