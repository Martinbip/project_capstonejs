// Thằng này a phải xét if else để khi không có lỗi thì thằng span nó không hiện nữa

function showMessage(idSpan, message) {
  if (!message) {
    document.getElementById(idSpan).innerHTML = ''
  } else {
    document.getElementById(idSpan).innerHTML = message
  }
}

// function kiemTraTrung(tenSP, productServ){
//     productServ
//     .getList()
//     .then(function(res){
//         const dataProduct = res.data
//     })
//     .catch(function(err){
//     });

//     var index = productServ.findIndex(function(item){
//         return item.name == tenSP;
//     });
//     if (index == -1){
//         return true
//     } else {
//         document.getElementById("spantenSP") = "Sản phẩm này đã có trên danh sách sản phẩm"
//         return false
//     }
// }

// function kiemTraTrong(min, idSpan, message, value) {
//   var length = value.length

//   if (length >= min) {
//     showMessage(idSpan, '')
//     return true
//   } else {
//     showMessage(idSpan, message)
//     return false
//   }
// }

// hàm này a check rỗng để trả về chuỗi thông báo, lấy chuỗi này gắn vào vào hàm showMessage
// kiểm tra từng ô input một không làm gộp, s này validate một ô sẽ có nhiều trường hợp để validate nên là a phải check từng ô
const kiemTraName = (value) => {
  if (!value) {
    return ' Không để trống'
  }
}
const kiemtraGia = (value) => {
  if (!value) {
    return ' Không để trống'
  }
  // Anh tìm lại cái kiểm tra là số điền vào đây ( thêm cái if nữa rồi return ra string)
}
const kiemTraMH = (value) => {
  if(!value){
    return ' Không để trống'
  }
}
const kiemTraBackCM = (value) => {
  if(!value){
    return ' Không để trống'
  }
}
const kiemTraFrontCM = (value) => {
  if(!value){
    return ' Không để trống'
  }
}
const kiemTraIMG = (value) => {
  if(!value){
    return ' Không để trống'
  }
}
const kiemTraMoTa = (value) => {
  if(!value){
    return ' Không để trống'
  }
}
const kiemTraLoai = (value) => {
  if(value == ""){
    return ' Không để trống'
  }
}





// hàm này là check tổng của validate để qua bên main check mỗi hàm này cho nó ngắn code dễ quản lí

const checkValiDate = (value) => {
  const checkName = kiemTraName(value.name)
  showMessage('spantenSP', checkName)
  const checkGia = kiemtraGia(value.price)
  // thêm id của thẻ thông báo vào giùm em
  showMessage('spangiaSP', checkGia)
  // dùng && nghe anh
  const checkMH = kiemTraMH(value.screen)
  showMessage('spanmanHinhSP', checkMH)
  const checkBackCM = kiemTraBackCM(value.backCamera)
  showMessage('spanbackCamera', checkBackCM)
  const checkFrontCM = kiemTraFrontCM(value.frontCamera)
  showMessage('spanfrontCamera', checkFrontCM)
  const checkIMG = kiemTraIMG(value.img)
  showMessage('spanHinhSP', checkIMG)
  const checkMoTa = kiemTraMoTa(value.desc)
  showMessage('spanmoTaSP', checkMoTa)
  const checkLoai = kiemTraLoai(value.type)
  showMessage('spanloaiSP', checkLoai)

  if (!checkName && !checkGia && !checkMH && !checkBackCM && !checkFrontCM && !checkIMG && !checkMoTa && !checkLoai) {
    return true
  } else {
  return false
}
}

// xét tiếp mấy ô khác, em làm sẵn form cho anh rồi ấy, làm tiếp thôi ..... go!!!
