let products = []
let cart = []
let dataCart = localStorage.getItem('cart')
if (dataCart != null) {
  cart = JSON.parse(dataCart)
}
const getTotalProduct = () => {
  let totalProduct = 0
  for (let i = 0; i < cart.length; i++) {
    totalProduct += cart[i].quantity
  }
  return totalProduct
}

const calculateTotalPricePhone = (price, quantity) => {
  return price * quantity
}

const formatCurrency = (value) => {
  let result = String(value).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  return result + ' đ'
}
