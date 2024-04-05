let list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");
const buttonReduceAll = document.querySelector(".reduce-all")
const buttonFilterAll = document.querySelector(".filter-all")
let myLi = "";

function showAll(productsArray) {
myLi = ''

  productsArray.forEach((product) => {
    myLi += `
      <li>
      <img src=${product.src}>
         <p>${product.name}<br><span>R$ ${product.price}</p></span>
     </li>
     `;
  });

  list.innerHTML = myLi;
}

function mapAllitems() {
  const newPrices = myMenu.map((product) => ({
    ...product,
    price: product.price * 0.9,
    
  }));

 showAll(newPrices)

}

function sumAllItems(){
  const totalValue = myMenu.reduce((acc, curr)=> acc + curr.price, 0)

  list.innerHTML = 
  `
  <li>

     <p>O valor total dos itens é ${totalValue}</p>
 </li>
 `

}

function filterItems(){
  const filterVegan = myMenu.filter( (product)=> product.vegan===true)

 showAll(filterVegan)
}
 
buttonShowAll.addEventListener("click", () => showAll(myMenu));
buttonMapAll.addEventListener("click", mapAllitems);
buttonReduceAll.addEventListener("click", sumAllItems)
buttonFilterAll.addEventListener("click", filterItems)
