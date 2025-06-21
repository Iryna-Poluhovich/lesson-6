import { getAllProducts, getSingleProduct } from './requests/products';

import { markupAllProducts, markupSingleProduct } from './services/markupService';


const allProducts = document.querySelector("#allProducts");
// getAllProducts().then(console.log)

const singleProductForm = document.querySelector("#singleProductForm");
const singleProduct = document.querySelector("#singleProduct");






getAllProducts().then(({ data: { products } }) => {
  console.log(products);
  // const markupCards = markupAllProducts(products);
  // allProducts.insertAdjacentHTML('beforeend', markupCards);
});


singleProductForm.addEventListener("submit", findProductById)

function findProductById(event) {

event.preventDefault();

const id = event.target.elements.id.value
// getSingleProduct(id)
// .then(console.log)
getSingleProduct(id)
.then(({data}) => {
console.log(data);

const markupCard = markupSingleProduct(data)

singleProduct.innerHTML = markupCard;

singleProductForm.reset();

})
}