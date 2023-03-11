function display(x) {
  document.getElementById("numberValue").value += x;
  return x;
}

function clearDisplay() {
  document.getElementById("numberValue").value = "";
}

function deleteOne() {
  let nilaiInput = document.getElementById("numberValue").value;
  let hapusSatu = nilaiInput.substring(0, nilaiInput.length - 1);
  document.getElementById("numberValue").value = hapusSatu;
}

function getResult() {
  let nilaiInput = document.getElementById("numberValue").value;
  let hasil = eval(nilaiInput);
  document.getElementById("numberValue").value = hasil;
}
