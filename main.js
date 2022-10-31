console.warn("estoy en el js");

const student = 0.2,
  trainee = 0.5,
  junior = 0.85,
  ticket = 200;
quantity = 1;
var categorySelected = "student";

function viewPrice() {
  let price = 0;
  quantity = document.getElementById("inputCantidad").value;
  categorySelected = document.getElementById("inputCategoria").value;
  switch (categorySelected) {
    case "student":
      price = ticket * student * quantity;
      break;
    case "trainee":
      price = ticket * trainee * quantity;
      break;
    case "junior":
      price = ticket * junior * quantity;
      break;
    default:
      price = 0;
  }
  document.getElementById("priceTotal").innerHTML = price;
}

function clearPrice() {
  document.getElementById("priceTotal").innerHTML = "";
  document.getElementById("priceTotal").innerHTML = "";
}
