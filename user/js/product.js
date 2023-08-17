const getProducts = () => {
  productSmartPhone
    .getProducts()
    .then((res) => {
      products = res.data
      renderProducts(products)
    })
    .catch((err) => {
      console.log('Lỗi')
      products = []
    })
}
getProducts()
renderTotalProduct('totalProduct')
const filter = () => {
  const productType = document.getElementById('filter').value
  console.log(productType)
  if (!productType) {
    return renderProducts(products)
  }

  const filterProducts = products.filter((phone) => {
    return phone.type.toLowerCase() === productType
  })
  renderProducts(filterProducts)
}

const addPhone = (id) => {
  const checkPhone = cart.findIndex((item) => {
    return +item.phone.id === id
  })
  if (checkPhone === -1) {
    const selectedPhone = products.find((phone) => {
      return +phone.id === id
    })

    const objectPhone = {
      phone: selectedPhone,
      quantity: 1,
    }
    cart.push(objectPhone)
  } else {
    const oldData = cart[checkPhone]
    const newData = {
      phone: oldData.phone,
      quantity: oldData.quantity + 1,
    }
    cart[checkPhone] = newData
  }
  renderTotalProduct('totalProduct')
  const dataJson = JSON.stringify(cart)
  localStorage.setItem('cart', dataJson)
}
