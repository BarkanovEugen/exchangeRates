function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + String.slice(1)
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
    let penny ="",  text = ""
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
    if( curr.match(/(доллар|бакс|австрал|канад|гонкон|новозел|зеланд|сингап)/gi) ){
        if( curr.match(/(австрал)/gi) ) {
            return "039"
        } else if ( curr.match(/(канад)/gi)) {
            return "124"
        } else if ( curr.match(/(гонкон)/gi)) {
            return "344"
        } else if ( curr.match(/(новозел)/gi)) {
            return "554"
        } else if ( curr.match(/(сингап)/gi)) {
            return "702"
        } else {
            return "840"
        }
    } else if( curr.match(/(евро)/gi) ) {
        return "978"
    } else if( curr.match(/(фунт|стерлинг)/gi) ) {
        return "826"
    } else if( curr.match(/(драм|армянск)/gi) ) {
        return "051"
    } else if( curr.match(/(фунт|стерлинг)/gi) ) {
        return "826"
    } else if( curr.match(/(юан|китай)/gi) ) {
        return "156"
    } else if( curr.match(/(йен|японск|иен)/gi) ) {
        return "392"
    } else if( curr.match(/(тенг|тэнг|казах)/gi) ) {
        return "398"
    } else if( curr.match(/(крон|норве|шведс|швец|чешск|чехия)/gi) ) {
        if ( curr.match(/(норве)/gi) ) {
            return "578"
        } else if ( curr.match(/(чешск|чехия)/gi) ) {
            return "203"
        } else {
            return "752"
        }
    } else if ( curr.match(/(франк|швейц)/gi) ) {
        return "756"
    } else if ( curr.match(/(манат|азерб)/gi) ) {
        return "944"
    } else if ( curr.match(/(лир|турецк)/gi) ) {
        return "949"
    } else if ( curr.match(/(белорус|беларус)/gi) ) {
        return "933"
    } else if ( curr.match(/(белорус|беларус|рубл)/gi) ) {
        if( curr.match(/(белорус|беларус)/gi) ){
            return "933"
        } else {
            return "643"
        }
    } else if ( curr.match(/(песо|мексик)/gi) ) {
        return "484"
    } else if ( curr.match(/(ренд|рэнд|южноафрик|южно африк|южно-африк)/gi) ) {
        return "710"
    } else if ( curr.match(/(дирхам|оаэ|эмират)/gi) ) {
        return "784"
    } else if ( curr.match(/(лев|болгар)/gi) ) {
        return "975"
    } else if ( curr.match(/(лари|грузин)/gi) ) {
        return "981"
    } else if ( curr.match(/(польск|злот)/gi) ) {
        return "985"
    }
}

//Обработка пользовательского запроса
let userInput = "300 евро"
let splittedUserInput = userInput.split(" ")
let matchedCurrency = []
//Поиск упоминания валют
for( i = 0; i < splittedUserInput.length; i++ ){
    let regexAllCurrencies = /(доллар|бакс|евро|фунт|стерлинг|драм|армянск|юан|китайск|йен|японск|иен|тенг|тэнг|казахс|крон|норве|шведс|швец|франк|швейцар|манат|азерб|лира|турец|австрал|канад|чешск|чехи|гонкон|мексик|песо|новозел|зеланд|сингапур|дирх|оаэ|эмират|белорус|беларус|болгарск|лев|льва|грузи|лар|польск|злот)/gi
    if( regexAllCurrencies.exec(splittedUserInput[i]) ){
        matchedCurrency.push(indentifyCurrency(splittedUserInput[i]))
    }
}
//Поиск чисел
let regexNumber = /[\d|,|.|e|E|\+]+/g;
let matchedNumber = userInput.match(regexNumber)

if(matchedNumber.length == 0){
    matchedNumber = "1"
}

class RatesInfo {
    constructor(params){
        this.code = ""
        this.curName = ""
        this.currBidDeclension = ""
        this.currOfferDeclension = ""
        this.currValue = ""
        this.roubleCode = "643"
        this.roubleDeclension = ""
        this.typeRate = "offer"
    }
}

if(matchedCurrency[0]){
    RatesInfo.code = matchedCurrency[0]
    RatesInfo.curName = declensionForeignCurrencies("1", RatesInfo.code)
    RatesInfo.currencyDeclension = declensionForeignCurrencies(matchedNumber, RatesInfo.code)
    RatesInfo.currValue = matchedNumber[0].toString()
}

//Запрос к микросервису
//Вставить актуальные url
let apiResponse = async function() {
    if( env == "IFT" ){
        const server = "urlIft"
    } else if ( env == "PREPROD" ){
        const server = "urlPreprod"
    } else {
        const server = "PROD"
    }
    const url = server
    const obj = {
        method: "GET",
        headers: {}
    };
    const response = await fetch(url, obj)
    if(response.ok){
        const json = response.json();
        if(json.state == "ERROR"){
            return json
        } else {
            return json
        }
    }
}

class SortingInfo {
    constructor(params){
        this.minLimit
        this.maxLimit
        this.scale
        this.offer
        this.bid
    }
}

function sortingRates(str) {
    let targetCurrRates = new Array();
    if (str && str.categories && str.categories[0] && str.categories[0].rates) {
        str.categories[0].rates.forEach(item => {
            if(item.currency1.numCode == RatesInfo.numCode && item.currency2.numCode == RatesInfo.roubleCode ) {
                targetCurrRates.push(item)
            }
        });
    } else {
        return "error"
    }
    if (targetCurrRates) {
        targetCurrRates.forEach(item =>{
            if ( RatesInfo.currValue >= item.amountRange.min && RatesInfo.currValue < item.amountRange.max || (RatesInfo.currValue >= item.amountRange.min) ){
                SortingInfo.minLimit = item.amountRange.min;
                SortingInfo.maxLimit = item.amountRange.max;
                if (SortingInfo.maxLimit == undefined){
                    SortingInfo.maxLimit = "бесконечности "
                }
                SortingInfo.scale = item.scale;
                SortingInfo.offer = properRound(item.offer, 2);
                SortingInfo.bid = properRound(item.bid, 2);
            }
        })
    }
}

let text = ""
let tts = ""
try{
    if(matchedCurrency[0] && matchedCurrency[0] != "643"){
        //Одиночный курс
        sortingRates(apiResponse)
        if(RatesInfo.currValue == 1){
            text += capitalizeFirstLetter(RatesInfo.curName) + "\n • Курс покупки: " + declensionRoublePlusPenny(SortingInfo.offer) + "\n • Курс продажи: " + declensionRoublePlusPenny(SortingInfo.bid)
            tts += capitalizeFirstLetter(RatesInfo.curName) + "\n • Курс покупки: " + declensionRoublePlusPenny(SortingInfo.offer) + "\n • Курс продажи: " + declensionRoublePlusPenny(SortingInfo.bid)
        } else {
            text += RatesInfo.currValue + " " + declensionForeignCurrencies(RatesInfo.currValue, RatesInfo.code) + "\n • Курс покупки: " + declensionRoublePlusPenny(SortingInfo.offer*RatesInfo.currValue) + "\n • Курс продажи: " + declensionRoublePlusPenny(SortingInfo.bid*RatesInfo.currValue)
            tts += RatesInfo.currValue + " " + declensionForeignCurrencies(RatesInfo.currValue, RatesInfo.code) + "\n • Курс покупки: " + declensionRoublePlusPenny(SortingInfo.offer*RatesInfo.currValue) + "\n • Курс продажи: " + declensionRoublePlusPenny(SortingInfo.bid*RatesInfo.currValue)
        } 
    } else {
        //Валюта не определена, выдаём общие курсы
        //евро
        RatesInfo.code = "978"
        RatesInfo.curName = declensionForeignCurrencies("1", RatesInfo.code)
        RatesInfo.currencyDeclension = declensionForeignCurrencies("1", RatesInfo.code)
        RatesInfo.currValue = "1"
        sortingRates(apiResponse)
        text += capitalizeFirstLetter(RatesInfo.curName) + "\n • Курс покупки: " + declensionRoublePlusPenny(SortingInfo.offer) + "\n • Курс продажи: " + declensionRoublePlusPenny(SortingInfo.bid) + "\n"
        tts += capitalizeFirstLetter(RatesInfo.curName) + "\n • Курс покупки: " + declensionRoublePlusPenny(SortingInfo.offer) + "\n • Курс продажи: " + declensionRoublePlusPenny(SortingInfo.bid) + ". "
        RatesInfo.code = "840"
        RatesInfo.curName = declensionForeignCurrencies("1", RatesInfo.code)
        RatesInfo.currencyDeclension = declensionForeignCurrencies("1", RatesInfo.code)
        RatesInfo.currValue = "1"
        sortingRates(apiResponse)
    }
} catch(error) {
    errorInfo = error
}

function finalAnswer() {
    if(!error){
        return {
            "data": {
                "response": text,
                "context": {
                    "tts": tts
                },
            },
        };
    } else {
        return {
            "data": {
                "response": "Произошла ошибка.",
                "context": {
                    "tts": "Произошла ошибка."
                },
            },
        };
    }
}