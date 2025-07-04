function Order() {
  let order = prompt("Nechta zakaz qilmoqchisiz?");

  let con = confirm(
    `Sizning zakazlaringiz soni ${order} ta jamia xarajatiz: ${
      order * 45000
    } sum`
  );

  switch (con) {
    case true:
      alert("Sizning zakazingiz qabul qilindi");
      break;
    case false:
      alert("Zakazingiz bekor qilindi");
      break;

    default:
      alert("Xatolik");
      break;
  }
}
