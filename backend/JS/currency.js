
var currency_I = document.getElementById("Currency_I")
var currency_O = document.getElementById("Currency_O")
var from_input = document.getElementById("From")
var to_input = document.getElementById("To")

var str = ``
var currencies = []

const url_Id = "https://free.currconv.com/api/v7/countries?apiKey=cff5a899e1a0e8599353"
async function getId() {
    const response = await fetch(url_Id)
    const data = await response.json()
    currencies = [...Object.values(data.results)]
    currencies.sort(function(a, b){
        if(a.name > b.name){
            return 1
        }
        else if(a.name < b.name){
            return -1
        }
        else{
            return 0
        }

    })
    for(var i=0; i<currencies.length; i++){
        str += `<option style="font-weight: 700;" value="${currencies[i].currencyId}"><strong>${currencies[i].name}</strong> (${currencies[i].currencySymbol}  ${currencies[i].currencyId})</option>`
    }
    currency_I.innerHTML = str
    currency_O.innerHTML = str
}
getId()

function SelectCurrency() {
    var input_currency = currency_I.value
    var output_currency = currency_O.value
    console.log(input_currency)
    console.log(output_currency)
}

function SelectValue() {
    var input_value = from_input.value
    var output_value = to_input.value
    console.log(input_value)
    console.log(output_value)
}

async function Convert(){
    const url_Rate=`https://free.currconv.com/api/v7/convert?q=${currency_I.value}_${currency_O.value}&compact=ultra&apiKey=cff5a899e1a0e8599353`
    const response = await fetch(url_Rate)
    const data = await response.json()
    const conv_Value = Object.values(data)
    if(/^\d+$/.test(from_input.value)){
        const result = conv_Value*from_input.value
        const round_Result = result.toFixed(4)
        to_input.value = round_Result
    }
    else{
        alert("enter a valid number")
        from_input.value = ''
    }
    
}

document.getElementById("reset").addEventListener("click", function(){
    from_input.value = ''
    to_input.value = ''
})
