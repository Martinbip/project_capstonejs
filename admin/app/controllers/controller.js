function renderProductList(productArr) {
  var contentHTML = ''

  productArr.forEach(function (item) {
    var content = `<tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td><img src="${item.img}" alt="" /></td>
            <td>${item.desc}</td>
            <td>
            <button class="btn btn-dark" onclick=xoaSP(${item.id})>Xóa</button>
            <button class="btn btn-warning" onclick=suaSP(${item.id})>Sửa</button>
            </td>
        </tr>`

    contentHTML += content
  })
  document.getElementById('tblDanhSachSP').innerHTML = contentHTML
}

function batLoading() {
  document.getElementById('spinner').style.display = 'flex'
}

function tatLoading() {
  document.getElementById('spinner').style.display = 'none'
}

function layThongTinTuForm() {
  var tenSP = document.getElementById('TenSP').value
  var giaSP = document.getElementById('GiaSP').value
  var manHinhSP = document.getElementById('manHinhSP').value
  var backCM = document.getElementById('backCamera').value
  var frontCM = document.getElementById('frontCamera').value
  var hinhSP = document.getElementById('HinhSP').value
  var moTaSP = document.getElementById('moTaSP').value
  var loaiSP = document.getElementById('loaiSP').value

  return {
    name: tenSP,
    price: giaSP,
    screen: manHinhSP,
    backCamera: backCM,
    frontCamera: frontCM,
    img: hinhSP,
    desc: moTaSP,
    type: loaiSP,
  }
}

function showThongTinLenForm(product) {
  document.getElementById('TenSP').value = product.name
  document.getElementById('GiaSP').value = product.price
  document.getElementById('manHinhSP').value = product.screen
  document.getElementById('backCamera').value = product.backCamera
  document.getElementById('frontCamera').value = product.frontCamera
  document.getElementById('HinhSP').value = product.img
  document.getElementById('moTaSP').value = product.desc
  document.getElementById('loaiSP').value = product.type
}
