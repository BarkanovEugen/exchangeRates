class ratesInfo {
    constructor(params){
        this.code = ""
        this.name = ""
        this.currencyDeclension = ""
    }
}

function declensionRouble (number) {
    let rouble = ["рубль", "рубля", "рублей"]
    let cases = [2, 0 , 1, 1, 1, 2]
    return rouble[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
}

function declensionPenny (number) {
    let penny = ["копейка", "копейки", "копеек"]
    let cases = [2, 0 , 1, 1, 1, 2]
    return penny[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
}

function declensionRoublePlusPenny (number) {
    let rouble = Math.trunc(number)
    let penny, text = ""
    let numberToString = number.toString()
    if( numberToString.includes(".") ) {
        penny = numberToString.split(".")[1]
        console.log(1, penny, numberToString)
    } else if ( numberToString.includes(",") ) {
        penny = numberToString.split(",")[1]
        console.log(2)
    }
    console.log(penny)
    if ( penny.length == 1){
        penny += "0"
    }
    if ( penny != "" ){
        text = Math.trunc(number) + " " + declensionRouble(Math.trunc(number)) + " " + penny + " " + declensionPenny(penny)
    } else {
        text = Math.trunc(number) + " " + declensionRouble(Math.trunc(number))
    }
    return text
}

function declensionForeignCurrencies (number, currency) {
    currency = currency.toUpperCase();
    number = Math.trunc(number);
    let currencyDeclensions = [];
    let cases = [2, 0 , 1, 1, 1, 2];
    if( currency == "AUD" || currency == "039" ){
        currencyDeclensions = ["австралийский доллар", "австралийских доллара", "австралийских долларов"];
    }
    if( currency == "CAD" || currency == "124" ){
        currencyDeclensions = ["канадский доллар", "канадских доллара", "канадских долларов"];
    }
    if( currency == "HKD" || currency == "344" ){
        currencyDeclensions = ["гонконгский доллар", "гонконгских доллара", "гонконгских долларов"];
    }
    if( currency == "NZD" || currency == "554" ){
        currencyDeclensions = ["новозеландский доллар", "новозеландских доллара", "новозеландских долларов"];
    }
    if( currency == "SGD" || currency == "702" ){
        currencyDeclensions = ["сингапурский доллар", "сингапурских доллара", "сингапурских долларов"];
    }
    if( currency == "USD" || currency == "840" ){
        currencyDeclensions = ["доллар США", "доллара США", "долларов США"];
    }
    if( currency == "EUR" || currency == "978" ){
        currencyDeclensions = ["евро", "евро", "евро"];
    }
    if( currency == "GBP" || currency == "826" ){
        currencyDeclensions = ["фунт стерлингов", "фунта стерлингов", "фунтов стерлингов"];
    }
    if( currency == "AMD" || currency == "051" ){
        currencyDeclensions = ["армянский драм", "армянских драма", "армянских драмов"];
    }
    if( currency == "CNY" || currency == "156" ){
        currencyDeclensions = ["китайский юань", "китайских юаня", "китайских юаней"];
    }
    if( currency == "JPY" || currency == "392" ){
        currencyDeclensions = ["японская йена", "японских йены", "японских йен"];
    }
    if( currency == "KZT" || currency == "398" ){
        currencyDeclensions = ["казахский тенге", "казахских тенге", "казахских тенге"];
    }
    if( currency == "NOK" || currency == "578" ){
        currencyDeclensions = ["норвежская крона", "норвежские кроны", "норвежских крон"];
    }
    if( currency == "CZK" || currency == "203" ){
        currencyDeclensions = ["чешская крона", "чешские кроны", "чешских крон"];
    }
    if( currency == "SEK" || currency == "752" ){
        currencyDeclensions = ["шведская крона", "шведские кроны", "шведских крон"];
    }
    if( currency == "CHF" || currency == "756" ){
        currencyDeclensions = ["швейцарский франк", "швейцарских франка", "швейцарских франков"];
    }
    if( currency == "AZN" || currency == "944" ){
        currencyDeclensions = ["азербайджанский манат", "азербайджанских маната", "азербайджанских манатов"];
    }
    if( currency == "TRY" || currency == "949" ){
        currencyDeclensions = ["турецкая лира", "турецкие лиры", "турецких лир"];
    }
    if( currency == "BYN" || currency == "933" ){
        currencyDeclensions = ["белорусский рубль", "белорусских рубля", "белорусских рублей"];
    }
    if( currency == "RUB" || currency == "RUR" || currency == "643" ){
        currencyDeclensions = ["рубль", "рубля", "рублей"];
    }
    if( currency == "MXN" || currency == "484" ){
        currencyDeclensions = ["мексиканский песо", "мексиканских песо", "мексиканских песо"];
    }
    if( currency == "ZAR" || currency == "710" ){
        currencyDeclensions = ["южно-афкриканский рэнд", "южно-афкриканских рэнда", "южно-афкриканских рэндов"];
    }
    if( currency == "AED" || currency == "784" ){
        currencyDeclensions = ["дирхам", "дирхама", "дирхамов"];
    }
    if( currency == "BGN" || currency == "975" ){
        currencyDeclensions = ["болгарский лев", "болгарских лева", "болгарских левов"];
    }
    if( currency == "GEL" || currency == "981" ){
        currencyDeclensions = ["грузинский лари", "грузинских лари", "грузинских лари"];
    }
    if( currency == "PLN" || currency == "985" ){
        currencyDeclensions = ["польский злотый", "польских злотых", "польских злотых"];
    }
    return currencyDeclensions[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
}

function indentifyCurrency(curr){
    if(curr.match()){

    }
}

//Обработка пользовательского запроса
let userInput = ""
let splittedUserInput = userInput.split(" ")
let matchedCurrency, matchedNumber = []
//Поиск упоминания валют
for( i = 0; i < splittedUserInput.length; i++ ){
    let regexAllCurrencies = /(доллар|бакс|евро|фунт|стерлинг|драм|армянск|юан|китайск|йен|японск|иен|тенг|тэнг|казахс|крон|норве|шведс|швец|франк|швейцар|манат|азерб|лира|турец|австрал|канад|чешск|чехи|гонкон|мексик|песо|новозел|зеланд|сингапур|дирх|оаэ|эмират|белорус|беларус|болгарск|лев|льва|грузи|лар|польск|злот)/gi
    if( regexAllCurrencies.exec(splittedUserInput[i]) ){
        matchedCurrency.push(splittedUserInput[i])
    }
}
//Поиск чисел
for ( i = 0; i < splittedUserInput.length; i++ ){
    let regexNumber = /([0-9]+)/gm
    if(regexNumber.exec(splittedUserInput[i]) ){
        matchedNumber.push(splittedUserInput[i])
    }
}
