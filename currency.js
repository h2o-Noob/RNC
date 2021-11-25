console.log('hi')
var currency_I = document.getElementById("Currency_I")
var currency_O = document.getElementById("Currency_O")

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
        str += `<option style="font-weight: 700;" value="${currencies[i].alpha3}"><strong>${currencies[i].name}</strong> (${currencies[i].currencySymbol}  ${currencies[i].currencyId})</option>`
    }
    currency_I.innerHTML = str
    currency_O.innerHTML = str
}
getId()

function SelectValue() {
    console.log(currency_I.value)
    console.log(currency_O.value)
}


