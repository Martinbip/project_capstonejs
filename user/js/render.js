const renderProducts = (products) => {
  let contentHTML = ''
  products.forEach((element) => {
    let content = `
    <div class="item">
      <div class="img_wrapper">
        <img src="${element.img}" alt="" />
      </div>
      <div class="desc pt-5">
        <div class="title">
          <h3>Tên SP : ${element.name}</h3>
        </div>
        <div class="price">
          <h3>${element.desc}</h3>
          <p class="text-red-500 text-2xl">${formatCurrency(element.price)}</p>
          <button
           onclick ="addPhone(${element.id})"
            class="flex ml-auto bg-transparent transition-all hover:bg-blue-500 text-yellow-500 font-semibold hover:text-white mt-2 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="file: h-6 w-6 "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
          </button>
        </div>
      </div>
    </div>
 
  `
    contentHTML += content
  })

  document.getElementById('render').innerHTML = contentHTML
}

const renderCart = (cart) => {
  let contentHTML = ''
  let totalProductCost = 0
  cart.forEach((item) => {
    let totalPrice = calculateTotalPricePhone(item.quantity, item.phone.price)
    totalProductCost += totalPrice
    let content = ` 
    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
    <div class="flex w-2/5">
    <div class="w-20">
    <img class="h-24" src="${item.phone.img}" />
  </div>
  <div class="flex flex-col justify-between ml-4 flex-grow">
    <span class="font-bold text-sm">${item.phone.name}</span>
    <span class="text-red-500 text-xs">${item.phone.type}</span>
    <button onclick="deleteProduct(${
      item.phone.id
    })" class="flex font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>
  </div>
</div>
<div class="flex justify-center w-1/5">
 
  <button onclick="decreaseProduct(${
    item.phone.id
  })" class ="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center">-</button>

  <input class="mx-2 border text-center w-8" type="text" value="${item.quantity}" />

  <button onclick="increaseProduct(${
    item.phone.id
  })" class ="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center">+</button>

</div>
<span class="text-center w-1/5 font-semibold text-sm">${formatCurrency(item.phone.price)}</span>
<span class="text-center w-1/5 font-semibold text-sm">${formatCurrency(totalPrice)}</span>
</div>
`
    contentHTML += content
  })
  console.log(totalProductCost)
  document.getElementById('product').innerHTML = contentHTML
  document.getElementById('totalProductCost').innerHTML = `${formatCurrency(totalProductCost)}`
  if (cart.length === 0) {
    document.getElementById('removeAll').style.display = 'none'
    document.getElementById('tableCart').style.display = 'none'
    document.getElementById('buttonCart').style.display = 'none'
    document.getElementById('linkShop').style.display = 'none'
    document.getElementById('notification').innerHTML = `
    <div class="text-center text-3xl text-yellow-500" >Cart is empty
    <div>
    <a href="../index.html" class="flex justify-center font-semibold text-yellow-600 text-sm mt-10">
            <svg class="fill-current mr-2 text-yellow-600 w-4" viewBox="0 0 448 512">
              <path
                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
              />
            </svg>
            Go Shopping
          </a>
    </div>
    </div>
    `
  }
}

const renderTotalProduct = (elementId) => {
  let totalProduct = getTotalProduct()
  document.getElementById(elementId).innerHTML = totalProduct
}
