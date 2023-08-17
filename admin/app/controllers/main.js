var idProductUpdate = null

function fetchProductList() {
  batLoading()
  productServ
    .getList()
    .then(function (res) {
      renderProductList(res.data)

      tatLoading()
    })
    .catch(function (err) {
      tatLoading()
    })
}
fetchProductList()

function xoaSP(id) {
  batLoading()
  productServ
    .delete(id)
    .then(function (res) {
      fetchProductList()
      tatLoading()
    })
    .catch(function (err) {
      tatLoading()
    })
}
/** Hàm này là thành công rồi mới check thông tin
 * (.then) là thành công rồi thì làm gì ở sau đó.
 * Nên là phải check từ lúc chưa gọi thằng API về.
 *
  function themSP() {
  var isValid = kiemTraTrong(1, 'spantenSP', 'Không được để trống', productServ)
  if (isValid) {
    var newProduct = layThongTinTuForm()
    productServ
      .create(newProduct)
      .then(function (res) {
        fetchProductList()
        $('#myModal').modal('hide')
      })
      .catch(function (err) {})
  }
  document.getElementById('formQLSp').reset()
}
 *
 *
 */

const themSP = () => {
  newProduct = layThongTinTuForm()
  if (checkValiDate(newProduct)) {
    productServ
      .create(newProduct)
      .then(function (res) {
        fetchProductList()
        $('#myModal').modal('hide')
      })
      .catch(function (err) {})
    document.getElementById('formQLSp').reset()
  }
}

function suaSP(id) {
  idProductUpdate = id
  $('#myModal').modal('show')
  productServ
    .getById(id)
    .then(function (res) {
      tatLoading()
      showThongTinLenForm(res.data)
    })
    .catch(function (err) {
      tatLoading()
    })
}

function capNhatSP() {
  var product = layThongTinTuForm()
  productServ
    .update(idProductUpdate, product)
    .then(function (res) {
      fetchProductList()
      $('#myModal').modal('hide')
    })
    .catch(function (err) {})
}

function themMoi() {
  document.getElementById('formQLSp').reset()
}
