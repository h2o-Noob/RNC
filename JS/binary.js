var base_I = document.getElementById("Base_I")
var base_O = document.getElementById("Base_O")
var from_input = document.getElementById("From")
var to_input = document.getElementById("To")




async function Convert(){
    const url = `https://networkcalc.com/api/binary/${from_input.value}?from=${base_I.value}&to=${base_O.value}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}