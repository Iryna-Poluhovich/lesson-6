// шаблон для всіх продуктів

export const markupAllProducts = (products) =>{
    return products.map(({brand, description, images, price, stock, title})=>{
        return ` <li class="product">
      <img src="${images[0]}" alt="${title}" width="200">
      <h2>Brand: ${brand}</h2>
      <h3>Model: ${title}</h3>
      <p>Price: ${price}</p>
      <p>Stock: ${stock}</p>
      <p>Description: ${description}</p>
    </li>`
    }).join('')
}