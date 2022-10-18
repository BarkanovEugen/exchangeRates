//Содержит информацию о валюте
class ratesInfo {
    constructor(params){
        this.code = ""
        this.name = ""
    }
}

function declensionRouble (number) {
    let rouble = ["рубль", "рубля", "рублей"]
    let cases = [2, 0 , 1, 1, 1, 2]
    return rouble[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
}

function declensionCents (number) {
    let cents = ["копейка", "копейки", "копеек"]
    let cases = [2, 0 , 1, 1, 1, 2]
    return cents[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
}

function declensionForeignCurrencies (number, currency) {
    let currencyDeclensions = []
    if(this.currency == "AUD"){
        currencyDeclensions = ["австралийский доллар", "австралийских доллара", "австралийских долларов"]
    }
    if(this.currency == "CAD"){
        currencyDeclensions = ["канадский доллар", "канадских доллара", "канадских долларов"]
    }
    if(this.currency == "HKD"){
        currencyDeclensions = ["гонконгский доллар", "гонконгских доллара", "гонконгских долларов"]
    }
}
