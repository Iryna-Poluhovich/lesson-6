import { getAllProducts, getSingleProduct, addProduct } from './requests/products';

import { markupAllProducts, markupSingleProduct, markupAddProduct } from './services/markupService';


const allProducts = document.querySelector("#allProducts");
// getAllProducts().then(console.log)

const singleProductForm = document.querySelector("#singleProductForm");
const singleProduct = document.querySelector("#singleProduct");
const newProductForm = document.querySelector("#newProductForm");
const newProductSection = document.querySelector("#newProductSection");




getAllProducts().then(({ data: { products } }) => {
  console.log(products);
  // const markupCards = markupAllProducts(products);
  // allProducts.insertAdjacentHTML('beforeend', markupCards);
});


singleProductForm.addEventListener("submit", findProductByID);

function findProductByID(event) {
  event.preventDefault();
  const id = event.target.elements.id.value;
  // getSingleProduct(id)
  //   .then(console.log)

  getSingleProduct(id)
    .then(({data}) => {
      console.log(data);
      const markupCard = markupSingleProduct(data);
      singleProduct.innerHTML = markupCard;
      singleProductForm.reset();
  })
}

newProductForm.addEventListener("submit", addNewProduct);

function addNewProduct(event) {
  event.preventDefault();

  const title = event.target.elements.title.value;
  const brand = event.target.elements.brand.value;
  const price = event.target.elements.price.value;
  const description = event.target.elements.description.value;


  const newProduct = {
    title,
    brand,
    price,
    description
  }
  
  addProduct(newProduct)
    .then(({ data }) => {
      const markupNewProduct = markupAddProduct(data);
      newProductSection.innerHTML = markupNewProduct;
      newProductForm.reset();
  })

}
