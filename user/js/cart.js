renderCart(cart)
renderTotalProduct('totalProduct')

const decreaseProduct = (id) => {
  const phone = cart.findIndex((item) => {
    return +item.phone.id === id
  })
  const oldPhone = cart[phone]
  const newPhone = {
    quantity: oldPhone.quantity - 1,
    phone: oldPhone.phone,
  }
  if (newPhone.quantity === 0) {
    deleteProduct(id)
  } else {
    cart[phone] = newPhone
    renderCart(cart)
    renderTotalProduct('totalProduct')
    const dataJson = JSON.stringify(cart)
    localStorage.setItem('cart', dataJson)
  }
}

const increaseProduct = (id) => {
  const phone = cart.findIndex((item) => {
    return +item.phone.id === id
  })

  const oldPhone = cart[phone]
  const newPhone = {
    quantity: oldPhone.quantity + 1,
    phone: oldPhone.phone,
  }
  cart[phone] = newPhone
  renderCart(cart)
  renderTotalProduct('totalProduct')
  const dataJson = JSON.stringify(cart)
  localStorage.setItem('cart', dataJson)
}

const deleteProduct = (id) => {
  cart = cart.filter((item) => {
    console.log(+item.phone.id, id)
    return +item.phone.id !== id
  })
  let newDataCart = JSON.stringify(cart)
  localStorage.setItem('cart', newDataCart)
  renderCart(cart)
  renderTotalProduct('totalProduct')
}
const removeLocal = () => {
  localStorage.removeItem('cart')
  cart = []
  renderCart(cart)
  renderTotalProduct('totalProduct')
}

const oderProduct = () => {
  removeLocal()
}

const removeAll = () => {
  removeLocal()
}
