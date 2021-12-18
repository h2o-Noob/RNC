var base_I = document.getElementById("Base_I");
var base_O = document.getElementById("Base_O");
var from_input = document.getElementById("From");
var to_input = document.getElementById("To");

function Convert() {
  if (base_I.value === base_O.value) {
    to_input.value = from_input.value;
  } else if (base_I.value === "10" && base_O.value === "2") {
    let binaryNum = new Array(32);
    let result = "";
    n = from_input.value;
    let i = 0;
    while (n > 0) {
      binaryNum[i] = n % 2;
      n = Math.floor(n / 2);
      i++;
    }
    for (let j = i - 1; j >= 0; j--) result += binaryNum[j];
    to_input.value = result;
    console.log(result)
  } else {
    var binary = from_input.value;
    var digit = parseInt(binary, 2);
    to_input.value = digit
  }
}
