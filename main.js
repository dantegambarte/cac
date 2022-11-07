const student = 0.2,
  trainee = 0.5,
  junior = 0.85,
  ticket = 200;
let quantity = 1;
let categorySelected = "student";

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
    case "general":
      price = ticket * quantity;
      break;
    default:
      price = 0;
  }
  document.getElementById("priceTotal").innerHTML = price;
}

function clearPrice() {
  document.getElementById("priceTotal").innerHTML = "";
  document.getElementById("inputNombre").value = "";
  document.getElementById("inputApellido").value = "";
  document.getElementById("inputCorreo").value = "";
  document.getElementById("inputCantidad").value = 1;
  document.getElementById("inputCategoria").value = "student";
}
