document.getElementById("calculate").onclick = function () {
  var tienThanhToan = Number(document.getElementById("totalBill").value);
  var percentTip = Number(document.getElementById("tipPercent").value);
  var numNguoi = Number(document.getElementById("numPeople").value);

  if (tienThanhToan <= 0) {
    alert("Nhập lại");
  }else {
      if (percentTip <= 0) {
        alert("Nhâp lại");
        

      } else {
        if (numNguoi <= 0) {
          alert("Nhập lại");
        }
      }
  }
  var tipNguoi = (tienThanhToan * (percentTip/100))/numNguoi;
  let totalAmountPerPerson = document.getElementById("totalAmountPerPerson");
  totalAmountPerPerson.innerHTML = tipNguoi;
}
